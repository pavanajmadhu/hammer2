class iron{
    constructor(x,y){
    var options={restitution:0.7}
    var options = {
        'restitution':0.8,
        'friction':3,
        'density':30
    }
        this.box=Bodies.rectangle(x,y,60,60,options)
        this.width=60;
        this.height=60;
        World.add(world,this.box);
    }
    display(){
        var position=this.box.position;
        
    
        rectMode(CENTER);
        rect(position.x,position.y,110,150);
    
       
    }
    
    }