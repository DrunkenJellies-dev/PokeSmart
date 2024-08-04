// Function to toggle theme
function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.classList.remove(`${currentTheme}-mode`);
    document.body.classList.add(`${newTheme}-mode`);
    localStorage.setItem('theme', newTheme);
}

// Load the saved theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`${savedTheme}-mode`);
}

document.addEventListener('DOMContentLoaded', function() {
    loadTheme();

    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', toggleTheme);
});