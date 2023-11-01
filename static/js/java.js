const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
});

// cart

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.carrinho');
let closeCart = document.querySelector('#close-cart');

// open cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
};
// close cart
closeCart.onclick = () =>{
    cart.classList.remove("active");
};

// cart working js

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// making function
function ready(){
    //remove items from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    // quantity changes
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    // add to cart
    const addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCart.length; i++){
        addCart[i].addEventListener("click", addCartClicked);
    }
}

function addCartClicked(event) {
    const button = event.target
    const productInfos = button.parentElement.parentElement
    const productImg = productInfos.getElementsByClassName("product-img")[0].src
    const productTitle = productInfos.getElementsByClassName("product-title")[0].innerText
    const productPrice = productInfos.getElementsByClassName("priceprod")[0].innerText
    
    const productsCartName = document.getElementsByClassName("cart-product-title")
    for (var i = 0; i < productsCartName.length; i++) {
        if (productsCartName[i].innerText === productTitle) {
            productsCartName[i].getElementsByClassName("cart-quantity")[0].value++
            updatetotal()
            return
          }
    }
    
    let newCartProduct = document.createElement("div")
    newCartProduct.classList.add("cart-box")

    newCartProduct.innerHTML = 
    `
        <img src="${productImg}" alt="${productTitle}" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${productTitle}</div>
            <div class="cart-price">${productPrice}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
                        
        <!--Remove button-->
        <i class='bx bxs-trash-alt cart-remove'></i>
    `

    const tbody = document.querySelector(".cart-content")
    tbody.append(newCartProduct)

    updatetotal()
    console.log(newCartProduct)
    newCartProduct.getElementsByClassName("cart-quantity")[0].addEventListener("change", updatetotal)
    newCartProduct.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem)
}
 
// add cart click

//function addCartClicked(event) {
    //var button = event.target;
    //var shopProducts = button.parentElement;
    //var title = document.getElementsByClassName("product-title")[0].innerText;
    //var price = shopProducts.getElementsByClassName("priceprod")[0];
    //var productImg = shopProducts.getElementsByClassName("product-img")[0];
    //console.log(title);
//}






// quantity changes

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

// update total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("R$",""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
        // if price contain some cents value
        total = Math.round(total * 100) / 100;
        

        document.getElementsByClassName('total-price')[0].innerText = 'R$' + total;
    }
}