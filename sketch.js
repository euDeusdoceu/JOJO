var cenario1
var cenarioImg
var Jotaro
var JotaroImg
var dio
var dioImg
var oraoraoraora
function preload(){
cenarioImg = loadImage("fundo.png")
JotaroImg  = loadImage("jojo running.gif")
dioImg  = loadImage("DIO.gif")
oraoraoraora = loadImage("ora ora ora ora.gif")

} 

function setup() {
createCanvas(1200,600)
 cenario1 = createSprite(600,300)
 cenario1.x = cenario1.width/2
 cenario1.addImage(cenarioImg) 
 Jotaro = createSprite(100,430)
 Jotaro.addImage("Jotaro",JotaroImg)
 Jotaro.scale = 0.4
 Jotaro.addImage("oraoraoraora",oraoraoraora)
 
 dio = createSprite(width+100,412)
 dio.mirrorX(-1)
 dio.velocityX = -3
 dio.addImage(dioImg)
 dio.scale = 2.30


 cenario1.velocityX = -3
}

function draw() {
    background("black")
if(cenario1.x <= 0){
    cenario1.x = cenario1.width/2

}
if(dio.x <= -100){
    dio.x = width+100} 
 if(keyDown("space")){

Jotaro.changeImage("oraoraoraora") 
Jotaro.scale = 1
}
else{
Jotaro.changeImage("Jotaro")
Jotaro.scale = 0.4
}
if(keyDown("space")&&Jotaro.isTouching(dio)){
    dio.x = width+100
}


 drawSprites()

 if(!keyDown("space")&&Jotaro.isTouching(dio)){
    background("black")
    text("noob",200,200)
    dio.velocityX = 0
}

}
