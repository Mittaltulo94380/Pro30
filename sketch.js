const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var polygon;
var sling,ball;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png")
}

function setup() {
    createCanvas(1700,600)

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    //polygon = new Polygon(200, 200, 50);
    
    ground1 = new Ground(600,385,290,10);
    ground2 = new Ground(1000,285,350,10);
    ground3 = new Ground(800,592,1800,15);

    //firstrow
    box1 = new Box(500,365,60,30)
    box2 = new Box(560,365,60,30)
    box3 = new Box(620,365,60,30)
    box4 = new Box(680,365,60,30)
    //secondrow
    box5 = new Box(530,335,60,30)
    box6 = new Box(590,335,60,30)
    box7 = new Box(650,335,60,30)
    //thirdrow
    box8 = new Box(560,305,60,30)
    box9 = new Box(620,305,60,30)
    //fourthrow
    box10 = new Box(590,275,60,30)

    //firstrow1
    box11 = new Box(870,265,60,30);
    box12 = new Box(930,265,60,30);
    box13 = new Box(990,265,60,30);
    box14 = new Box(1050,265,60,30);
    box15 = new Box(1110,265,60,30);
    //secondrow1
    box16 = new Box(900,235,60,30);
    box17 = new Box(960,235,60,30);
    box18 = new Box(1020,235,60,30);
    box19 = new Box(1080,235,60,30);
    //thirdrow1
    box20 = new Box(930,205,60,30);
    box21 = new Box(990,205,60,30);
    box22 = new Box(1050,205,60,30);
    //fourthrow1
    box23 = new Box(960,175,60,30);
    box24 = new Box(1020,175,60,30);
    //fifthrow1
    box25 = new Box(990,145,60,30);

    ball = Bodies.circle(200,200,20);
    World.add(world,ball);
  
  sling = new SlingShot(this.ball,{x:200,y:200})    
}
function draw() {

    background(56,44,44);
    //Engine.update(engine);

    sling.display();
    
    ground1.display();
    ground2.display();
    ground3.display();

    fill("skyblue")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    fill("green")
    box5.display();
    box6.display();
    box7.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    fill("yellow")
    box8.display();
    box9.display();
    box20.display();
    box21.display();
    box22.display();
    
    fill("turquoise")
    box10.display();
    box23.display();
    box24.display();

    fill("orange")
    box25.display();

    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,60,60);


    strokeWeight(0);
    fill("white");
    textSize(22);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",150,30);


}
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x : mouseX, y : mouseY});
}
function mouseReleased(){
 sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
    sling.attach(this.ball);
  }
}

