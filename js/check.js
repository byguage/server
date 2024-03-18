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
document.getElementById('minecraftLink').addEventListener('click', function(event) {
    var ua = navigator.userAgent.toLowerCase(); 
    if (ua.match(/QQ/i) == "qq") {
        alert('正在跳转至系统浏览器');
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://open.mobile.qq.com/sdk/qqapi.js?_bid=152';
        document.head.appendChild(scriptElement);
        mqq.ui.openUrl({ target: 2, url:"https://www.mc.sccc.top"});
        };
    }
});
function getDeviceType() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (/windows/.test(userAgent)) {
        return 'Windows';
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
        return 'iOS';
    } else if (/android/.test(userAgent)) {
        return 'Android';
    } else {
        return 'Unknown';
    }
}
function openMinecraft(event) {
    event.preventDefault(); 
    var isMinecraftInstalled = false;
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'minecraft://';
    document.body.appendChild(iframe);
    setTimeout(function() {
        if (document.body.contains(iframe)) {
            alert('您的系统中未安装 Minecraft 或者无法处理 minecraft:// 协议链接。');
            var deviceType = getDeviceType();
            switch(deviceType) {
                case 'Windows':
                    window.location.href = 'https://mc.minebbs.com/#/windows';
                    break;
                case 'iOS':
                    window.location.href = 'https://mc.minebbs.com/#/ios';
                    break;
                case 'Android':
                    window.location.href = 'https://mc.minebbs.com/#/';
                    break;
                default:
                    break;
            }
        }
        document.body.removeChild(iframe); 
    }, 100); 
}
