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

    return {
        setCtx : setCtx,
        setSize : setSize,
        SetCanvas : setCanvas,
        draw : draw,
        getX : getX,
        getY : getY
    };

}());