
//globals (general)----------------------------

//MISC.
var currentScene = 0;
var stillPlaying = true; 
var collision = false;

 //movement variables
var shipRotate = 0;
var shipSpeed = 0;
var acceleration = 0.5;
var rotationAmount = 2;
var shipX = 100;
var shipY = 100;
var keys = [];
var maxV = 6;
var shipPosX = 200;
var shipPosY = 300;

//bullet variables
var shooting = false;
var shoot = 0;
var bMoveX = 0;
var bMoveY = 0;
var bRotateNum = 0;
var rotateRefresh = false;


//bitmojis 
var drawHead = function (bitX, bitY, bitHeight)
{
    
fill(105, 58, 30);
ellipse(bitX +(bitHeight/100*71),bitY+(bitHeight/100*103),bitHeight/100*73,bitHeight/100*181); //hair back
ellipse(bitX +(bitHeight/100*45),bitY+(bitHeight/100*161),bitHeight/100*75,bitHeight/100*61);
ellipse(bitX +(bitHeight/100*33),bitY+(bitHeight/100*129),bitHeight/100*41,bitHeight/100*43);

fill(222, 204, 185); //skincolor dark
rect(bitX +(bitHeight/100*86),bitY+(bitHeight/100*119),bitHeight/100*48,bitHeight/100*62); //neck
fill(245, 232, 218); //skincolor
ellipse(bitX +(bitHeight/100*104),bitY+(bitHeight/100*91),bitHeight/100*76,bitHeight/100*134); //face1
ellipse(bitX +(bitHeight/100*87),bitY+(bitHeight/100*108),bitHeight/100*84,bitHeight/100*120); //chin


fill(235, 223, 195);
triangle(bitX +(bitHeight/100*71),bitY+(bitHeight/100*120),bitX +(bitHeight/100*72),bitY+(bitHeight/100*95),bitX +(bitHeight/100*39),bitY+(bitHeight/100*85));//Socket shadow
triangle(bitX +(bitHeight/100*131),bitY+(bitHeight/100*81),bitX +(bitHeight/100*84),bitY+(bitHeight/100*100),bitX +(bitHeight/100*107),bitY+(bitHeight/100*126));//Socket shadow 2
triangle(bitX +(bitHeight/100*139),bitY+(bitHeight/100*94),bitX +(bitHeight/100*84),bitY+(bitHeight/100*100),bitX +(bitHeight/100*107),bitY+(bitHeight/100*126));//Socket shadow 3

fill(32, 89, 30);
ellipse(bitX +(bitHeight/100*59),bitY+(bitHeight/100*105),bitHeight/100*7,bitHeight/100*9); //eyeball left
ellipse(bitX +(bitHeight/100*116),bitY+(bitHeight/100*104),bitHeight/100*7,bitHeight/100*9); //eyeball Right

stroke(171, 137, 75); //eyebrow Left color
strokeWeight(4);// brow weight
line(bitX +(bitHeight/100*48),bitY+(bitHeight/100*88),bitX +(bitHeight/100*64),bitY+(bitHeight/100*92)); //eyebrow Left
line(bitX +(bitHeight/100*46),bitY+(bitHeight/100*88),bitX +(bitHeight/100*38),bitY+(bitHeight/100*91)); //brow left corner

line(bitX +(bitHeight/100*118),bitY+(bitHeight/100*86),bitX +(bitHeight/100*91),bitY+(bitHeight/100*92)); //eyebrow Right
strokeWeight(3.5);
line(bitX +(bitHeight/100*132),bitY+(bitHeight/100*91),bitX +(bitHeight/100*120),bitY+(bitHeight/100*85)); //brow Right corner

stroke(71, 52, 11);//lashcolor
strokeWeight(2.5);
line(bitX +(bitHeight/100*61),bitY+(bitHeight/100*101),bitX +(bitHeight/100*48),bitY+(bitHeight/100*100)); //eyelash left
line(bitX +(bitHeight/100*100),bitY+(bitHeight/100*103),bitX +(bitHeight/100*112),bitY+(bitHeight/100*100)); //eyelash Right
line(bitX +(bitHeight/100*126),bitY+(bitHeight/100*102),bitX +(bitHeight/100*113),bitY+(bitHeight/100*99)); //eyelash Right 2

noStroke();
fill(105, 58, 30);
arc(bitX +(bitHeight/100*34),bitY+(bitHeight/100*102),bitHeight/100*31,bitHeight/100*74, bitHeight/100*-80, bitHeight/100*117); //cheek cut

fill(212, 194, 165);
arc(bitX +(bitHeight/100*69), bitY+(bitHeight/100*121), bitHeight/100*9, bitHeight/100*72, bitHeight/100*-47,bitHeight/100* 6);//nose line1
arc(bitX +(bitHeight/100*68), bitY+(bitHeight/100*134), bitHeight/100*59, bitHeight/100*16, -81, -28);//nose shadow

stroke(201, 136, 136);
strokeWeight(3);
line(bitX +(bitHeight/100*68),bitY+(bitHeight/100*143),bitX +(bitHeight/100*81),bitY+(bitHeight/100*145)); //mouth
line(bitX +(bitHeight/100*83),bitY+(bitHeight/100*145),bitX +(bitHeight/100*96),bitY+(bitHeight/100*143));

noStroke();
fill(140, 99, 23);
arc(bitX +(bitHeight/100*68), bitY+(bitHeight/100*53), bitHeight/100*102, bitHeight/100*80, -240, -22); //hair 1 left
arc(bitX +(bitHeight/100*116), bitY+(bitHeight/100*62), bitHeight/100*92, bitHeight/100*80, -108,47); //hair 1 Right
fill(128, 93, 33);
ellipse(bitX +(bitHeight/100*157),bitY+(bitHeight/100*83),bitHeight/100*30,bitHeight/100*75); //hair right 2
ellipse(bitX +(bitHeight/100*144),bitY+(bitHeight/100*147),bitHeight/100*51,bitHeight/100*78);//right 3 bump
ellipse(bitX +(bitHeight/100*144),bitY+(bitHeight/100*181),bitHeight/100*72,bitHeight/100*35);//right 3 bump
fill(148, 103, 30);
ellipse(bitX +(bitHeight/100*170),bitY+(bitHeight/100*152),bitHeight/100*50,bitHeight/100*87);// right bump light
ellipse(bitX +(bitHeight/100*178),bitY+(bitHeight/100*90),bitHeight/100*32,bitHeight/100*46);//right bump light top


fill(255, 255, 255);
rect(bitX +(bitHeight/100*36),bitY+(bitHeight/100*-8),bitHeight/100*72,bitHeight/100*33); //hair cut
ellipse(bitX +(bitHeight/100*12),bitY+(bitHeight/100*40),bitHeight/100*79,bitHeight/100*82);
ellipse(bitX +(bitHeight/100*25),bitY+(bitHeight/100*20),bitHeight/100*139,bitHeight/100*48);
rect(bitX +(bitHeight/100*1),bitY+(bitHeight/100*21),bitHeight/100*37,bitHeight/100*70);
            
fill(20, 55, 112);
rect(bitX +(bitHeight/100*55),bitY+(bitHeight/100*180),bitHeight/100*128,bitHeight/100*43);
};
var drawHead2 = function(x,y,bitheight){
noStroke();
fill(219, 172, 153);
ellipse(x-bitheight/150,y-bitheight/150,bitheight/150*95,bitheight/150*105); //head
fill(255, 255, 255);
arc(x-(bitheight/150*60),y+(bitheight/150*51),61*bitheight/150,106*bitheight/150,16,535); //left chisel
arc(x+(bitheight/150*62),y+(bitheight/150*51),bitheight/150*61,bitheight/150*106,16,535); //right chisel


fill(219, 172, 153);
arc(x-(bitheight/150*47),y-(bitheight/150*2),18*bitheight/150,22*bitheight/150,25,526); //left ear
arc(x+(bitheight/150*46),y-(bitheight/150*2),bitheight/150*18,bitheight/150*22,25,526); //right ear

fill(10, 10, 10);
quad(x-(bitheight/150*48),y-(bitheight/150*14),x-(bitheight/150*43),y-(bitheight/150*37),x-(bitheight/150*22),y-(bitheight/150*56),x-(bitheight/150*35),y-(bitheight/150*6)); //left hair
quad(x+(bitheight/150*47),y-(bitheight/150*13),x+(bitheight/150*36),y-(bitheight/150*46),x+(bitheight/150*24),y-(bitheight/150*45),x+(bitheight/150*33),y-(bitheight/150*8)); //right hair

//cap
fill(119, 14, 179);
quad(x-(bitheight/150*38),y-(bitheight/150*62),x+(bitheight/150*30),y-(bitheight/150*69),x+(bitheight/150*40),y-(bitheight/150*40),x-(bitheight/150*49),y-(bitheight/150*31));
stroke(87, 11, 117);
strokeWeight(3);
fill(15, 10, 10); 
line(x-(bitheight/150*73),y-(bitheight/150*30),x+(bitheight/150*40),y-(bitheight/150*41)); //cap lid

stroke(3, 3, 3);
strokeWeight(1);
fill(252, 252, 252);
ellipse(x-(bitheight/150*22),y-(bitheight/150*14),(bitheight/150*18),(bitheight/150*11)); //left eye
ellipse(x+(bitheight/150*15),y-(bitheight/150*15),(bitheight/150*18),(bitheight/150*11)); //right eye
noStroke();
fill(15, 14, 15);
ellipse(x-(bitheight/150*22),y-(bitheight/150*14),(bitheight/150*8),(bitheight/150*7)); //left pupil
ellipse(x+(bitheight/150*15),y-(bitheight/150*15),(bitheight/150*8),(bitheight/150*7)); // right pupil

stroke(20, 18, 18);
fill(219, 172, 153);
bezier(x-(bitheight/150*4),y-(bitheight/150*16),x-(bitheight/150*21),y+(bitheight/150*14),x-(bitheight/150*10),y+(bitheight/150*10),x-(bitheight/150*1),y+(bitheight/150*8)); //nose

strokeWeight(1);
fill(255, 255, 255);
arc(x-(bitheight/150*4),y+(bitheight/150*21),(bitheight/150*33),(bitheight/150*19),-6,173); //mouth
line(x+(bitheight/150*13),y+(bitheight/150*20),x-(bitheight/150*21),y+(bitheight/150*22)); //top lip
line(x+(bitheight/150*12),y+(bitheight/150*24),x-(bitheight/150*18),y+(bitheight/150*26)); //teeth
fill(207, 33, 77);
arc(x-(bitheight/150*4),y+(bitheight/150*25),(bitheight/150*29),(bitheight/150*9),7,178); //inside mouth

noStroke(); //crown design
fill(219, 197, 0);
triangle(x-(bitheight/150*20),y-(bitheight/150*41),x+(bitheight/150*2),y-(bitheight/150*44),x-(bitheight/150*22),y-(bitheight/150*57));
triangle(x-(bitheight/150*10),y-(bitheight/150*43),x+(bitheight/150*13),y-(bitheight/150*45),x+(bitheight/150*13),y-(bitheight/150*62));
triangle(x+(bitheight/150*4),y-(bitheight/150*45),x-(bitheight/150*7),y-(bitheight/150*60),x-(bitheight/150*12),y-(bitheight/150*44));

}; 
var drawBody2 = function(x,y,bitheight){
//neck
fill(219,172,153);
rect(x-(bitheight/150*17),y+(bitheight/150*37),(bitheight/150*39),(bitheight/150*27));

//shirt
stroke(0, 0, 0);
fill(240, 240, 240);
quad(x-(bitheight/150*56),y+(bitheight/150*58),x+(bitheight/150*58),y+(bitheight/150*53),x+(bitheight/150*44),y+(bitheight/150*120),x-(bitheight/150*36),y+(bitheight/150*123));

//shoulders
ellipse(x-(bitheight/150*62),y+(bitheight/150*77),(bitheight/150*40),(bitheight/150*40)); 
ellipse(x+(bitheight/150*62),y+(bitheight/150*72),(bitheight/150*40),(bitheight/150*40));
noStroke();
ellipse(x-(bitheight/150*53),y+(bitheight/150*74),(bitheight/150*45),(bitheight/150*31));
ellipse(x+(bitheight/150*52),y+(bitheight/150*71),(bitheight/150*29),(bitheight/150*34));
//initials
strokeWeight(2);
stroke(0, 0, 0);
line(x-(bitheight/150*24),y+(bitheight/150*80),x-(bitheight/150*22),y+(bitheight/150*112));
line(x-(bitheight/150*24),y+(bitheight/150*113),x-(bitheight/150*5),y+(bitheight/150*
112));
line(x-(bitheight/150*24),y+(bitheight/150*98),x-(bitheight/150*5),y+(bitheight/150*97));
line(x-(bitheight/150*24),y+(bitheight/150*81),x-(bitheight/150*5),y+(bitheight/150*80));

line(x+(bitheight/150*12),y+(bitheight/150*80),x+(bitheight/150*13),y+(bitheight/150*112));
line(x+(bitheight/150*12),y+(bitheight/150*113),x+(bitheight/150*32),y+(bitheight/150*112));
line(x+(bitheight/150*11),y+(bitheight/150*81),x+(bitheight/150*32),y+(bitheight/150*80));
};


