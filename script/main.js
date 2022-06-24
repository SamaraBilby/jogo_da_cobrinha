
(function () {
    // variaveis de controle
    let canvas;
    let ctx;

    function main () {
        canvas = document.getElementById("canvas")
        ctx = canvas.getContext("2d");
    }

    requestAnimationFrame = (function (){
        let timeControl = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element){
            window.setTimeout(callback, 1000 / interval);
        };

        return function (callback, element) {
            timeControl.apply(window[callback, element]);
        };

    })();
    main()
})();