Shoppingcart = window.localStorage;

const dropdown = document.getElementById("dropdown");
const dropdownmenu = document.getElementById("dropdownmenu");
const cartdropdown = document.getElementById("cartdropdown");
const cart = document.getElementById("cart");
const cartcontainer = document.getElementById("cartcontainer");

const items = document.querySelectorAll(".addtocart");

const item1name = localStorage.setItem("Name", "");
const item1price = localStorage.setItem("Price", 0);
const getitem1name = localStorage.getItem("Name");
const getitem1price = localStorage.getItem("Price");

console.log("Itemname: " + getitem1name);
console.log("Itemprice: " + getitem1price);

setTimeout
let test = document.createElement("div");
dropdownmenu.append(test);

function TakeClickedId()
{
    let clickeditemid = parseInt(event.target.id);
    if(clickeditemid == 1)
    {
        
    }
    else if(clickeditemid == 2)
    {

    }
    console.log("TakeClickedId()");
}

dropdown.addEventListener("click", DropDownVisible);
cart.addEventListener("click", CartItemsShow);

dropdownmenu.classList.add("hide");
cartdropdown.classList.add("hide");


let hidecategory = true;
function DropDownVisible()
{
    if(hidecategory)
    {
        dropdownmenu.classList.remove("hide");
        hidecategory = false;
    }
    else
    {
        dropdownmenu.classList.add("hide");
        hidecategory = true;
    }
    console.log("DropDownVisible()");
}



let hidecart = true;
function CartItemsShow()
{
    if(hidecart)
    {
        cartdropdown.classList.remove("hide");
        hidecart = false;
    }
    else
    {
        cartdropdown.classList.add("hide");
        hidecart = true;
    }
    console.log("Cartdropdown()");
}