//scene directory ------------------------------------------------


// 0 = splash , 1 = how-to , 2 = game , 3 = story.1 , 4 = story.2 , 5 = game over.


//----------------------------------------------------------------


// GAME SCENE CALL--------
var drawScene2 = function () {
    //game scened
    currentScene = 2; 
};

//----------------------------------------------------------------


//small button general Build (starts game)
var smallButton = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.color = config.currentColor;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

smallButton.prototype.draw = function() {
    fill(224, 217, 188);
    rect(this.x, this.y, this.width, this.height, 5);
    textSize(20);
    fill(82, 41, 24);
    textAlign(CENTER, CENTER);
    text(this.label, this.x+36, this.y+this.height/2);
};

smallButton.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

smallButton.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

//Play Game button specifics
var playButton = new smallButton({
    x: 266,
    y: 325,
    width: 88,
    height: 32,
    label: "Play!", 
    onClick: function() {
       drawScene2(); 
    }
});

//------------------------------------------------------------
//story scene
var drawScene3 = function() {
    background(42, 116, 176);
    fill(51, 255, 241);
    textSize(20);
    text("Once Upon a distant-future:", 151, 50);
    textSize(14);
    text("A little scientist from Earth made a rocket, and flew into space.", 200, 87);
    fill(255, 144, 59);
    text("The little scientist was in love with traveling at great speeds.", 200, 110);
    fill(51, 255, 241);
    text("On Earth, they never let him travel fast!", 200, 135);
    text("But in space... he could go as fast as he pleased.", 200, 155);
    
image(getImage("space/healthheart"), 71, 235, 70, 80);
    
  //nextButton.draw();
  playButton.draw();
};

