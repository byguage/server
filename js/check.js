const scrollButton = document.getElementById('scrollButton');
    const modeButton = document.getElementById('modeButton');
    const fullScreenButton = document.getElementById('fullScreenButton');
scrollButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    scrollButton.classList.remove('active');
});
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        scrollButton.classList.add('active');
    } else {
        scrollButton.classList.remove('active');
    }
});
let isNightMode = false;
modeButton.addEventListener('click', function() {
    isNightMode = !isNightMode;
    if (isNightMode) {
        document.documentElement.setAttribute('theme', 'dark-mode');
    } else {
        document.documentElement.removeAttribute('theme');
    }
    modeButton.querySelector('.icon-1').classList.toggle('active');
    modeButton.querySelector('.icon-2').classList.toggle('active');
});
let isFullScreen = false;
fullScreenButton.addEventListener('click', function() {
    if (!isFullScreen) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
    isFullScreen = !isFullScreen;
    const icon1 = fullScreenButton.querySelector('.icon-1');
    const icon2 = fullScreenButton.querySelector('.icon-2');
    if (isFullScreen) {
        icon1.style.display = 'none';
        icon2.style.display = '';
    } else {
        icon1.style.display = '';
        icon2.style.display = 'none';
    }
});