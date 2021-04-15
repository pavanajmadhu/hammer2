class Rubber{
	constructor(x,y)
	{
	// assign options to the rubber ball
		
		this.body=Bodies.circle(x, y,10)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(CENTER)

			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipseMode(RADIUS);
			ellipse(rubberpos.x,rubberpos.y,10,10)
			//draw the ellipse here to display the rubber ball

			pop()
	}

}