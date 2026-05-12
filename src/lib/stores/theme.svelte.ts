const STORAGE_KEY = 'theme';

function createTheme() {
  let isDark = $state(false);

  function init() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      isDark = stored === 'dark';
    } else {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    applyTheme();
  }

  function applyTheme() {
    document.documentElement.classList.toggle('dark', isDark);
  }

  function toggle() {
    isDark = !isDark;
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    applyTheme();
  }

  return {
    get isDark() { return isDark; },
    init,
    toggle,
  };
}

export const theme = createTheme();