class Roof {
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = 600;
        this.height = 40;
        World.add(world,this.body)
    }
   display() {
       fill("gray")
       rect(this.body.position.x, this.body.position.y, this.width, this.height)
   } 
}