//story button specifics
var storyButton = new smallButton({
    x: 37,
    y: 320,
    width: 73,
    height: 34,
    label: "Story!", 
    onClick: function() {
       drawScene3(); 
    }
});
//------------------------------------------------------------

// INSTRUCTION SCENE
var drawScene1 = function(){
    currentScene = 1; 
    //important text 
    background(41, 9, 41);
    fill(121, 252, 60);
    textSize(30);
    text("How to Play", 115, -39, 179, 200);
    textSize(20);
    text("- Use WASD to move your ship", 96, 110, 285, 100);
     text("- Avoid hitting obstacles", 96, 149, 285, 100);
     textSize(16);
      text("- Destroy Asteroids by holding SpaceBar & aiming with your mouse with a sweeping motion!", 96, 198, 285, 100);
      //decoration-----
      
      //ship 
    fill(255, 255, 255);
    triangle(178,352,213, 329,195,308);
    triangle(232,361,188, 318,225,338);
    fill(230, 88, 23);
   triangle(179,333,228, 336,205,280);
   fill(92, 77, 77);
   ellipse(204, 310, 14, 22);
    
    //bitmojis
    noStroke();
    fill(255, 255, 255);
    rect(-5, 7, 73, 60);
    drawHead(10, 10, 40);
    fill(255, 255, 255);
    rect(303, 10, 84, 73);
    drawHead2(343,42, 60);
    drawBody2(344,42,60);
    
   playButton.draw();
   storyButton.draw();
};

