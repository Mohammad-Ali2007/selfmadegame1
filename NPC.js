class NPC {
    constructor(x,y){
        this.x=x;
        this.y=y;

        this.obj = createSprite(x,y,35,35);

    }

    display(){
        drawSprites();
    }
}