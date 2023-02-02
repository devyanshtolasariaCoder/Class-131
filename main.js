img="";

function setup(){
 canvas= createCanvas(640,420);
 canvas.center();

}
function preload(){
    img= loadImage("dog_cat.jpg"); 
}
function draw(){
    image(img, 0,0, 640,420); 
    fill('#FFE400');
    text("Dog", 45, 60);
    noFill();
    stroke('#61FF00');
    rect(30, 60, 400, 300);

    
}