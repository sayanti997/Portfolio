const toggleBtn = document.getElementById('theme-toggle');

function setTheme(theme) {
  if (theme === 'light') {
    document.documentElement.style.setProperty('--bg-color', '#f0f0f0');
    document.documentElement.style.setProperty('--text-color', '#111');
    document.documentElement.style.setProperty('--card-color', 'rgba(255, 255, 255, 0.8)');
    document.documentElement.style.setProperty('--accent-color', '#007bff');
    toggleBtn.textContent = '🌙 Dark Mode';
  } else {
    document.documentElement.style.setProperty('--bg-color', '#1e1e2f');
    document.documentElement.style.setProperty('--text-color', '#fff');
    document.documentElement.style.setProperty('--card-color', 'rgba(255, 255, 255, 0.05)');
    document.documentElement.style.setProperty('--accent-color', '#00ffc3');
    toggleBtn.textContent = '☀️ Light Mode';
  }
  localStorage.setItem('theme', theme);
}

toggleBtn.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

window.onload = () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
};
