let  menuBurger = document.getElementById("menu");
const cross = document.getElementById("close-icon");
const navBar = document.getElementById("nav");
let pro_id = document.getElementById("main-image");// selecting the slider element
let imageThumbnail =  document.getElementsByClassName("thumbnail");// selecting all images thumbnails
let imageThumbnailArray = [...imageThumbnail ];
let counter = 0; // default imageslider counter 
let myOverlay = document.getElementById(`overlay`);
let rightButton = document.getElementById("right");
let leftButton = document.getElementById("left");
let myCart = document.getElementById("add-to-cart");
let mySectionShoppingList = document.getElementById("myshoppinglist");
let addToCartButton = document.getElementById("add-to-cart-button");  // add to cart button in the main page
let closeCartButton = document.getElementById("close-cart");
let deleteIcon = document.getElementById("delete-icon");
let buttonInCart = document.getElementById("button-in-cart"); //check out button in the shopping list
let myNumberOfItems = document.getElementById("num-of-items");
let desciptionDiv = document.querySelector(".description");
let myNumOfItems = document.getElementById("num-items");
let addingItemsImg = document.getElementById("adding");
let deletingItemsImg = document.getElementById("minusing");
let numberOfItems = document.querySelector("#num-of-items");
let myNumItems = document.getElementById("number-of-items");
let emptyCartMessage = document.querySelector(".cart-empty-message");
let myImages = document.querySelector(`.product__images`);
let myButtonsDiv = document.querySelector(".buttons");
let myCloseBtn = document.getElementById("close-image");
let myCartImage = document.querySelector(".cart-image");
let total = 0;

// makes the overlay disappear
function disappearOverlay (){
    myOverlay.style.transform = "translateX(-100%)";
}
// makes the overlay appear
function appearOverlay(){
    myOverlay.style.transform = "translateX(0)";
}

// toggle menu bar in the navigation
menuBurger.addEventListener("click", function(){
    if (navBar.style.left == "-100%"){
        navBar.style.left= "0";
        cross.style.display = "block";
        appearOverlay();  
    }else{
        navBar.style.left= "-100%";
        disappearOverlay ();
    }
})

cross.onclick = function (){
    navBar.style.left= "-100%";
    cross.style.display = "none";
    disappearOverlay ();
    myOverlay.addEventListener("click", function(){
        navBar.style.left= "-100%";
        cross.style.display = "none";
        disappearOverlay ();
    })
}

// when you click the main image
pro_id.onclick = function(){
    myImages.classList.toggle("act");
    appearOverlay();
    myButtonsDiv.classList.add("active-buttons");
    myCloseBtn.style = "display: block; z-index: 11;"
    myCloseBtn.onclick = function(){
        myImages.classList.remove("act");
        disappearOverlay ();
        myButtonsDiv.classList.remove("active-buttons");
        myCloseBtn.style.display ="none";
    }
    myOverlay.addEventListener("click", function(){
        disappearOverlay ();
        myImages.classList.remove("act");
        myButtonsDiv.classList.remove("active-buttons");
    })
}


imageThumbnailArray.forEach((item, i) => {
    item.addEventListener("click", () => {// adding click event to each  image 
        pro_id.src = `images/image-product-${i+1}.jpg`;
        myCartImage.src=`images/image-product-${i+1}.jpg`;
        imageThumbnailArray[counter].classList.remove("active");//removing active class from current image thumb 
        item.classList.add("active");// add active class to the   current or clicked image thumb
        counter = i; //updating the image slider variable to traCK THE CURRENT THUMB
    })  
})


// increasing and decreasing the quantity
addingItemsImg.onclick = function(){
    numberOfItems.value++;
}
deletingItemsImg.onclick = function(){
    if (numberOfItems.value > 0) numberOfItems.value--;
}

// add to cart button on the main page 
addToCartButton.onclick = function (){
    if ( myNumberOfItems.value != "0"){
        emptyCartMessage.style.display = "none";
        myNumOfItems.style.display = "block";
        desciptionDiv.style.display ="flex";
        buttonInCart.style.display = "block";
        myNumOfItems.style.background = "#ff731b";
        myNumOfItems.innerHTML = myNumberOfItems.value;
        total = myNumberOfItems.value * 125;
        myNumItems.textContent = ` ${myNumberOfItems.value} = $${total} `;
    }
}
if(myNumberOfItems.value == "0") {
    emptyCartMessage.style.display = "block";
    buttonInCart.style.display = "none";
    desciptionDiv.style.display ="none";
}

// delete icon on the cart 
deleteIcon.addEventListener("click", function(){
    emptyTheshoppingList(); 
})
// check out button in the cart
buttonInCart.addEventListener("click", function(){
    emptyTheshoppingList();
})

// empty the shopping list function when delete icon clicked
function emptyTheshoppingList(){
    desciptionDiv.style.display ="none";
    buttonInCart.style.display = "none";
    myNumOfItems.style.display = "none";
    emptyCartMessage.style.display = "block";
    myNumberOfItems.value = "0";
}
let myArrayOfSrc = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"];
let  myIndex = 0;

// the prev  and  n ext button
rightButton.addEventListener("click", function(){
    let prod_id = document.getElementById("main-image");
    let z = prod_id.src;
    let positionOfI = prod_id.src.search("i");    
    let u = z.slice(positionOfI);
    for (let i = 0; i < myArrayOfSrc.length; i++){
        if (u == myArrayOfSrc[i]){
            myIndex = i;
        }
    }
    if (myIndex < myArrayOfSrc.length ){
        prod_id.src = myArrayOfSrc[myIndex + 1];
    } 
    if (myIndex == myArrayOfSrc.length - 1){
        prod_id.src = myArrayOfSrc[0];
    } 
 // x.indexOf("i") 22 this index will be different as here im  using live 5500;
})


leftButton.addEventListener("click", function(){
    let prod_id = document.getElementById("main-image");
    let z = prod_id.src;
    let positionOfI = prod_id.src.search("i");    
    let y = z.slice(positionOfI);
    for (let i = 0; i < myArrayOfSrc.length; i++){
        if (y == myArrayOfSrc[i]){
            myIndex = i;
        }
    }
    if (myIndex < myArrayOfSrc.length ){
        prod_id.src = myArrayOfSrc[myIndex - 1];
    } 
    if (myIndex == 0){
        prod_id.src = myArrayOfSrc[myArrayOfSrc.length - 1 ];
    }
})

myCart.addEventListener("click",function(){
    mySectionShoppingList.classList.toggle("display");
}) 

document.addEventListener("click", function(e){
    if (e.target.id != "add-to-cart"){
        mySectionShoppingList.classList.remove("display");
    }
})





















