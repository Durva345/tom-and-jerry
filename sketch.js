var garden,gardenImg;
var cat1,catImg1,catImg2;
var mouse1,mouseImg1,mouseImg2,mouseImg3;
function preload() {
   //load the images here

   gardenImg = loadImage("garden.png");
   catImg1 = loadImage("cat1.png");
   catImg2 = loadAnimation("cat2.png","cat3.png");
   catImg3 = loadImage("cat4.png");
   mouseImg1 = loadImage("mouse1.png");
   mouseImg2 = loadAnimation("mouse3.png","mouse4.png","mouse1.png");
   mouseImg3 = loadImage("mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(500,400);
    garden.addImage(gardenImg);

    cat1= createSprite(700,580);
    cat1.addImage(catImg1);
    cat1.scale=0.17;
    cat1.setCollider("rectangle",0,0,400,700);
    cat1.debug=false;

    mouse1 = createSprite(150,600);
    mouse1.addImage(mouseImg1);
    mouse1.scale=0.19;
    mouse1.setCollider("rectangle",0,0,600,700);
    mouse1.debug=false;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(mouse1.isTouching(cat1)){
        cat1.addImage("collided",catImg3);
        cat1.changeImage("collided");
        cat1.setCollider("rectangle",0,0,300,700);
        cat1.velocityX = 0;

        mouse1.addImage("collided",mouseImg3);
        mouse1.changeImage("collided");
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyDown("left_arrow")){
    mouse1.addAnimation("mouse_teasing",mouseImg2);
    mouse1.changeAnimation("mouse_teasing");
    mouse1.frameDelay=25;
   }
   if (keyDown("left_arrow")){
    cat1.addAnimation("cat_running",catImg2);
    cat1.changeAnimation("cat_running");
    cat1.scale=0.25;
    cat1.velocityX=-2;
    cat1.frameDelay=25;
   }
}
