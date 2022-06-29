let placar = document.querySelector('input');
let btnRestart = document.getElementById('restart')
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
    snake[0] = {
        x: 8 * box,
        y: 8 * box
    };

    let direcao = "rigth";

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box, 
    y: Math.floor(Math.random() * 15 + 1) * box
};

let meusPontos = 0;



function criarBG() {
    context.fillStyle = "#C24C82";
    context.fillRect(0, 0, 16 * box, 16 * box)
}


function criarSnake() {
    for(let i = 0; i < snake.length; i++){
        context.strokeStyle = "white";
        context.fillStyle = "#000000";
        context.beginPath();
        context.lineWidth = 5;
        context.strokeRect(snake[i].x, snake[i].y, box, box);
        context.fillRect(snake[i].x, snake[i].y, box, box);
       
        context.closePath()
    }
}

function criarFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
    
}



document.addEventListener('keydown', update);

function update (event) {
    if(event.keyCode == 37 && direcao != "right") direcao = "left";
    if(event.keyCode == 38 && direcao != "down") direcao = "up";
    if(event.keyCode == 39 && direcao != "left") direcao = "right";
    if(event.keyCode == 40 && direcao != "up") direcao = "down";

    }

    function aumentaPlacar(pontosGanhos) {
        placar.value = pontosGanhos;
    }

    
    

function iniciarJogo(){

    if(snake[0].x > 15 * box && direcao == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direcao == "left") snake[0].x = 15 * box;
    if(snake[0].y > 15 * box && direcao == "down") snake[0].y =0;
    if(snake[0].y < 0 && direcao == "up") snake[0].y = 15 * box;
    
    for(let i = 1; i < snake.length; i++){
            if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
                clearInterval(jogo);
                alert("Game Over :(");           
            }
        }

        /*function configureBtn () {
            btnRestart.onclick = function () {
                clearInterval(jogo);
                iniciarJogo(jogo);
                
                                        
            };
            
        };
        configureBtn ();*/

    criarBG();
    criarSnake();
    criarFood();
    
    
    
    
    

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direcao == "right") snakeX += box;
    if(direcao == "left") snakeX -= box;
    if(direcao == "up") snakeY -= box;
    if(direcao == "down") snakeY += box;
    

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    } else if(snakeX != food.x || snakeY != food.y){
        food.x = Math.floor(Math.random() * 15 + 1) * box; 
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }
     
    else {
        food.x = Math.floor(Math.random() * 15 + 1) * box; 
        food.y = Math.floor(Math.random() * 15 + 1) * box;
        meusPontos++;
        aumentaPlacar(meusPontos);
        
    }

    
    let newHead= {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(newHead);
};

let jogo = setInterval(iniciarJogo, 100);





