class stone{
    constructor(x,y){
    var options={restitution:0.7}
    var options = {
        'restitution':0.8,
        'friction':0.9,
        'density':12
    }
        this.box=Bodies.rectangle(x,y,30,30,options)
        this.width=60;
        this.height=60;
        World.add(world, this.body);
    }
    display(){
        var position=this.box.position;
        
        translate(position.x,position.y)
        rectMode(CENTER);
        rect(0,0,30,30);
    
       
    }
    
    }