// module aliases
var Engine = Matter.Engine,
//Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite;

var engine;
var world;
var boxes = [];
var ball;
var box1;


var ground;



function setup(){
createCanvas(700, 500);
engine = Engine.create();

world = engine.world;
Runner.run(Runner.create(), engine);
box1 = new Box(200, 100, 80, 80);
ground = Bodies.rectangle(width/2, height, width, 20, {isStatic: true});
//console.log(box1);


ball = new Baller(300, 200, 50);

// ball.fill = color(255,0,0);
// ball.stroke = color(0,0,255);
//circle(ball.position.x, ball.position.y, 50);



rect(ground.position.x, ground.position.y, ground.position.x*2 , 20);

Composite.add(engine.world, [ground]);
Composite.add(world, ball);
}

function mouseDragged(){
if (mouseButton === CENTER) 
boxes.push(new Box(mouseX, mouseY,random(10,50),random(10,50)));
//move object with left mouse click
// if (mouseButton === LEFT){
//     rectangle.pressed(mouseX, mouseY);
// }
//
//if left click pressed move selected object with mouse

}
function mousePressed(){
//if left click pressed move selected object with mouse
if (mouseButton === LEFT){
    boxes.push(new Box(mouseX, mouseY,random(10,50),random(10,50)));
}
}

function draw(){
background(51);
for(var i = 0; i < boxes.length; i++){
    boxes[i].show();
    
} 

//ground.show();
strokeWeight(1);
stroke(255);
box1.show();
ball.show();
line(0, height-10, width, height-10 );
}

