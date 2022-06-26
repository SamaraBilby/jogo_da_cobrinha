//alimento da cobrinha

var squere = (function(){
    'use strict';
    let ctx;
    let size;
    let x;
    let y;
    let canvas

    function setCtx (arg) {
        ctx = arg;
    }

    function setSize(arg){
        size = arg;
    }

    function setCanvas(w, h){
        canvas = {W : w, H : h}
    }

    function getX(){
        return x;
    }

    function getY(){
        return y;
    }

    function draw () {
        ctx.fillStyle = "#336633"
        ctx.beginPath();
        ctx.fillRect(x * size, y * size, size, size);
        ctx.closePath()
    }

    function squarePosition() {
        let isDraw =true;

        while(isDraw == true) {
            isDraw = false;
            x = parseInt(Math.random() * (canvas.W / size));
            y = parseInt(Math.random() * (canvas.H / size));

            for(let i = 0; i < snake.getLeng(); i++ ) {
                if(snake.getBody()[i].x == x && snake.getBody()[i].y == y){
                    isDraw = true;
                };
            };
        };
    };



    return {
        setCtx : setCtx,
        setSize : setSize,
        setCanvas : setCanvas,
        squarePosition : squarePosition,
        draw : draw,
        getX : getX,
        getY : getY
    };

}());