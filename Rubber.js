class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2)
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
			ellipse(rubberpos.x,rubberpos.y,5)
			//draw the ellipse here to display the rubber ball

			pop()
	}

}