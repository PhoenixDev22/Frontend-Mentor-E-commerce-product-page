let  menuBurger = document.getElementById("menu");
const cross = document.getElementById("close-icon");
const navBar = document.getElementById("nav");
let pro_id = document.getElementById("main-image");// selecting the slider element
let imageThumbnail =  document.getElementsByClassName("thumbnail");// selecting all images thumbnails
let imageThumbnailArray = [...imageThumbnail ];
let counter = 0; // default imageslider counter 
let myOverlay = document.getElementById(`overlay`);
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

// makes the overlay appear
function appearOverlay(){
    myOverlay.classList.add("transform");
}
function disappearOverlay(){
    myOverlay.classList.remove("transform");
}
function mainFunctionDisplayMenu(){
    navBar.classList.add("appear");
    cross.classList.add("close-appear");
    appearOverlay(); 
}
function mainFunctionHideMenu(){
    navBar.classList.remove("appear");
    cross.classList.remove("close-appear");
    disappearOverlay();
}
// toggle menu bar 
menuBurger.addEventListener("click", function(){
    if (navBar.getBoundingClientRect().x < 0){
        mainFunctionDisplayMenu();
    }
})
cross.addEventListener("click", function(){
    mainFunctionHideMenu()
})

// start the main product image 

myOverlay.addEventListener("click", function(){
    mainPproductImageRemove();
    mainFunctionHideMenu();
})
pro_id.onclick = function(){
    appearOverlay();
    myImages.classList.add("act");
    myButtonsDiv.classList.add("active-buttons");
    myCloseBtn.classList.add("display");
}
function mainPproductImageRemove(){
    myImages.classList.remove("act");
    myButtonsDiv.classList.remove("active-buttons");
}
myCloseBtn.addEventListener("click",function(){
    mainPproductImageRemove();
    disappearOverlay();
});

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
myCart.addEventListener("click",function(){
    mySectionShoppingList.classList.toggle("display");
}) 

document.addEventListener("click", function(e){
    if (e.target.id != "add-to-cart"){
        mySectionShoppingList.classList.remove("display");
    }
})

emptyTheshoppingList();
addToCartButton.onclick = function (){
    if ( myNumberOfItems.value != "0"){
        desciptionDiv.classList.add("display-flex");
        desciptionDiv.classList.remove("display-none");
    
        buttonInCart.classList.add("display");
        buttonInCart.classList.remove("display-none");
    
        myNumOfItems.classList.add("display");
        myNumOfItems.classList.remove("display-none");
    
        emptyCartMessage.classList.add("display-none");
        emptyCartMessage.classList.remove("display");

        myNumOfItems.style.background = "#ff731b";
        myNumOfItems.innerHTML = myNumberOfItems.value;

        total = myNumberOfItems.value * 125;
        myNumItems.textContent = ` ${myNumberOfItems.value} = $${total} `;
    }
}


// empty the shopping list function when delete icon clicked
function emptyTheshoppingList(){

    desciptionDiv.classList.remove("display-flex");
    desciptionDiv.classList.add("display-none");

    buttonInCart.classList.remove("display");
    buttonInCart.classList.add("display-none");

    myNumOfItems.classList.remove("display");
    myNumOfItems.classList.add("display-none");

    emptyCartMessage.classList.remove("display-none");
    emptyCartMessage.classList.add("display");

    myNumberOfItems.value = "0";
}
// delete icon on the cart 
deleteIcon.addEventListener("click", function(){
    emptyTheshoppingList(); 
})
// check out button in the cart
buttonInCart.addEventListener("click", function(){
    emptyTheshoppingList();
})




let myArrayOfSrc = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"];
let mybtns = [...document.getElementsByClassName("btn")];

mybtns.forEach(btn => {
    btn.addEventListener("click", function(){
        let dir = btn.id;
        buttonsFunctionality(dir);
    })
})

function buttonsFunctionality(id){
    let prod_id = document.getElementById("main-image");
    let positionOfI = prod_id.src.search("i");   
    let u = prod_id.src.slice(positionOfI);
    let numberOfImages= myArrayOfSrc.length - 1;
    let myIndex = 0;
    
    for (let i = 0; i < myArrayOfSrc.length; i++){
        if (u == myArrayOfSrc[i]){
            myIndex = i;
            console.log(myIndex);
        }
    }
    if(id == "right"){
        if (myIndex == numberOfImages ){
            prod_id.src = myArrayOfSrc[0];
            myIndex = 0;
        }else{
            myIndex+=1;
            prod_id.src = myArrayOfSrc[myIndex];
        }
    }
    if (id == "left"){
        if (myIndex == 0){
            prod_id.src = myArrayOfSrc[numberOfImages ];
            myIndex = numberOfImages ;
        }else{
            myIndex-=1; 
            prod_id.src = myArrayOfSrc[myIndex];
        }
    } 
}






















