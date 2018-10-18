//GET TIME
var date = new Date();
var year = date.getFullYear();      
var month = date.getMonth() + 1;         
var day = date.getDay();           
var hours = date.getHours();         
var minutes = date.getMinutes();       
var seconds = date.getSeconds();      

var timestamp = month+"/"+day+"/"+year+" "+hours+":"+minutes+":"+seconds

//ARRAYS FOR RANDOM
var fonts = ["monospace", "serif", "sans-serif", "cursive", "impact"];
var letterspacing = [0, 10, 5, 20];


//FUNCTION TO UPLOAD IMAGE   
function previewFile(obj){
       var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();
       reader.onloadend = function () {
        preview.src = reader.result;
       }
       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
           
       } else {
           preview.src = "";
       }
    $(".date").eq(obj).text(timestamp)
  }

//FUNCTION TO UPLOAD/STYLE TEXT AND SUBMIT TIMESTAMP  
function append(obj) {
   var textarea= $('#container li').eq(obj).find('.default-value').val();
    $('#container li').eq(obj).find('.text').html(textarea);
    var randomFont = fonts[Math.floor(Math.random()*fonts.length)]
    var randomSpacing = letterspacing[Math.floor(Math.random()*letterspacing.length)]
    $('#container li').eq(obj).find('.text').css("font-family", randomFont)
    $('#container li').eq(obj).find('.text').css("letter-spacing", randomSpacing)
}

//class adds colors
//var colors = ["grey", "green", "pink"];


