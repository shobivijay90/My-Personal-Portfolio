
document.addEventListener("DOMContentLoaded", function(){

$(document).ready(function(){
  
  /*SV logo event listener*/
  
  let svlogo_mouseover = {
    boxShadow: "3px 3px 3px steelblue",
    width: "85px",
    height: "85px"
  };
  
   let svlogo_mouseout = {
    boxShadow: "",
    width: "",
    height: ""
  };
 
  $("#svlogo").mouseover(function(){
    $(this).css(svlogo_mouseover);
});
  
   $("#svlogo").mouseout(function(){
  $(this).css(svlogo_mouseout);
   });
  
/*navigation links event listener*/

  let navBar_mouseover =  {
     boxShadow: "0 0 20px steelblue",
    padding: "5px 5px",
    borderRadius:"5px" 
  };
   let navBar_mouseout =  {
     boxShadow: "",
    padding: "",
    borderRadius:"" 
  };
  
var navBar= $("ul li a"); 
for(i=0; i<navBar.length; i++){
  
  navBar[i].addEventListener("mouseover",function(){
        $(this).css(navBar_mouseover);
  });
    navBar[i].addEventListener("mouseout",function(){
         $(this).css(navBar_mouseout);
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

  /*Projects  event listener*/
  
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
  });
  