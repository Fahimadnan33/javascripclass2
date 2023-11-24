function textChange(){
  document.getElementById('tc').innerHTML="fahim adnan";
}
//
function dateTime(){
  document.getElementById('date').innerHTML=Date( );
}
// 
function colorChange(){
  document.getElementById('color').style.color="red";
}
//s/h//
function textHide(){
  document.getElementById('sh').style.display="none";
}
function textShow(){
  document.getElementById('sh').style.display="block";

}
//
function nemeClass(){
  document.getElementsByClassName('h6')[2].innerHTML="Fahm adnan";
  document.getElementsByClassName('h6')[2].style.color="green";
}
//
function bullbOff(){
  document.getElementById('bl').src="images/pic_bulboff.gif";
}

function bullbOn(){
  document.getElementById('bl').src="images/pic_bulbon.gif";


}

//
const password = document.querySelector('input[type="password"]');

password.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});

password.addEventListener("blur", (event) => {
  event.target.style.background = "";
});

//
function fun() {
alert("Welcome");
}
//
function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}

//
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Thank You";
}
//
function font(){
  document.getElementById('fontsize').style.fontSize="20px"
}
function background(){
  document.getElementById('bg').style.background="red";
}
//
function color(){
  document.getElementById('fc').style.color="green";
}

function dblClik(){
  document.getElementById('dbl').style.color="blue";
}
//
var x,y;
x= 5;
y= 5;
 x += y;
function dataAddition(){
  document.getElementById('sumee').innerHTML= x;
}

let Number1,Number2;
Number1= 5;
Number2= 5;
 Number1 *= Number2;
function Multiplying(){
  document.getElementById('Multiplying').innerHTML= Number1;
}

let Number3,Number4;
Number3= 5;
Number4= 4;
 Number3 -= Number4;
function minus(){
  document.getElementById('minus').innerHTML= Number3;
}







function userInput(){
  var Number5=  prompt("Enter frist number:");
  var Number6= prompt("Enter last number:");
  Number5= parseInt(Number5, 10);
  Number6= parseInt(Number6, 10);
  var sum, sub, mul, div, rem;
  sum=Number5+Number6;
  document.getElementById('input').innerHTML=(Number5+ "+" + Number6+ "=" +sum );
}

function userInpu(){
  var Number5=  prompt("Enter frist number:");
  var Number6= prompt("Enter last number:");
  Number5= parseInt(Number5, 10);
  Number6= parseInt(Number6, 10);
  var sum, sub, mul, div, rem;
 sub = Number5-Number6;
  document.getElementById('User').innerHTML=(Number5+ "-" + Number6+ "=" +sub);
}
//gon
function userInput1(){
  var Number5=  prompt("Enter frist number:");
  var Number6= prompt("Enter last number:");
  Number5= parseInt(Number5, 10);
  Number6= parseInt(Number6, 10);
  var sum, sub, mul, div, rem;
   mul = Number5*Number6;
  document.getElementById('User1').innerHTML=(Number5+ "*" + Number6+ "=" +mul);
}
//vag
function userInput2(){
  var Number5=  prompt("Enter frist number:");
  var Number6= prompt("Enter last number:");
  Number5= parseInt(Number5, 10);
  Number6= parseInt(Number6, 10);
  var sum, sub, mul, div, rem;
  div = Number5/Number6;
  document.getElementById('User2').innerHTML=(Number5+ "/" + Number6+ "=" +div);
}

//mo
function userInput3(){
  var Number5=  prompt("Enter frist number:");
  var Number6= prompt("Enter last number:");
  Number5= parseInt(Number5, 10);
  Number6= parseInt(Number6, 10);
  var sum, sub, mul, div, rem;
  rem = Number5%Number6;
  document.getElementById('User3').innerHTML=(Number5+ "%" + Number6+ "=" +rem);
}

//


var marks=prompt("Enter Your marks=");

if(marks>=80)
function marks(){
  document.getElementById('marks-out-put').innerHTML=("A+")

}
else if(marks>=70)
function marks(){
  document.getElementById('marks-out-put').innerHTML=("A")

}
else if(marks>=60)
function marks(){
  document.getElementById('marks-out-put').innerHTML=("A-")

}

else if(marks>=40)
function marks(){
  document.getElementById('marks-out-put').innerHTML=("D")

}

else(
  function marks(){
    document.getElementById('marks-out-put').innerHTML=("falle")

  }
)

//loop

for( var Number7=1; Number7<=10; Number7++ ){

      // document.write("fahim </br>");
      function loop(){
        document.getElementById('loop').innerHTML= "Fahim"  +Number7;
      }
      
      
}

function us(){
  var m= parseInt( prompt("frist "));
  var n= parseInt( prompt("last "));
  sum = 0;
 for(var  x = m; x<=n; x = x + 1){
  sum = sum + x;
  }


  document.getElementById('we').innerHTML=sum;
}











//jqury//
$(document).ready(function(){

    $('.alt').on("click", function(){
      alert("Welcome");
    })


    $('h5').on("click", function(){
      $( this ).slideUp();
    })

    $('#hide').on("click", function(){
      $( '#h6' ).fadeOut("slow");
    })

    
    $('#show').on("click", function(){
      $( '#h6' ).fadeIn("slow");
    })

    $('#Toggle').on("click", function(){
      $( '#togg' ).fadeToggle("slow");
    })

    $('.qus').on("click", function(){
      $( '.ans' ).slideToggle("slow");
    })

    $('#run').on("click", function(){
      $( '#block' ).animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
      }, 1000);
    })

    $( "button" ).on( "click", function() {
      $( "div.first" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
      $( "div.second" ).slideUp( 300 ).fadeIn( 400 );
    });



});

