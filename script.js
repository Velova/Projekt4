var removeCartItemButtons = document.getElementsByClassName("removebutton");

for(let i = 0; i < removeCartItemButtons.length; i++)
{
  var button = removeCartItemButtons[i];
  button.addEventListener("click", RemoveItemFromCart);
}

var amountInputs = document.getElementsByClassName("cartitemamount");
for(let i = 0; i < amountInputs.length; i++)
{
  var input = amountInputs[i];
  input.addEventListener("change", amountChanged);
}

var addToCartButtons = document.getElementsByClassName("addtocart");
for(let i = 0; i < addToCartButtons.length; i++)
{
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
}

document.getElementsByClassName("purchasebutton")[0].addEventListener("click", purchaseClicked);

function purchaseClicked()
{
    alert("Items purchased! Thank you!");
    var cartItems = document.getElementsByClassName("cartitems")[0];
    while(cartItems.hasChildNodes())
    {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal();
}

function addToCartClicked(event)
{
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var itemname = shopItem.getElementsByClassName("itemname")[0].innerText;
    var price = shopItem.getElementsByClassName("itemprice")[0].innerText;
    var imageSrc = shopItem.getElementsByClassName("itemimage")[0].src;
    addItemToCart(itemname, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(itemname, price, imageSrc)
{
    var cartRow = document.createElement("div");
    var cartItems = document.getElementsByClassName("cartitems")[0];
    var cartItemNames = cartItems.getElementsByClassName("cartitemname");
    for(let i = 0; i < cartItemNames.length; i++)
    {
        if(cartItemNames[i].innerText == itemname)
        {
            alert("Item already in cart!");
            return
        }
    }
    var cartRowContents = `
    <div class="cartitemrow">
    <div class="cartitempicplusname">
        <img src="${imageSrc}" alt="">
        <div class="cartitemname">${itemname}</div>
    </div>
    <div class="cartitemprice">${price}</div>
    <input type="number" value="1" class="cartitemamount">
    <button class="removebutton">REMOVE</button>
    </div>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName("removebutton")[0].addEventListener("click", RemoveItemFromCart);
    cartRow.getElementsByClassName("cartitemamount")[0].addEventListener("change", amountChanged);
}

function amountChanged(event)
{
   var input = event.target;
   if(isNaN(input.value) || input.value < 1)
   {
       input.value = 1;
   }
   updateCartTotal();
}

function updateCartTotal()
{
    var cartItemContaier = document.getElementsByClassName("cartdropdown")[0];
    var cartRows = cartItemContaier.getElementsByClassName("cartitemrow");
    var total = 0;
    for(let i = 0; i < cartRows.length; i++)
    {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("cartitemprice")[0];
        var amountElement = cartRow.getElementsByClassName("cartitemamount")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var amount = amountElement.value;
        total += price * amount;
    }
    document.getElementsByClassName("carttotalprice")[0].innerText = "$" + total;
}

function RemoveItemFromCart(event)
{
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotal();
}