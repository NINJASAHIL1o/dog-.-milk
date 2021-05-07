//Create variables here
var dog , happyDog , database , foodS , foodStock;
var happyDogI , sadDogI;

function preload()
{
	
  sadDogI = loadImage("images/dogImg.png") 
  happyDogI = loadImage("images/dogImg1.png") 
  
}

function setup() {
	createCanvas(500 , 500);

  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog=createSprite(250,250);
  dog.addImage(sadDogI);
  dog.scale=0.5;
  
  feed=createButton("feed da dog");
  feed.position(600,95);
  feed.mousePressed(feedDog);

  addFood=createButton("addFood");
  addFood.position(700,95);
  addFood.mousePressed(addFoods);

}


function draw() {  
  background(36,139,87);

  drawSprites();
  //add styles here

  fill("white")
  textSize
  text("Food Remaining:"+foodS,100,30);

}

function readStock(data){
  
  foodS=data.val();

}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({

    Food:x

  })

}

function feedDog(){

  dog.addImage(happyDogI);

  foodObj.updateFoodStocks(foodObj.getFoodStock()-1);
  database.ref('/').update({

    Food:foodObj.getFoodStock(),
    feedTime:hour()

  })

}

function addFoods(){

foodS++;
database.ref('/').update({

  Food:foodS

})

}






















