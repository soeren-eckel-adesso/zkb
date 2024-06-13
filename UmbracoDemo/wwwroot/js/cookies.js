if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookie-popup').style.display = 'flex';
    document.getElementById('cookie-popup-overlay').style.display = 'flex';
} else {
    document.getElementById('cookie-popup').style.display = 'none';
    document.getElementById('cookie-popup-overlay').style.display = 'none';
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-popup').style.display = 'none';
    document.getElementById('cookie-popup-overlay').style.display = 'none';
}

$(document).ready(function () {
    function adjustLogoSrc() {
        var windowWidth = $(window).width();
        var newSrc = windowWidth < 1200 ? "/img/logo_mobile.svg" : "/img/logo.svg";
        $('#zkb-logo').attr('src', newSrc);
    }
    adjustLogoSrc();
    document.getElementById("zkb-logo").removeAttribute("hidden");
    $(window).resize(adjustLogoSrc);
});