//general button build----------------------------------------


var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.color = config.currentColor;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(148, 255, 244);
    rect(this.x, this.y, this.width, this.height, 5);
    textSize(22);
    fill(82, 41, 24);
    textAlign(LEFT, CENTER);
    text(this.label, this.x+36, this.y+this.height/2);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

//Start Program button specifics -- goes to instruction scene
var startButton = new Button({
    x: 125,
    y: 44,
    label: "START!", 
    onClick: function() {
        drawScene1();
    }
});

//Start Screen -----------------------------------------------

var splash = function() {
    
    //decoration
    background(29, 12, 97);
    noStroke();
    fill(27, 69, 97);
    //top left
    triangle(125,18,81,66,-11,133);
    triangle(73,24,83,15,-107,47);
    triangle(127,78,21,50,-83,0);
    triangle(243,15,121,24,-107,0);
    triangle(169,131,106,40,-20,-101);
    triangle(16,349,114,-40,90,20);
    triangle(118,164,-182,60,-139,38);
    triangle(118,164,-182,60,-139,38);
    
    //clouds
    fill(144, 190, 194);
    //bottom
     ellipse(102, 336, 76, 38);
     ellipse(142, 316, 46, 13);
     ellipse(178, 319, 180, 5);
     ellipse(128, 353, 53, 32);
     ellipse(171, 362, 72, 20);
     ellipse(202, 353, 51, 25);
     ellipse(254, 353, 91, 9);
     //top highlights
     fill(255, 255, 255);
    ellipse(102, 331, 76, 22);
     ellipse(142, 310, 34, 5);
     ellipse(178, 317, 180, 3);
     ellipse(128, 348, 45, 20);
     ellipse(171, 356, 72, 14);
     ellipse(202, 351, 51, 13);
     ellipse(254, 351, 91, 5);
    
        //ship 
    fill(255, 255, 255);
    triangle(185,227,207, 215,205,148);
    triangle(188,208,221, 227,205,148);
     fill(191, 166, 166);
   rect(195,235, 14,8);
   rect(195,254, 14,8);
   rect(195,271, 14,8);
    fill(230, 88, 23);
   triangle(179,215,228, 215,205,148);
   fill(92, 77, 77);
   ellipse(204, 188, 14, 22);
  
  //stars
  image(getImage("cute/Star"), 100, 106, 21, 36);
  image(getImage("cute/Star"), 329, 246, 21, 36);
  image(getImage("cute/Star"), 55, 276, 21, 36);
  image(getImage("cute/Star"), 242, 167, 12, 16);
  image(getImage("cute/Star"), 141, 223, 16, 25);
  
  //bitmojis
    noStroke();
    fill(255, 255, 255);
    rect(-5, -3, 73, 60);
    drawHead(10, -7, 50);
    fill(255, 255, 255);
    rect(303, 12, 84, 73);
    drawHead2(343,42, 65);
    drawBody2(344,42,65);
    //important stuff // text // buttons
    textSize(37);
    fill(105, 255, 190);
    text("Rocket",225,311);
    text("Star",309,357);
    textSize(15);
    fill(255, 255, 255);
    text("By Anya Detonnancourt & Eason Chen", 67, 390);
    fill(255, 255, 255);
    stroke(0, 0, 0);
    
    //button draw
     startButton.draw();

};
//call
splash();

