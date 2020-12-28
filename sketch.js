const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var engine,world; 
var particles = [];
var plinkos=[];
var rows=[];
var ground;
var rows;
var score = 0
var count = 0
var particle = null
var rowsHeight = 150;
var gameState = "play"
function setup() {

  
  createCanvas(600,500);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,500,1700,10);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  for(var k = 0; k <=width; k = k+80){
    rows.push(new Rows(k, height-rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  background(186,250,196);
  if(frameCount % 30 === 0){
    // particle = new Particle(random(130, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }

  
  Engine.update(engine, 25);
  // for(var i = 0; i < particles.length; i++){
  //   particles[i].display();
  // }

 
  for(var k = 0; k<rows.length;k++){
    rows[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }
text("500",35,370)
text("500",115,370)
text("100",195,370)
text("100",275,370)
text("100",355,370)
text("200",355+80,370)
text("200",355+160,370)
textSize(30);
fill("black")
text("Score:"+score,30,35)
// text(mouseX+" , "+mouseY,mouseX,mouseY)
//rows.display();
 ground.display();
//  for(i = 0;i<particles.length;i++){
//   if(particles[i].x<800){
//     console.log("inside")
//     score = score+500
//   }
// }
if(particle){
  particle.display()
  if(particle.body.position.y>360&&particle.body.position.y<600){
    if(particle.body.position.x < 160){
      score = score +500
      console.log("i")
       particle = null;
      if(count>=5) gameState = "end"
    }
    else if(particle.body.position.x < 400&&particle.body.position.x >160){
      score = score +100
      console.log("i")
      particle = null
      if(count>=5) gameState = "end"
    }
    else if(particle.body.position.x < 560&&particle.body.position.x > 400){
      score = score +200
      console.log("i")
      particle = null
      if(count>=5) gameState = "end"
    }
   }
}
if(gameState === "end"){
  textSize(100)
  fill("blue")
  text("Game Over",40,200)
}
  drawSprites();
}
function mouseDragged(){
  console.log("o")
   if(gameState !="end"){
    
    count ++
    particle = new Particle(mouseX,100,10,10)
    particle.display();
   }
 
}