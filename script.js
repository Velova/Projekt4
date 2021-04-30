const dropdown = document.getElementById("dropdown");
const dropdownmenu = document.getElementById("dropdownmenu");
const cartdropdown = document.getElementById("cartdropdown");
const cart = document.getElementById("cart");

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



Shoppingcart = window.localStorage;

