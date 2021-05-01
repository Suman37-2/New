class Paper{

    constructor(x,y){

        var op={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y,40,40,op);
        this.width=40;
        this.height=40;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
        
       
    }
}