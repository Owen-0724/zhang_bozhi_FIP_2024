(function(){
	"use strict";	
	console.log("fired");

    let button = document.querySelector("#burger");
    let burgerCon = document.querySelector("#burger-con");

    function hamburgerMenu() {
        
        burgerCon.classList.toggle("slide-toggle");
        button.classList.toggle("expanded");
    
    };

    button.addEventListener("click", hamburgerMenu, false);        
})();

let mybutton = document.getElementById("back_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}