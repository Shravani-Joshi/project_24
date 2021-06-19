class paper{
    constructor(x, y, radius){
        var options = {
            "restitution": 0.3,
            "friction": 0.5,
            "density": 1.2,
            isStatic:false
        }
        
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
        World.add(world, this.body);
    }
    display(){
        var paperPos = this.body.position;
        push();
        translate(paperPos.x,paperPos.y);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.radius,this.radius);
    }
}