(function () {
    "use strict";
    function playWhenLoaded() {
        if (window.location.pathname == '/') {
            new Audio('https://link.jscdn.cn/sharepoint/aHR0cHM6Ly92aWN0b3JpYWNhLW15LnNoYXJlcG9pbnQuY29tLzp1Oi9nL3BlcnNvbmFsL3RjY2ZfbmNvdl9vZmZpY2VfZ3kvRWNZUjlnZTVsNGxJdE1zTkpzSUtobkVCRG9EUVRMVWVTdkZ3NDhNLVI5aE5SUT9lPWNWeHhkMQ==.wav').play();
        }
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', playWhenLoaded);
    } else {
        playWhenLoaded();
    }
})();