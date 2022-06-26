let snake = (function(){
    'use strict';
    let direction;
    let lastDirection;
    let leng;
    let body = new Array();
    let ctx;
    let size;
    let selfCollision;
    let squareCollision;

    function setDirection(arg){
        direction = arg;
    };

    function setSize(arg) {
        size = arg;
    };

    function setLeng(arg) {
        leng = arg;   
    };

    function setCtx(arg) {
        ctx = arg;
    };

    function setBody(i, lx, ly) {
        body[i] = {x : lx,  y: ly};
    };

    function setSquareCollision (arg) {
        squareCollision = arg;
    }

    function setSelfCollision(arg) {
        selfCollision = arg;
    }

    function getLeng(){
        return leng;
    };

    function getBody(){
        return body;
    };

    function getLastDirection(){
        return lastDirection;
    };

    function getSelfCollision() {
        return selfCollision;
    };

    function getsquareColilision(){
        return squareCollision;
    };

    function draw (){
        for (let i = 0; i < leng; i++){
            ctx.strokeStyle = '#FFFFFF';
            ctx.fillStyle = i == leng - 1 ? "#CC0033" : "#000000";
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeRect(body[i].x  * size, body[i].y * size, size, size);
            ctx.fillRect(body[i].x  * size, body[i].y * size, size, size);

            ctx.closePath();
        };
    };
    
})