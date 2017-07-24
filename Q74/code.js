(function(){
    //Get visible window measurements
    let playground = document.getElementById("playground");
    let wSize = {
        w: playground.clientWidth,
        h: playground.clientHeight
    };

    //Set the ball position to the center of the window
    let ball = document.getElementById("ball");
    ball.style.left = `${Math.floor(wSize.w/2) - 50}px`;
    ball.style.top = `${Math.floor(wSize.h/2) - 50}px`;
    console.log(wSize.w);

    //Set the initial position and declare the interval id
    let pos = parseInt(ball.style.left);
    let id;

    function moveLeft(){
        if(pos >= 0){
            pos--;
            ball.style.left = `${pos}px`
        }
        else{
            clearInterval(id);
            id = setInterval(moveRight, 5);
        }
    }

    function moveRight(){
        if(pos <= wSize.w - 50){
            pos++;
            ball.style.left = `${pos}px`
        }
        else{
            clearInterval(id);
            id = setInterval(moveLeft, 5);
        }
    }

    //Start the animation
    id = setInterval(moveLeft, 5);
})();