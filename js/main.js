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


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//lightbox

const lightBox = document.querySelector('#lightbox');
const content1 = document.querySelector('#lightbox #lb_products');
const content2 = document.querySelector('#lightbox #lb_price');
const content3 = document.querySelector('#lightbox #lb_size');
const content4 = document.querySelector('#lightbox #lb_alc');
const content5 = document.querySelector('#lightbox #lb_about');
const links = document.querySelectorAll('.products_group div button a');

let products = [
    {
        name: 'Zima Original Taste(Can)',
        price: '$5',
		size: '250ml',
		ALC_VOL: '5%',
        about: '21+ to enjoy. Refreshing citrus beverage. Malt beverage with natural flavor.'

    },

	{
        name: 'Zima Original Taste',
        price: '$7',
		size: '250ml',
		ALC_VOL: '5%',
        about: '21+ to enjoy. Refreshing citrus beverage. Malt beverage with natural flavor.'

    },

	{
        name: 'Zima Silver',
        price: '$10',
		size: '250ml',
		ALC_VOL: '10%',
        about: '21+ to enjoy. Refreshing citrus beverage. Higher alcohol by volume and richer malt flavour.'

    },
];

function fillContent() {
    console.log(this.dataset.productsIndex);

    content1.innerHTML = '';
	content2.innerHTML = '';
	content3.innerHTML = '';
	content4.innerHTML = '';
	content5.innerHTML = '';

    if (!this.dataset.productsIndex){
        return;
    }

    let productsName = document.createElement("h3");
    productsName.textContent = products[this.dataset.productsIndex].name;
    productsName.classList = 'lb_text';
    content1.appendChild(productsName);

	let productsPrice = document.createElement("h3");
    productsPrice.textContent = products[this.dataset.productsIndex].price;
    productsPrice.classList = 'lb_text col-start-3 col-span-2';
    content2.appendChild(productsPrice);

	let productsSize = document.createElement("h3");
    productsSize.textContent = products[this.dataset.productsIndex].size;
    productsSize.classList = 'lb_text';
    content3.appendChild(productsSize);

	let productsALC_VOL = document.createElement("h3");
    productsALC_VOL.textContent = products[this.dataset.productsIndex].ALC_VOL;
    productsALC_VOL.classList = 'lb_text';
    content4.appendChild(productsALC_VOL);

    let productsAbout = document.createElement("p");
    productsAbout.textContent = products[this.dataset.productsIndex].about;
    productsAbout.classList = 'lb_p';
    content5.appendChild(productsAbout);
}

links.forEach(link => link.addEventListener('click', fillContent));
