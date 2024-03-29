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
function executeMinecraftLink(event) {
        if (!shouldExecuteMinecraftLink(event)) {
            event.preventDefault();
        } else {
            openMinecraft(event);
        }
    }
    function shouldExecuteMinecraftLink(event) {
        var ua = navigator.userAgent.toLowerCase(); 
        var conf = { qqjump: 1 };
        // if ((ua.indexOf('QQ/') !== -1 || ua.match(/QQ/i) == "qq" && ua.indexOf('QQBrowser') > -1 || ua.indexOf('MicroMessenger') !== -1) && conf.qqjump === 1) {
        if ((ua.indexOf('QQ/') !== -1 || ua.indexOf(' qq') > -1 && ua.indexOf('mqqbrowser') < 0 || ua.match(/QQ/i) == "qq" && ua.indexOf('qqtheme') > -1 || ua.toLowerCase().indexOf('micromessenger') !== -1 || ua.indexOf('MicroMessenger') !== -1) && conf.qqjump === 1) {
        alert('点击右上角跳转其他浏览器打开');
        if (isMobileDevice()) {
        var img = new Image();
        img.src = '//picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/a2e42f14390ceb895147059f3cb0bc6003d2f1c9ca8b0e8c65a1f7a5c180f0c6b3d97285be769b261604b6d4a0753db8?pictype=scale&from=30013&version=3.3.3.3&fname=icon.png&size=750'; 
        img.style.position = 'fixed';
        img.style.top = '0';
        img.style.left = '0';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover'; 
        img.style.zIndex = '9999'; 
        document.body.appendChild(img);
        // var scriptElement = document.createElement('script');
        // scriptElement.src = 'https://open.mobile.qq.com/sdk/qqapi.js?_bid=152';
        // document.head.appendChild(scriptElement);
        // mqq.ui.openUrl({ target: 2, url:"https://www.mc.sccc.top"});
        }
        return false; 
        }
        return true; 
    }
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
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
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = event.currentTarget.href;
    document.body.appendChild(iframe);
    setTimeout(function() {
        document.body.removeChild(iframe);
        if (!isMinecraftOpened) {
            handleMinecraftNotFound();
        }
    }, isMobileDevice() ? 2000 : 100); 
}
var isMinecraftOpened = false; 
window.addEventListener('blur', function() {
    isMinecraftOpened = true;
});
var isSystemDialogOpened = false;
window.addEventListener('pagehide', function() {
    if (!isMinecraftOpened && !isSystemDialogOpened) {
        handleMinecraftNotFound();
    }
});
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        isSystemDialogOpened = true; 
        setTimeout(function() {
            if (isSystemDialogOpened && !isMinecraftOpened) {
                handleMinecraftNotFound();
            }
        }, isMobileDevice() ? 2000 : 0); 
    } else {
        isSystemDialogOpened = false; 
    }
});
function handleMinecraftNotFound() {
    if (isMobileDevice()) {
        alert('打开Minecraft超时，可能未安装或已取消打开或浏览器不支持跳转。');
    } else {
        alert('打开 Minecraft超时，可能未安装或浏览器不支持跳转。');
    }
    var deviceType = getDeviceType();
    var downloadUrl;
    switch(deviceType) {
        case 'Windows':
            downloadUrl = 'https://mc.minebbs.com/#/windows';
            break;
        case 'iOS':
            downloadUrl = 'https://mc.minebbs.com/#/ios';
            break;
        case 'Android':
            downloadUrl = 'https://mc.minebbs.com/#/';
            break;
        default:
            break;
    }
    if (downloadUrl) {
        var result = confirm("是否下载基岩版?");
        if (result) {
            window.location.href = downloadUrl;
        }
    }
}
