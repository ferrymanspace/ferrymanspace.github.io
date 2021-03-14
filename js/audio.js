(function () {
    "use strict";
    function playWhenLoaded() {
        if (window.location.pathname == '/') {
            new Audio('/audio/index.wav').play();
        }
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', playWhenLoaded);
    } else {
        playWhenLoaded();
    }
})();