
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world,fondo;
var santa,s1;
var re1,reimg;
var estrella,regalo2;

function preload(){
	fondo=loadImage("fondo2.jpg");
    s1=loadImage("san.png");
	reimg=loadImage("regalo.png");
	f2=loadImage("p3.jpg");
	t1=loadImage("t1.png");
	t2=loadImage("grinch.png");
	c1=loadImage("cañon.png");
	a4=loadImage("arbol.png");
	tu2=loadImage("tub.png");
	c2=loadImage("chimenea.png");
	niñoimg=loadImage("niño.png");
	leche=loadImage("leche.png");
	te1=loadImage("i1.png");
	te2=loadImage("i2.png");
	te3=loadImage("i3.png");
	te4=loadImage("i4.png");
}

function setup() {
	createCanvas(900,600);
	rectMode(CENTER);

	re1=createSprite(240,150,50,50);
	re1.addImage(reimg);
	re1.scale=0.35;
	re1.visible=false;

	texto1=createSprite(450,170,30,30);
	texto1.addImage(t1);
	texto1.scale=0.45;
	texto1.visible=false;

	santa=createSprite(-240,150,50,50);
	santa.addImage(s1);
	santa.scale=0.6;

	fondo2=createSprite(450,300,900,50);
	fondo2.addImage(f2);
	fondo2.scale=1.5;
	fondo2.visible=false;

	ground=createSprite(450,600,900,20);
	ground.visible=false;

	estrella=createSprite(100,100,40,40);
	estrella.addImage(c1);
    estrella.scale=0.4;
	estrella.visible=false;

	bird2=createSprite(150,150,40,40);
	bird2.addImage(reimg);
    bird2.scale=0.3;
	bird2.visible=false;

	tubo=createSprite(300,120,20,30);
	tubo.addImage(t2);
	tubo.scale=0.25;
	tubo.visible=false;

	tubo2=createSprite(700,70,20,300);
	tubo2.addImage(tu2);
	tubo2.scale=0.5;
	tubo2.visible=false;
	//tubo2.debug=true;
	tubo2.setCollider("rectangle",100,0,10,200)

	tubo3=createSprite(300,400,20,50);
	tubo3.addImage(t2);
	tubo3.scale=0.25;
	tubo3.visible=false;

	tubo4=createSprite(500,200,20,50);
	tubo4.addImage(t2);
	tubo4.scale=0.25;
	tubo4.visible=false;

	tubo5=createSprite(500,500,20,50);
    tubo5.addImage(t2);
	tubo5.scale=0.25;
	tubo5.visible=false;

	chi=createSprite(700,500,40,40);
	chi.addImage(c2);
	chi.visible=false;

	tubo6=createSprite(400,300,30,30);
	tubo6.visible=false;

	tubo7=createSprite(200,600,30,30);
	tubo7.visible=false;

	tex1=createSprite(700,480);
	tex1.addImage(te1);
	tex1.scale=0.45;
	tex1.visible=true;

	tex2=createSprite(170,100);
	tex2.addImage(te2);
	tex2.scale=0.45;
	tex2.visible=false;
    
	tex3=createSprite(400,70);
	tex3.addImage(te3);
	tex3.scale=0.45;
	tex3.visible=false;

	tex4=createSprite(450,250);
	tex4.addImage(te4);
	tex4.scale=0.45;
	tex4.visible=false;

	engine = Engine.create();
	world = engine.world;

	roofObject=new techo(450,10,290,20);
	bob1 = new bob(320,240,25);
	bob2 = new estrellas(370,240,30);
	bob3 = new bob(410,240,25);
	bob4 = new estrellas(450,240,30);
	bob5 = new bob(480,240,25);
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0);
	rope2=new rope(bob2.body,roofObject.body,-40, 0);
	rope3=new rope(bob3.body,roofObject.body,0, 0);
	rope4=new rope(bob4.body,roofObject.body,40, 0);
	rope5=new rope(bob5.body,roofObject.body,80, 0);

	bird = Bodies.rectangle(150 , 150 , 40 ,40,{restitution:0.5});
	World.add(world, bird);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(fondo);
  
  //roofObject.display()
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  estrella.y=mouseY;

  bird.position.x=bird2.x;
  bird.position.y=bird2.y;

  bird2.y=estrella.y;

  if(frameCount%100==0){
	santa.velocityX=4;
  }

  if(santa.x>260){
	re1.visible=true;
	re1.velocityY=5;
  }

  if(santa.x>500){
	texto1.visible=true;
  }

  if(mousePressedOver(re1)){
	  fondo2.visible=true;
	tubo.visible=true;
	tubo2.visible=true;
	tubo3.visible=true;
	tubo4.visible=true;
	tubo5.visible=true;
	estrella.visible=true;
	chi.visible=true;
	tex1.visible=false;
	tex2.visible=true;
    
  }

  re1.collide(ground);

  if(keyDown("LEFT_ARROW")){
	  bird2.velocityX=5;
	  bird2.visible=true;
	  tex2.visible=false;
  }


  if(bird2.isTouching(tubo2)){
	  bird2.velocityX=0;
	  bird2.velocityY=5;
  }

  if(bird2.isTouching(tubo||tubo3||tubo4||tubo5||tubo6||tubo7)){
	  bird2.destroy();
	  tex4.visible=true;
  }
  
  if(bird2.isTouching(chi)){
	  chi.addImage("arbol",a4);
	  chi.changeImage("arbol");
	  chi.scale=0.5;
	  chi.y=440;

	  tubo.destroy();
	  tubo4.destroy();
	  tubo5.destroy();
	  estrella.destroy();

	  bird2.addImage("leche",leche);
	  bird2.changeImage("leche");
	  bird2.scale=0.6;
	  bird2.x=300;
	  bird2.y=200;

	  tubo3.addImage("niño",niñoimg);
	  tubo3.changeImage("niño");
	  tubo3.scale=0.25;
	  tubo3.x=430;
	  tubo3.y=500;

	  tex3.visible=true;

  }

  Keypressed();
}

function Keypressed(){
  if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-3,y:-4});	
  }
  if(keyCode===DOWN_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-3,y:-4});	
	Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-3,y:-4});
 }
  
 drawSprites();
}






