const dropdown = document.getElementById("dropdown");
const dropdownmenu = document.getElementById("dropdownmenu");

dropdown.addEventListener("click", DropDownVisible);

dropdownmenu.classList.add("hide");


let hide = true;
function DropDownVisible()
{
    if(hide)
    {
        dropdownmenu.classList.remove("hide");
        hide = false;
    }
    else
    {
        dropdownmenu.classList.add("hide");
        hide = true;
    }
    console.log("DropDownVisible()");
}

Shoppingcart = window.localStorage;
