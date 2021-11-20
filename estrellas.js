class estrellas
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		this.image=loadImage("e2.png");
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER);
			ellipse(0,0,this.r, this.r);
			image(this.image, 0,0,45,45);
			pop()
			
	}

}