//------------------------------------------------------------

// GAME ship draw
var drawShip = function(){ 
strokeWeight(2);
fill(194, 194, 194);
fill(252, 154, 73);
triangle(0,-15,0,15,35,0);
fill(255, 240, 240);
rect(-5,-10,5,5);
rect(-5,5.0,5,5);
};

//Asteroid code ----------------------------------------------

//ship hitbox for collison detection
var hitboxW = 30;

     var hitbox = function (){
     fill(5, 65, 87);
     noStroke();
     ellipse(shipPosX +10, shipPosY, hitboxW,25);   //follows ship movement
     stroke(0, 0, 0);
     };

//asteroid object class-----------------
var Asteroid = function(x, y) {    //object class
    this.x = x;
    this.y = y;
    this.img = getImage("cute/Rock");
    this.w = 37;
    this.r = this.w/2;          //radius
};
    
Asteroid.prototype.draw = function() {
      fill(74, 66, 66);
    ellipse(this.x, this.y, 50, 39);
   
};

//positioning (random x) -- New asteroid spawn
var stroids = [];
for (var s = 0; s < 100; s++) {  
   stroids.push(new Asteroid(s * 3.5, random(-2100, 1)));
   
}

//Ship functional specifics -------------------------------------------------------------

//keycode specifics-------- 
keyPressed = function(){keys[keyCode]= true;};      //accept key press
keyReleased = function(){delete keys[keyCode];};    //removes property/previous input

