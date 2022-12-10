let menuOpen = document.querySelector(".menu-hamburger");
let menuWrapper = document.querySelector(".menu-wrapper");

menuOpen.addEventListener("click", function(){
    menuOpen.classList.toggle("bx-x");
    menuWrapper.classList.toggle("active");
});


var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    centeredSlides: false,
    spaceBetween: 40,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
    },
});

flatpickr("input[class=datetime]", {
    enableTime: true,
    dateFormat: "Y-m-d h:i",
    altInput: true,
    altFormat: "D j M, Y (h:i K)",
    disableMobile: "true",
    theme: "material_blue",
});

//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick =() => {
	cart.classList.add("active");
};
//close cart
closeCart.onclick =() => {
	cart.classList.remove("active");
};

//
if (document.readyState== "loading") {
	document.addEventListener("DOMContentLoaded", ready);
} else {
	ready();
}

//membuat fungsi
function ready(){
	//menghapus item dari keranjang
	var removeCartButtons = document.getElementsByClassName("cart-remove");
	console.log(removeCartButtons)
	for (var i = 0; i < removeCartButtons.length; i++){
		var button = removeCartButtons[i]
		button.addEventListener('click', removeCartItem);
	}
	//perubahan quantity
	var quantityInputs = document.getElementsByClassName("cart-quantity");
	for (var i = 0; i < quantityInputs.length; i++){
		var input = quantityInputs[i];
		input.addEventListener("change", quantityChanged);
	}
	// cara menambahkan ke keranjang
	var addCart = document.getElementsByClassName("add-cart");
	for (var i = 0; i < addCart.length; i++) {
		var button = addCart[i];
		button.addEventListener("click", addCartClicked);
	}
	//tombol beli
	document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
	
}
function buyButtonClicked(){
	alert("Your order is placed");
	var cartContent = document.getElementsByClassName("cart-content")[0];
	while (cartContent.hasChildNodes()){
		cartContent.removeChild(cartContent.firstChild);
	}
	updatetotal();
}


function removeCartItem(event){
	var buttonClicked = event.target
	buttonClicked.parentElement.remove()
	updatetotal();
}
// Perubahan kuantitas
function quantityChanged(event){
	var input = event.target
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1;
	}
	updatetotal();
}
// tambah ke keranjang
function addCartClicked(event){
	var button = event.target;
	var shopProducts = button.parentElement;
	var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
	var price = shopProducts.getElementsByClassName("price")[0].innerText;
	var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
	addProductToCart(title, price, productImg);
	updatetotal()
}
function addProductToCart(title, price, productImg){
	var cartShopBox = document.createElement("div");
	cartShopBox.classList.add ("cart-box");
	var cartItems = document.getElementsByClassName("cart-content")[0];
	var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
	for (var i = 0; i < cartItemsNames.length; i++){
		if (cartItemsNames[i].innerText == title){
		alert("You already add this item to cart");
		return;
		}
	}


var cartBoxContent = `
						<img src="${productImg}" class="cart-img">
						<div class="detail-box">
							<div class="cart-product-title">${title}</div>
							<div class="cart-price">${price}</div>
							<input type="number" value="1" class="cart-quantity">
						</div>
						<!-- hapus keranjang -->
						<i class='bx bxs-trash cart-remove' ></i>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}
//update total
function updatetotal(){
	var cartContent = document.getElementsByClassName("cart-content") [0];
	var cartBoxes= cartContent.getElementsByClassName("cart-box");
	var total = 0;
	for (var i = 0; i < cartBoxes.length; i++) {
		var cartBox = cartBoxes[i];
		var priceElement = cartBox.getElementsByClassName("cart-price")[0];
		var quantityElement = cartBox.getElementsByClassName("cart-quantity") [0];
		var price = parseFloat(priceElement.innerText.replace("$", ""));
		var quantity = quantityElement.value;
		total = total + price * quantity;
	}
		//a
		total = Math.round(total *100) / 100;

		document.getElementsByClassName("total-price")[0].innerText = "$" + total;
	
}