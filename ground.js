class ground{
    constructor(x,y,witdh,height){
        var options = {
            isStatic:true
        }

        this.x = x;
        this.y = y;

       this.body = Bodies.rectangle(x,y,witdh,height,options);
       this.height = height;
       this.width = width;
       
       World.add(world, this.body);
    
    }
    display(){
        rectMode(CENTER);
        var groundPos = this.body.position;
        push();
        translate(groundPos.x,groundPos.y);

        fill("brown");
        rect(0,0,this.width,this.height);
        pop();
    }
}