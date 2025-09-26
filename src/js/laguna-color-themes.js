/*Dark/Light themes*/
document.addEventListener('DOMContentLoaded', function() {
    // Apply saved theme on page load
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    document.getElementById('laguna_dark_mode--btn').addEventListener('click', function() {
        var htmlElement = document.documentElement; // The <html> element
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // Save theme in localStorage
    });

    document.getElementById('laguna_light_mode--btn').addEventListener('click', function() {
        var htmlElement = document.documentElement; // The <html> element
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); // Save theme in localStorage
    });
});