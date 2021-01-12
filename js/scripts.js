

var guessNumber = 0;
var randomNumber=0;
var i=0;
var arr1 = [0,5,8,10,2];
var arr2 = [0,2,1,9,4];
var arr3 = [0,4,4,1,3];
var points=0;
var life = 5;
var matchPlayed = 0;
var counterReset=0;
var hintsMin = hintsMax = 0;
var valueForLastPage = 0;
var onloadDecision = 0;
var carrayNumbers=new Array(5);

document.getElementById("2ndPart").style.visibility  = "hidden";

window.onload = function() {
   const storeValue = localStorage.getItem('storeValue');
   if(storeValue == 1){
      guessNumber=Math.floor(Math.random() * 2);
      randomNumber=Math.floor(Math.random() * 50);
      myFunction2();
      document.getElementById("buttonNext").disabled = true;
      document.getElementById("matchPlayed").innerHTML = '00';
      lifePoints();
      //window.localStorage.removeItem('storeValue');
   }else{
      window.location.href = "index.html";
   }


 };

 function randomNumberMinMax(min, max){
   const r = Math.random()*(max-min) + min
   return Math.floor(r)
   //return r;
}


function hints1(){
   //document.getElementById("hints").innerHTML =randomNumber;
   hintsMin = randomNumberMinMax(randomNumber-2,randomNumber);
   hintsMax = randomNumberMinMax(randomNumber+1,randomNumber+3);
   hints = "[ Hints:Number is bettween "+hintsMin+" and "+hintsMax+" ]";
}
function myFunction2() {  //next
   
   document.getElementById("buttonClick").disabled = false;
   document.getElementById("buttonNext").disabled = true;
   document.getElementById("unknownNumber").innerHTML = "?";
   document.getElementById("hints").innerHTML = "";
   valueFORbuttons();
   hintsButtonShow();
   
   if(guessNumber==0){
         randomNumber=randomNumber+arr1[i];
         i=i+1;
         if(i>=4){
            i = 0;
         }
      
   }else if(guessNumber==1){
      randomNumber=randomNumber+arr2[i];
         i=i+1;
         if(i>=4){
            i = 0;
         }
   }else if(guessNumber==2){
      randomNumber=randomNumber+arr3[i];
         i=i+1;
         if(i>=4){
            i = 0;
         }
   }
   hints1();
   ///////////////////////////////
   //document.getElementById("point").innerHTML = randomNumber;
   
 }


 function myFunction() { //click
   matchPlayed++;
   document.getElementById("matchPlayed").innerHTML = ('0' + matchPlayed).slice(-2);

   document.getElementById("buttonNext").disabled = false;
   document.getElementById("buttonClick").disabled = true;
   var yourNumber = document.getElementById("yourNumber").value;
   if(yourNumber == randomNumber){
     
      document.getElementById("result").innerHTML = "!^.^!Right!^.^!";
      points=points+5;
      
   }else{
      document.getElementById("result").innerHTML = "!T.T!Wrong!T.T!";
      
      life--;
   }

   if(points >= 30){
      finalPageActon(1);
   }else if(life < 0){
      finalPageActon(2);
      valueForLastPage=2;
   }
   document.getElementById("unknownNumber").innerHTML = randomNumber;
   lifePoints();
 }



 function lifePoints(){
   document.getElementById("life").innerHTML = ('0' + life).slice(-2);
   document.getElementById("point").innerHTML = ('0' + points).slice(-2);
 }



 function gameManu(){
   xhttp.open("GET", "index.html", true);
   xhttp.send();
 }


 function processAjaxData(response, urlPath){
   document.getElementById("content").innerHTML = response.html;
   document.title = response.pageTitle;
   window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath);
}

function hintsButton(){
   //document.getElementById("hintsButton").style.display = "none";
   document.getElementById("hintsButton").style.visibility  = "hidden";
   document.getElementById("hints").innerHTML = hints;
}

function hintsButtonShow(){
   //document.getElementById("hintsButton").style.display = "block text-align: center;";
   document.getElementById("hintsButton").style.visibility = "visible";
   document.getElementById("hints").innerHTML = "";
}

function finalPageActon(value){

   localStorage.setItem("storeValue",1);
   document.getElementById("1stPart").style.display  = "none";
   document.getElementById("hintsButton").style.display  = "none";
   document.getElementById("2ndPart").style.visibility = "visible";

   document.getElementById("life").innerHTML = value;
   if(value == 1){
      document.getElementById("finalMssage").innerHTML = "You Won!!!!!";
      document.getElementById("finalMssage2").innerHTML = "Congratulation!";
      document.getElementById("emoji").innerHTML = "🎖";
      

   }else if(value == 2){
      //onloadDecision = 1;
      //window.location.href = "finalPageLost.html";
     
      
      
      
      //window.open("finalPage.html","mypopup","width=500,height=300") //pop up window
      // popup.document.getElementById("player").someFunction();
      document.getElementById("finalMssage").innerHTML = "You Lose!!!!!";
      document.getElementById("finalMssage2").innerHTML = "Game Over!";  
      document.getElementById("emoji").innerHTML = "😂";
      //window.location.href = "http://www.w3schools.com";   
      //PopupCenter('finalPage.html','xtf','900','500');  
      //window.open('https://javascript.info');
      //document.getElementById("finalMssage").innerHTML = "You Lose!!!!!";
   }
   
   /*function a(valueForLastPage){
      if(valueForLastPage == 1){
         document.getElementById("finalMssage").innerHTML = "You Won!!!!!";
         document.getElementById("finalMssage2").innerHTML = "Congratulation!";
      }else if(valueForLastPage == 2){
         document.getElementById("finalMssage").innerHTML = "You Lose!!!!!";
         document.getElementById("finalMssage2").innerHTML = "Game Over!";  
         //window.location.href = "http://www.w3schools.com";   
      }
   }*/
}



function valueFORbuttons(){

   document.getElementById("hints").innerHTML = 'carrayNumbers';
  //hintsMin = randomNumberMinMax(randomNumber-2,randomNumber);
   

   temp = randomNumberMinMax(randomNumber-3,randomNumber-1);
   carrayNumbers[0]=temp;
   //document.getElementById("button0").innerHTML = carrayNumbers[0];

   temp = randomNumberMinMax(randomNumber+1,randomNumber+2);
   carrayNumbers[1]=temp;
   temp = randomNumberMinMax(randomNumber+3,randomNumber+5);
   carrayNumbers[3]=temp;
   temp = randomNumberMinMax(randomNumber-6,randomNumber-4);
   carrayNumbers[2]=temp;
   temp = randomNumber;
   carrayNumbers[4]=temp;

   carrayNumbers.sort(() => Math.random() - 0.5)



   document.getElementById("button0").innerHTML = carrayNumbers[0];
   document.getElementById("button1").innerHTML = carrayNumbers[1];
   document.getElementById("button2").innerHTML = carrayNumbers[2];
   document.getElementById("button3").innerHTML = carrayNumbers[3];
   document.getElementById("button4").innerHTML = carrayNumbers[4];
}




function valueOFbuttons(value){

}

//let list = [1, 2, 3,4,5]
//list = list.sort(() => Math.random() - 0.5)
