let products ={
    data:[
        {
            id:1,
            productName:"Regular White T-shirt",
            category:"Topwear",
            price:300,
            image:"white-t-shirt.jpg"
        },
        {
            id:2,
            productName:"Beige Short Skirt",
            category:"Bottomwear",
            price:300,
            image:"short-skirt.jpg"
        },
        {
            id:3,
            productName:"Sporty Smartwatch",
            category:"Watches",
            price:500,
            image:"sporty-smartwatch.jpg"
        },
        {
            id:4,
            productName:"Black Leather Jacket",
            category:"Topwear",
            price:900,
            image:"black-leather-jacket.jpg"
        },
        {
            id:5,
            productName:"Stylish Pink Trousers",
            category:"Bottomwear",
            price:100,
            image:"pink-trousers.jpeg"
        },
        {
            id:6,
            productName:"Broom Men's Jacket",
            category:"Topwear",
            price:499,
            image:"broom-mens-jacket.jpg"
        },
        {
            id:7,
            productName:"Comfy Grey Pants",
            category:"Bottomwear",
            price:499,
            image:"comfy-grey-pant.jpg"
        },
        {
            id:8,
            productName:"OLEVS Mens Gold Watches",
            category:"Watches",
            price:499,
            image:"OLEVS-Mens-Gold-Watches.jpg"
        },
        {
            id:9,
            productName:"mi Smart Watch",
            category:"Watches",
            price:499,
            image:"mi-smart-watch.jpg"
        },
        {
            id:10,
            productName:"Broom Men's Jacket",
            category:"Topwear",
            price:499,
            image:"broom-mens-jacket.jpg"
        },
    ]
}

for(let i of products.data){
    let card=document.createElement("div");
    card.classList.add("card",i.category,"hide");
    let imagecontainer=document.createElement("div");
    imagecontainer.classList.add("image-container");
    let image=document.createElement("img");
    image.setAttribute("src",i.image);
    imagecontainer.appendChild(image);
    card.appendChild(imagecontainer);
    let products=document.querySelector(".products")
    products.appendChild(card);
    let container=document.createElement("div");
    container.classList.add("container");
    let name=document.createElement("h5");
    name.classList.add("product-name");
    name.innerText=i.productName.toUpperCase();
    let price=document.createElement("h6");
    price.classList.add("product-price");
    price.innerText=` Rs  ${i.price}`;
    let addtocartbtn=document.createElement("button");
    addtocartbtn.classList.add("addtocartbtn");
    addtocartbtn.innerText="Add To Cart";
    addtocartbtn.setAttribute("onclick",`addToCart(${i.id})`);
    container.appendChild(name);
    container.appendChild(price);
    container.appendChild(addtocartbtn);
    card.appendChild(container);
}
function filterproduct(value){
    let btns=document.querySelectorAll(".button-value");
    btns = Array.from(btns);
    btns.forEach((btn)=>{
        if(value == btn.innerText){
            btn.classList.add("active")
        }
        else{
            btn.classList.remove("active");        }
    });
    let elements=document.querySelectorAll(".card");
    elements.forEach((element)=>{
        if(value == 'All'){
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)){
                    element.classList.remove("hide");
            }
            else{
                element.classList.add("hide")
            }
        }
    })
}
let cartitems;
function onload(){
    let cartitemsstr= localStorage.getItem('cartitems')
    cartitems= cartitemsstr ? JSON.parse(cartitemsstr) :[]
    filterproduct('All');
    displayBagIcon();
}
onload();
function addToCart(id){
    cartitems.push(id);
    localStorage.setItem('cartitems',JSON.stringify(cartitems));
    displayBagIcon();
}
function displayBagIcon(){
    let cartitemcount=document.querySelector(".bag-item-count")
    if(cartitems.length > 0){
        cartitemcount.style.visibility="visible";
        cartitemcount.innerText=cartitems.length;
    }
    else{
        cartitemcount.style.visibility="hidden";
    }
}