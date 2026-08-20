(function () {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const comments = document.querySelector('.comments[data-repository]');
  let themeTransitionTimer;

  function utterancesTheme() {
    return root.dataset.theme === 'dark' ? 'github-dark' : 'boxy-light';
  }

  function syncUtterancesTheme() {
    const frame = document.querySelector('.utterances-frame');
    if (frame && frame.contentWindow) {
      frame.contentWindow.postMessage({ type: 'set-theme', theme: utterancesTheme() }, 'https://utteranc.es');
    }
  }

  function loadUtterances() {
    if (!comments) return;
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('repo', comments.dataset.repository);
    script.setAttribute('issue-term', comments.dataset.issueTerm || 'pathname');
    script.setAttribute('label', comments.dataset.label || 'comment');
    script.setAttribute('theme', utterancesTheme());
    comments.appendChild(script);
  }

  function setTheme(theme) {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.clearTimeout(themeTransitionTimer);
      root.classList.add('theme-transitioning');
      void document.body.offsetWidth;
      themeTransitionTimer = window.setTimeout(function () {
        root.classList.remove('theme-transitioning');
      }, 280);
    }
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    if (themeButton) {
      themeButton.setAttribute('aria-label', theme === 'dark' ? '切换浅色模式' : '切换深色模式');
    }
    syncUtterancesTheme();
  }

  if (themeButton) {
    themeButton.setAttribute('aria-label', root.dataset.theme === 'dark' ? '切换浅色模式' : '切换深色模式');
    themeButton.addEventListener('click', function () {
      setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }

  loadUtterances();

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  const milestone = document.getElementById('writing-milestone');
  if (milestone && window.chronicleWordCount) {
    const books = [
      [400000, '已经写下一部长篇的体量'],
      [320000, '约等于一本《思考，快与慢》'],
      [230000, '约等于一本《围城》'],
      [180000, '约等于一本《一九八四》'],
      [100000, '约等于一本《被讨厌的勇气》'],
      [70000, '约等于一本《活出生命的意义》'],
      [0, '仍在继续']
    ];
    milestone.textContent = books.find(function (item) { return window.chronicleWordCount >= item[0]; })[1];
  }
}());
