(() => {
  const legacyRoutes = { '/projects': '/projects/', '/books': '/books/', '/': '/' };
  const redirectLegacyRoute = () => {
    const legacy = window.location.hash.slice(1).replace(/\/$/, '') || '/';
    if (window.location.hash.startsWith('#/') && legacyRoutes[legacy]) {
      window.location.replace(document.body.dataset.baseurl + legacyRoutes[legacy]);
      return true;
    }
    return false;
  };
  window.addEventListener('hashchange', redirectLegacyRoute);
  if (redirectLegacyRoute()) return;
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : systemTheme.matches;
  const updateToggle = () => {
    const label = isDark() ? 'Switch to light theme' : 'Switch to dark theme';
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
  };
  if (toggle) {
    toggle.hidden = false;
    updateToggle();
    systemTheme.addEventListener('change', updateToggle);
    toggle.addEventListener('click', () => {
      root.dataset.theme = isDark() ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (_) {}
      updateToggle();
    });
  }
  document.querySelectorAll('.copy-citation').forEach(button => {
    button.addEventListener('click', async () => {
      const panel = button.closest('.citation-content');
      const status = panel.querySelector('.copy-status');
      try {
        await navigator.clipboard.writeText(panel.querySelector('code').textContent.trim());
        status.textContent = 'Copied.';
      } catch (_) { status.textContent = 'Select the citation above to copy it.'; }
    });
  });
  const search = document.querySelector('#book-search');
  if (search) {
    document.querySelector('.book-tools').hidden = false;
    const category = document.querySelector('#book-category');
    const books = Array.from(document.querySelectorAll('.book'));
    const filterBooks = () => {
      const query = search.value.trim().toLocaleLowerCase();
      let visible = 0;
      books.forEach(book => {
        const matches = book.dataset.title.toLocaleLowerCase().includes(query) && (category.value === 'all' || book.dataset.category === category.value);
        book.hidden = !matches;
        if (matches) visible += 1;
      });
      document.querySelector('#book-count').textContent = `${visible} ${visible === 1 ? 'book' : 'books'}`;
      document.querySelector('#book-empty').hidden = visible !== 0;
    };
    search.addEventListener('input', filterBooks);
    category.addEventListener('change', filterBooks);
  }
})();
