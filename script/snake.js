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

    function move() {
        let cX = body[ leng - 1].x;
        let cY = body[leng - 1].y;

        switch(direction) {
            case 1: // para cima
                cY --;
                break;
            case 2: // para baixo
                cY ++;
                break;
            case 3: // direita
                cX ++;
                break;
            case 4: //esquerda
                cX --;
                break;
        }

        lastDirection = direction;
        
        for(let i = 0; i < leng - 1; i++) {
            body[i].x = body[i + 1].x;
            body[i].y = body[i + 1].y;

            if(body[i + 1].x == cX && body[i + 1].y == cY){
                selfCollision = true;
            }

            if(body[leng - 1].x == square.getX() && body[leng - 1].y == square.getY()) {
                squareCollision = true;
            }    
        }

        body[leng - 1].x = cX;
        body[leng - 1].y = cY;
    }

    function grow (sx, sy) {
        body.unshift({x : sx, y : sy})
        leng += 1;
    }

    return{
        setSize : setSize,
        setDirection : setDirection,
        setLeng : setLeng,
        setCtx : setCtx,
        setBody : setBody,
        setSquareCollision : setSelfCollision,
        setSelfCollision : setSelfCollision,
        getLeng : getLeng,
        getBody : getBody,
        getLastDirection : getLastDirection,
        getSelfCollision : getSelfCollision,
        getsquareColilision : getsquareColilision,
        draw : draw,
        move : move,
        grow : grow
    }

}())