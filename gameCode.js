const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//globals
var currentScene; 
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

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

// 0 = splash , 1 = how-to , 2 = game (?)

//scenes
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
      text("- Race against the clock!", 96, 198, 285, 100);
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
};


// button build
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

//Start button specifics
var startButton = new Button({
    x: 125,
    y: 44,
    label: "START!", 
    onClick: function() {
        drawScene1();
    }
});


//Start Screen ----------------------

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
 //round random for multiple stars? 
  image(getImage("cute/Star"), 100, 106, 21, 36);
   
    //important stuff // text // buttons
    textSize(43);
    fill(105, 255, 190);
    text("Rocket",225,311);
    textSize(15);
    fill(255, 255, 255);
    text("By Anya Detonnancourt & Eason Chen", 67, 390);
    fill(255, 255, 255);
    
    //button draw
     startButton.draw();

};

splash();

mouseClicked = function() {
startButton.handleMouseClick();
};

