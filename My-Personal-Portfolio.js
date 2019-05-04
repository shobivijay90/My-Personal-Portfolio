document.addEventListener("DOMContentLoaded", function(){

/*SV logo event listener*/

$(document).ready(function(){
 
  $("#svlogo").mouseover(function(){
    $(this).css("box-shadow", "3px 3px 3px steelblue");
    $(this).css("width", "85px");
$(this).css("height", "85px");
});
  
   $("#svlogo").mouseout(function(){
  $(this).css("box-shadow", "");
    $(this).css("width", "");
$(this).css("height", "");
   });
  
});

/*navigation links event listener*/

var navBar= document.getElementById("list").getElementsByTagName("a");
for(i=0; i<navBar.length; i++){
  navBar[i].addEventListener("mouseover",function(){
 this.style="box-shadow: 0 0 20px steelblue";
    this.style.padding = "5px 5px";
    this.style.borderRadius = "5px";   
  });
    navBar[i].addEventListener("mouseout",function(){
    this.style="";
  });
}

/*Profile picture event listener*/

var profPic = document.getElementById("my-img");
profPic.addEventListener("mouseover",function(){
  this.style.opacity="0.5";
});
profPic.addEventListener("mouseout", function(){
  this.style="";
});

var proj= document.getElementById("projects").getElementsByTagName("img");
for(var j=0; j<proj.length; j++){
  proj[j].addEventListener("mouseover",function(){
    this.style="border: 2px solid steelblue";
  this.style="box-shadow: 0 0 30px steelblue";
  });
   proj[j].addEventListener("mouseout",function(){
    this.style ="";
   });
}

/*buttons  event listener*/

var btn= document.getElementById("showall");
btn.addEventListener("mouseover",function(){
  this.style="box-shadow: 5px 5px 5px black";
});
btn.addEventListener("mouseout",function(){
  this.style="";
});
btn.addEventListener("click", function(){
  window.open("https://codepen.io/shobivijay90/");
});

/*contact logo event listener*/

var con= document.getElementById("logo-contact").getElementsByTagName("img");
for(var a=0; a<con.length; a++){
con[a].addEventListener("mouseover",function(){
  this.style.opacity= "0.5";
});
con[a].addEventListener("mouseout", function(){
  this.style="";
});
}


});



