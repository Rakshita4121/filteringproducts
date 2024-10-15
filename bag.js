let bagitemsstr=localStorage.getItem('cartitems');
let cartitem=bagitemsstr ? JSON.parse(bagitemsstr) : [];
let bagitemobjects=[];
function onload(){
    loadBagItems();
    displayBagItems();
    totalprice();
}
function loadBagItems(){
    bagitemobjects=cartitem.map((itemid)=>{
        for(let i=0; i<cartitem.length; i++){
            if(products.data[i].id == itemid){
                return products.data[i];
            }
        }
    })
        
}
function displayBagItems(){
    let bagitemscontainer=document.querySelector('.bag-items-container')
    bagitemscontainer.innerHTML=''
     bagitemobjects.forEach((item)=>{
        bagitemscontainer.innerHTML+=generateItemHtml(item)
     })

}
function generateItemHtml(item){
    return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${item.image}">
    </div>
    <div class="item-right-part">
      <div class="item-name">${item.productName}</div>
      <div class="price-container">${item.price}
      </div>
      </div>
    <div class="remove-from-cart" onclick="removefromcart(${item.id})">X</div>
    </div>`
}

function totalprice(){
    let totalmrp=0;
    bagitemobjects.forEach((item)=>{
        totalmrp=totalmrp+item.price
    })
    let bagsummary=document.querySelector(".bag-summary");
    bagsummary.innerHTML=`
    <div>PRICE DETAILS (${bagitemobjects.length} items)</div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">Rs${totalmrp}</span>
    </div>
    <button>Place Order</button>
    `
}
function removefromcart(id){
    cartitem=cartitem.filter((cartitemid)=>{
        return cartitemid != id
    })
    localStorage.setItem("cartitems" , JSON.stringify(cartitem));
    loadBagItems()
    displayBagItems()
}
onload();