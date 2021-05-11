




/*
Shoppingcart = window.localStorage;

const items = document.querySelectorAll(".addtocart");
const cartdropdown = document.getElementById("cartdropdown");

var item1 = {
    itemname: "Hooman",
    itemprice: 15,
    itemamount: 0,
    itemid: 1
}

var item2 = {
    itemname: "Chikkin'",
    itemprice: 420, 
    itemamount: 0,
    itemid: 2
}

const item1name = localStorage.setItem("Name1", item1.itemname);
const item1price = localStorage.setItem("Price1", 0);
const item1amount = localStorage.setItem("Amount1", 0);
const getitem1name = localStorage.getItem("Name1");
const getitem1price = localStorage.getItem("Price1");
const getitem1amount = localStorage.getItem("Amount1")




let cartappend = document.createElement("div");

function TakeClickedId()
{
    let clickeditemid = parseInt(event.target.id);
    StorageAddItem(clickeditemid);
     //console.log("TakeClickedId()");
}

function StorageAddItem(clickeditemid)
{
    if(clickeditemid == item1.itemid)
    {
       if(getitem1amount == 0)
       {
           getitem1amount++;
           console.log(getitem1amount);
        cartappend.textContent = getitem1name + " " + getitem1price * getitem1amount;
        cartdropdown.append(cartappend);
        console.log("First item");
       }
       else
       {

       }
      
    }
    else if(clickeditemid == item2.itemid)
    {
        console.log("Secnond item");
    }
    console.log("StorageAddItem();");
}
*/




