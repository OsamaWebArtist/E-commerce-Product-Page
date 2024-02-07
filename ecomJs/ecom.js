let images = document.querySelectorAll(".product-img .other-img img")
let currentImage = document.querySelector(".product-img img")


let popupProduct = document.querySelector(".back");
let closePopup = document.querySelector(".active-img .close");
let imagesPopup = document.querySelectorAll(".popup-product .other-img img")
let arrayImg = Array.from(imagesPopup)
let popupCurrImg = document.querySelector(".popup-product .active-img img:first-child")

let nextImg = document.querySelector(".popup-product .next");
let preImg = document.querySelector(".popup-product .pre");
let arraySrc = []


let plus = document.querySelector(".to-cart .plus");
let minus = document.querySelector(".to-cart .minus");
let numProd = document.querySelector(".to-cart .num-to-cart")

/*add active class in other img*/

images.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        images.forEach((ele) => { 
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")

        /*add current image*/

        currentImage.removeAttribute("src")
        currentImage.setAttribute("src",`./images/image-product-${e.currentTarget.dataset.img}.jpg`)
    })
})

/*show popup product*/

currentImage.onclick = function () {
    popupCurrImg.removeAttribute("src");
    popupCurrImg.setAttribute("src",currentImage.getAttribute("src"))
    popupProduct.style.display = "flex";
}
/*close popup*/

closePopup.onclick = function () {
    popupProduct.style.display = "none"
}

/*add active class in pupop Image others img*/

imagesPopup.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        imagesPopup.forEach((ele) => { 
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")

        /*add current image*/

        popupCurrImg.removeAttribute("src")
        popupCurrImg.setAttribute("src",`./images/image-product-${e.currentTarget.dataset.img}.jpg`)
    })
})

/*next button in popup imgs */

    /*make all src in array*/
    imagesPopup.forEach((ele) => {
        arraySrc.push(ele.getAttribute("src").slice(0, 24));
    })

nextImg.onclick = function () {
    let indexOfCurrImg = arraySrc.indexOf(popupCurrImg.getAttribute("src").slice(0, 24));
    
    if (indexOfCurrImg === arraySrc.length - 1) {
        return false;
    }

    popupCurrImg.removeAttribute("src");
    popupCurrImg.setAttribute("src",`${arraySrc[indexOfCurrImg + 1]}.jpg`)
}

/*Previous button in popup imgs*/

preImg.onclick = function () {
    let indexOfCurrImg = arraySrc.indexOf(popupCurrImg.getAttribute("src").slice(0, 24));
    
    if (indexOfCurrImg === 0) {
        return false;
    }

    popupCurrImg.removeAttribute("src");
    popupCurrImg.setAttribute("src",`${arraySrc[indexOfCurrImg - 1]}.jpg`)
}


/*add product number */
plus.onclick = function () {
    numProd.textContent++;
}
minus.onclick = function () {
    if (numProd.textContent === "1") {
        return false
    }
    numProd.textContent--;
}

/*active button add number product*/

let button_add_cart = document.querySelector(".to-cart button");
let numberProd = document.querySelector(".num-product span");
let numToCard = document.querySelector(".to-cart .num-to-cart");

let allProdSection = document.querySelector(".all-prod");
let activeImg = document.querySelector(".product-img .active-img img");
let prodName = document.querySelector(".info-prod h2");
let infoPrice = document.querySelector(".info-prod .price span:nth-child(1)");

button_add_cart.onclick = function () {
    numberProd.style.display = "flex";
    numberProd.textContent = numToCard.textContent;

    /****************creat div of product In Cart******************* */ 
    
    allProdSection.innerHTML = "";

    let creatProd = document.createElement("div")
    creatProd.className = "product";

    let creatImgProd = document.createElement("img")
    creatImgProd.setAttribute("src", activeImg.getAttribute("src"))

    let creatSpan = document.createElement("span");
    creatSpan.className= "title";
    creatSpan.textContent = prodName.textContent;

    let creatDivPrice = document.createElement("div")
    creatDivPrice.className = "price";
    let creatspanPrice = document.createElement("span")
    creatspanPrice.textContent = `${infoPrice.textContent} x ${numToCard.textContent}  `;
    let creatSecondSpan = document.createElement("span");
    creatSecondSpan.textContent = `$${infoPrice.textContent.slice(1,4) * numToCard.textContent}.00`

    let creatImgDel = document.createElement("img")
    creatImgDel.className = "delete"
    creatImgDel.setAttribute("src", "./images/icon-delete.svg")

    let creatButton = document.createElement("button");
    creatButton.className= "checkout"
    creatButton.textContent = "Checkout"

    allProdSection.appendChild(creatProd)
    creatProd.appendChild(creatImgProd)
    creatProd.appendChild(creatSpan)
    creatDivPrice.appendChild(creatspanPrice)
    creatDivPrice.appendChild(creatSecondSpan)
    creatProd.appendChild(creatDivPrice)
    creatProd.appendChild(creatImgDel)
    creatProd.appendChild(creatButton)
}

/*show the card */

let profileImg = document.querySelector(".basket .profile")
let showProdCard = document.querySelector(".basket .card-product")
let basket = document.querySelector(".basket .num-product > img");

profileImg.onclick = function () {

    if (showProdCard.computedStyleMap("").get("display").toString() ==="none") {
        showProdCard.style.display = "block";
    } else {
        showProdCard.style.display = "none";
    }
}

basket.onclick = function () {

    if (showProdCard.computedStyleMap("").get("display").toString() ==="none") {
        showProdCard.style.display = "block";
    } else {
        showProdCard.style.display = "none";
    }
}

/*delete chekout Prod */

addEventListener("click", function (e) {
    let activeProd = document.querySelector(".all-prod .product");
    if (e.target.className === "delete") {
        activeProd.remove();
        numberProd.style.display = "none";
    }
})