//key commands and speed of ship
var Ship = function(){
if (rotateRefresh === true){
    bRotateNum = shipRotate;    //bullet angle same as ship angle
    bMoveX = shipPosX;          //bullet spawns from ship's coordinates
    bMoveY = shipPosY;
}
//ship flight keycodes WASD
if (keys[65]){ shipRotate -= rotationAmount;} //left (A)
if (keys[68]){ shipRotate += rotationAmount;} //right (D)
if (keys[87]){ if(shipSpeed < maxV){shipSpeed += acceleration;}} //up (W)
if (shipSpeed > 0.5){shipSpeed-= 0.25;}
if (keys[83]){ if(shipSpeed > -maxV){shipSpeed -= acceleration;}}//down (S)
if (shipSpeed < -0.5){shipSpeed+= 0.25;}

//shooting command (spacebar)
if (keys[32]){shooting = true;} else{shooting = false;}
var bPosX = bMoveX + shoot + 10;
var bPosY = bMoveY + shoot;

//movement-----------------------------
shipRotate = shipRotate % 360;
shipPosX += shipSpeed * cos(shipRotate); 
shipPosY += shipSpeed * sin(shipRotate);
pushMatrix();                               //puts into beginning of array
translate(shipPosX,shipPosY);
rotate(shipRotate);
drawShip();
rotateRefresh = true;
popMatrix();                            //puts at end of array

//bullet object
var Bullet = function(){
this.x = shoot;
this.y = 0;
this.width = 12;
this.height = 3;
ellipse(this.x, this.y, this.width, this.height);   //draw
};

//shooting Boolean-----------------------------
if (shooting === true){
    //pushed bullet into array
    pushMatrix();
    translate(bMoveX, bMoveY);
    rotate(bRotateNum);
    var bul = [];
    for (var j = 0; j<100; j++){
    bul.push( new Bullet(this.x, this.y, this.width, this.height));
}

shoot += 80;
popMatrix();    //takes bullet out of array

}
else {
        shoot = 0;
     }
        
    var bul = [];
for (var j = 0; j<100; j++){
    bul.push( new Bullet(this.x, this.y, this.width, this.height));
}

//bullet collision with asteroids------------------

for (var i = 0; i < stroids.length; i++) {
    
     //if mouse is near asteroid coordinates then asteroids are "destroyed"
        if (mouseX <= stroids[i].x+-5 && mouseY <= stroids[i].y+-10 && shooting === true) {
         
         stroids[i].x = 500;  
         
        }

}

//Wall Consraints----------------------------------
if (shipPosX>450){
shipPosX = -50;
}
if (shipPosX<-50){
shipPosX = 450;
}
if (shipPosY<-50){
shipPosY = 450;
}
if (shipPosY>450){
shipPosY = -50;
}
};

//-----------------------End of ship funct.-----------------------------------------

//GAME OVER scene
var drawScene5 = function() {
      background(255, 222, 229);
      fill(30, 80, 230);
      textSize(30);
      textAlign(LEFT, CENTER);
      text("GAME OVER", 100, 200);
      textSize(20);
      text("Your ship was destroyed", 100, 250);
    
};

//------------------DRAW / ANIMATION------------------------------------------------

var draw = function() {
     if (currentScene === 2) {
     
     background(37, 83, 133);
     hitbox();
     Ship();
     

//collision-----------------------------------------

    //distance between both object's x's and y's
for (var i = 0; i < stroids.length; i++) {
    
    var dx = (stroids[i].x + stroids[i].r) - (shipPosX + hitboxW/2);
    var dy = (stroids[i].y + stroids[i].r) - (shipPosY + hitboxW/2);
    
    //distances multiplied and added together
     var distance = Math.sqrt(dx * dx + dy * dy);
     
    //if object inside other object's radius --> collision
    if (distance < stroids[i].r + hitboxW/2) {
       collision = true;
    }
    //if no collision --> WIN scene
     else {
            if (stroids[99].y > 1000) {
                
                background(0, 148, 123);
                fill(255, 242, 0);
                text("You Survived! Good Flying!", 200, 300);
                
            }
        }
}

//asteroids draw----------------------------------
for (var i = 0; i < stroids.length; i++) {
        
      stroids[i].draw();


      stroids[i].y += 0.8;   //y-axis speed
        
//collision end screen----------------------------
     if (collision === true) {
         
                    drawScene5();
              } 
          }
     }

};


// Makes all buttons functional:
mouseClicked = function() {
startButton.handleMouseClick();
playButton.handleMouseClick();
storyButton.handleMouseClick();
};

