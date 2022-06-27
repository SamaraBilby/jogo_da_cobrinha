let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
    snake[0] = {
        x: 8 * box,
        y: 8 * box
    }

let direcao = "rigth";

function criarBG() {
    context.fillStyle = "#C24C82";
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function criarSnake() {
    for(let i = 0; i < snake.length; i++){
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown', update);

function update (event) {
    if(event.keyCode == 37 && direcao != "right") direcao = "left";
    if(event.keyCode == 38 && direcao != "down") direcao = "up";
    if(event.keyCode == 39 && direcao != "left") direcao = "right";
    if(event.keyCode == 40 && direcao != "up") direcao = "down";
}

function iniciarJogo(){

    

    criarBG();
    criarSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direcao == "right") snakeX += box;
    if(direcao == "left") snakeX -= box;
    if(direcao == "up") snakeY -= box;
    if(direcao == "down") snakeY += box;

    snake.pop();
    let newHead= {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(newHead);
};

let jogo = setInterval(iniciarJogo, 100);

