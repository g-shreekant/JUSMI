$(document).ready(function(){
    


/* Lvl Low
===============
*/

for(i=1;i<=16;i++){
  $("#in"+i).css("font-size", "120%")
  $("#in"+i).css("text-align", "center")
  $("#in"+i).css("width", "8%");
  $("#in"+i).css("height", "8%");
  $("#in"+i).hide();
}
for(i=1;i<=2;i++){
  $(".btn_"+i).hide();
  
}
})


$(document).ready(function(){
  $(".low").click(function(){
    for(i=1;i<10;i++){
      $("#in"+i).show()
      $("#in"+i).attr("maxlength", "1")
    }
    for(i=10;i<=16;i++){
      $("#in"+i).hide()
    }
    $(".btn_1").show()
    $(".btn_2").hide()
    
  })
})





function ready_1(){
  var ready = 15;
  

var x1 = parseInt(document.getElementById("in1").value);
var x2 = parseInt(document.getElementById("in2").value);
var x3 = parseInt(document.getElementById("in3").value);
var x4 = parseInt(document.getElementById("in4").value);
var x5 = parseInt(document.getElementById("in5").value);
var x6 = parseInt(document.getElementById("in6").value);
var x7 = parseInt(document.getElementById("in7").value);
var x8 = parseInt(document.getElementById("in8").value);
var x9 = parseInt(document.getElementById("in9").value);

x1 = x1 || 0
x2 = x2 || 0
x3 = x3 || 0
x4 = x4 || 0
x5 = x5 || 0
x6 = x6 || 0
x7 = x7 || 0
x8 = x8 || 0
x9 = x9 || 0

 if(x1!="" && x2!="" && x3!="" && x4!="" && x5!="" && x6!="" && x7!="" && x8!="" && x9!=""){
  if(x1!=x2 && x1!=x3 && x1!=x4 && x1!=x5 && x1!=x6 && x1!=x7 && x1!=x8 && x1!=x9 && x2!=x3 && x2!=x4 && x2!=x5 && x2!=x6 && x2!=x7 && x2!=x8 && x2!=x9 && x3!=x4 && x3!=x5 && x3!=x6 && x3!=x7 && x3!=x8 && x3!=x9 && x4!=x5 && x4!=x6 && x4!=x7 && x4!=x8 && x4!=x9 && x5!=x6 && x5!=x7 && x5!=x8 && x5!=x9 && x6!=x7 && x6!=x8 && x6!=x9 && x7!=x8 && x7!=x9 && x8!=x9  ){
    if(x1+x2+x3==ready && x4+x5+x6==ready && x7+x8+x9==ready && x1+x4+x7==ready && x2+x5+x8==ready && x3+x6+x9==ready && x1+x5+x9==ready && x3+x5+x7==ready){
      document.write("Congratulation! you successfully made it!");
    }
    else{
      document.write("hey you failed try again");
      
    }
    }
  else{
    document.write("dont use same number twice");
  }
 }
 else{
     document.write("Dear user you cant keep box empty")
 }

}

/* Lvl high 
================
*/

$(document).ready(function(){
  $(".high").click(function(){
    for(i=1;i<=16;i++){
      $("#in"+i).show();
      $("#in"+i).attr("maxlength", "2")
    }
    $(".btn_2").show();
    $(".btn_1").hide();
  })
})

