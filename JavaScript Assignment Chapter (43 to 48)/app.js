
// ==================================================================
//                 Chapter 43-48
// ==================================================================


//  QUESTION___1

function message1(){
    alert("Hello Saylani");
}


//  QUESTION___2

function message(){
    alert("Thanks for purchasing a phone from us")
}


// QUESTION___3

 function del(){
    var text =document.getElementById('hid')
    text.className += 'hidden' 
 }


//  QUESTION___4
 function changeImg(){
    var img = document.getElementById('img');
    img.src = 'img/pic2.jpg'
 }
 function changeBef(){
   var img = document.getElementById('img');
   img.src = 'img/pic.jpg'
}


// QUESTION___5

var button = document.getElementById("click"),
  count = 0;
function incre() {
  count += 1;
  button.innerHTML = " " + count;
}

var button = document.getElementById("click"),
  count = 0;
function decre() {
  count -= 1;
  button.innerHTML = " " + count;
};

