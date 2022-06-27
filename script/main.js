
(function () {
    // variaveis de controle
    let canvas;
    let ctx;

    // variaveis snake

    let blockSize;
    let iniX;
    let iniY;
    let firstDirection;
    let firstLeng;

    // variaveis square

    
    
    function main () {
        canvas = document.getElementById("canvas")
        ctx = canvas.getContext("2d"); 
        
        init();
    }

    // configurações iniciais
    function init() {
        valuesVariables();

        snake.setLeng(firstLeng);
        snake.setSize(blockSize);
        snake.setCtx(ctx);
        snake.setDirection(firstDirection);
        snake.setSelfCollision(false);

        for(let i = 0; i <snake.getLeng(); i++) {
            snake.setBody(i, iniX + 1, iniY);
        };

        square.setCanvas(canvas.width, canvas.height);
        square.setSize(blockSize);
        square.setCtx(ctx);
        square.setquarePosition();


       
        //desenha o objeto
        gameLoop()
    };

   
   
    //função que seta valores iniciais

    function valuesVariables() {
        // clear canvas

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //Snake e "maça"

        blockSize = 8;
        iniX = 10;
        iniY = 10;
        firstDirection = 3;
        firstLeng = 4;

        interval = 200;
        acDelta = 0;
        lastUpdateTime = 0;
        msPerframe = 200;
    };

    //animação

    function gameLoop() {
        let deltaTime = Date.now() - lastUpdateTime;

        draw();
        lastUpdateTime = Date.now();
        requestAnimFrame(gameLoop);
    };

    // função para desenhar

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.draw();
        square.draw();
    };



    requestAnimFrame = (function (){
        let timeControl = window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame || 
    
        function (callback, element){
            window.setTimeout(callback, 1000 / interval);
        };

        return function (callback, element) {
            timeControl.apply(window, [callback, element]);
        };

    })();
    main();
})();