function ready_2(){
  var ready = 34;
var x1 = parseInt(document.getElementById("in1").value);
var x2 = parseInt(document.getElementById("in2").value);
var x3 = parseInt(document.getElementById("in3").value);
var x4 = parseInt(document.getElementById("in10").value);
var x5 = parseInt(document.getElementById("in4").value);
var x6 = parseInt(document.getElementById("in5").value);
var x7 = parseInt(document.getElementById("in6").value);
var x8 = parseInt(document.getElementById("in11").value);
var x9 = parseInt(document.getElementById("in7").value);
var x10 = parseInt(document.getElementById("in8").value);
var x11 = parseInt(document.getElementById("in9").value);
var x12 = parseInt(document.getElementById("in12").value);
var x13 = parseInt(document.getElementById("in13").value);
var x14 = parseInt(document.getElementById("in14").value);
var x15 = parseInt(document.getElementById("in15").value);
var x16 = parseInt(document.getElementById("in16").value);
  
x1 = x1 || 0
x2 = x2 || 0
x3 = x3 || 0
x4 = x4 || 0
x5 = x5 || 0
x6 = x6 || 0
x7 = x7 || 0
x8 = x8 || 0
x9 = x9 || 0
x10 = x10 || 0
x11 = x11 || 0
x12 = x12 || 0
x13 = x13 || 0
x14 = x14 || 0
x15 = x15 || 0
x16 = x16 || 0

  
  if(x1!="" && x2!="" && x3!="" && x4!="" && x5!="" && x6!="" && x7!="" && x8!="" && x9!="" && x10!="" && x11!="" && x12!="" && x13!="" && x14!="" && x15!="" && x16!=""){
    if(x1!=x2 && x1!=x3 && x1!=x4 && x1!=x5 && x1!=x6 && x1!=x7 && x1!=x8 && x1!=x9 && x1!=x10 && x1!=x11 && x1!=x12 && x1!=x13 && x1!=x14 && x1!=x15 && x1!=x16 && x2!=x3 && x2!=x4 && x2!=x5 && x2!=x6 && x2!=x7 && x2!=x8 && x2!=x9 && x2!=x10 && x2!=x11 && x2!=x12 && x2!=x13 && x2!=x14 && x2!=x15 && x2!=x16 && x3!=x4 && x3!=x5 && x3!=x6 && x3!=x7 && x3!=x8 && x3!=x9 && x3!=x10 && x3!=x11 && x3!=x12 && x3!=x13 && x3!=x14 && x3!=x15 && x3!=x16 && x4!=x5 && x4!=x6 && x4!=x7 && x4!=x8 && x4!=x9 && x4!=x10 && x4!=x11 && x4!=x12 && x4!=x13 && x4!=x14 && x4!=x15 && x4!=x16 && x5!=x6 && x5!=x7 && x5!=x8 && x5!=x9 && x5!=x10 && x5!=x11 && x5!=x12 && x5!=x13 && x5!=x14 && x5!=x15 && x5!=x16 && x6!=x7 && x6!=x8 && x6!=x9 && x6!=x10 && x6!=x11 && x6!=x12 && x6!=x13 && x6!=x14 && x6!=x15 && x6!=x16 && x7!=x8 && x7!=x9 && x7!=x10 && x7!=x11 && x7!=x12 && x7!=x13 && x7!=x14 && x7!=x15 && x7!=x16 && x8!=x9 && x8!=x10 && x8!=x11 && x8!=x12 && x8!=x13 && x8!=x14 && x8!=x15 && x8!=x16 && x9!=x10 && x9!=x11 && x9!=x12 && x9!=x13 && x9!=x14 && x9!=x15 && x9!=x16 && x10!=x11 && x10!=x12 && x10!=x13 && x10!=x14 && x10!=x15 && x10!=x16 && x11!=x12 && x11!=x13 && x11!=x13 && x11!=x14 && x11!=x15 && x11!=x16 && x12!=x13 && x12!=x14 && x12!=x15 && x12!=x16 && x13!=x14 && x13!=x15 && x13!=x16 && x14!=x15 && x14!=x16 && x15!=x16 ){
      if(x1+x2+x3+x4==ready && x5+x6+x7+x8==ready && x9+x10+x11+x12==ready && x13+x14+x15+x16==ready && x1+x5+x9+x13==ready && x2+x6+x10+x14==ready && x3+x7+x11+x15==ready && x4+x8+x12+x16==ready && x1+x6+x11+x16==ready && x4+x7+x10+x13==ready){
        document.write("Congratulation, You successfully made it.!!")
      }
      else{
        document.write("Sorry you failed try again..");
      }
      
    }
    else{
      document.write("hey please dont use same number twice!")
    }
  

  
  }
  else{
    document.write("hey user dont keep box empty !")
  }
  }


