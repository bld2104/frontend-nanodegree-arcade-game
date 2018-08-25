//Notes from video tutorial with guy:
//If it doesn't change, it doesn't go in as an argument to the constructor.

/* --------------------------------- */
// ENEMY CLASS
/* --------------------------------- */
class Enemy {
  //Data Storage
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
  }

  //Functions

update(dt){
this.x += this.speed * dt;

      if (this.x > 550) {
           this.x = -100;
       }

// Deal with interaction with player
       if (player.x < this.x + 60 &&
          player.x + 37 > this.x &&
          player.y < this.y + 25 &&
          30 + player.y > this.y) {

       setTimeout(function(){
             player.x = 200;
              player.y = 400;
            }, 500);
    }
}


//Rednering/View
render(){
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


}

/* --------------------------------- */
//PLAYER CLASS
/* --------------------------------- */
  class Player {
  //Data Storage
  
  constructor(x, y, avatar) {
    this.x = x;
    this.y = y;
    this.movement = 50;
    this.sprite = 'images/char-boy.png';
  }

  //Functions
update(){


}


handleInput(keyCode){
switch (keyCode) {
    case 'left':
      this.x -= this.movement;
      if (this.x < 0) {
        this.x = 0;
      }
      break;
    case 'right':
      this.x += this.movement;
      if (this.x > 400) {
        this.x = 400;
      }
      break;
    case 'up':
      this.y -= this.movement;
      if (this.y < 0) {
        this.x = 200;
        this.y = 400;
        alert('Congratulations! You beat the game.');
      }
      break;
    case 'down':
      this.y += this.movement;
      if (this.y > 425) {
        this.y = 425;
      }
      break;
  }

}


  //Rendering/View

render(){
ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}
}

//Note from guy's tutorial: you are thinking this way:
//Move & Draw, Move & draw


/* --------------------------------- */
// Now instantiate your objects.
/* --------------------------------- */
var allEnemies = [];
var enemy = new Enemy(-100,300,400);
var enemy2 = new Enemy(-100,200,100);
var enemy3 = new Enemy(-100,100,300);
var enemy4 = new Enemy(-100,250,200);
var enemy5 = new Enemy(-100,150,500);
var enemy6 = new Enemy(-100,350,50);
allEnemies.push(enemy, enemy2, enemy3, enemy4, enemy5, enemy6);
var player = new Player(200,400,50);


function getAvatar(){

}
/* --------------------------------- */
// Listen for KeyPress
/* --------------------------------- */
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
