class Player{
    constructor(){
        this.player = createSprite(displayWidth/2,displayHeight-100,35,35);
        console.log(this.player)
        this.playerY = this.player.position.y;
    }

    display(){
 
        drawSprites();
    }

    changePosition(y){
        var pos = this.player.position;
        pos.y = pos.y + y;
              
       // camera.position.y = pos.y;
    }
}