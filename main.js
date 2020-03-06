const first = items.results[0]
console.log('first item', first)
const gridItems = items.results.map((item)=>{
    return {
        title: item.title,
        image: item.Images[0].url_fullxfull,
        shopName: item.Shop.shop_name,
        review: 4.0,
        price: item.price,
        
    }
})

const freeShipping = items.results.filter((item)=>{
    return item.title.includes('FREE SHIPPING')
})
    



const gridList = gridItems.map((item) => {
    return `
        <div class="card">
            <div>
            <div class = "product-icon-circle">
            <img class="heart"  src="assets/heart.png" />
            </div>
                <div class="card-image" style="background-image: url(${item.image})"></div>
                <h2>${ item.title }</h2>
                <span>${item.shopName}</span>
                <div>
                <div class="Stars" style="--rating: ${item.review};" aria-label="Rating of this product is 4.0 out of 5."></div>
                </div>
                <span>$${item.price}</span>
                
            </div>
        </div>
        
    `
}).join('')

document.querySelector('#grid').innerHTML = gridList;


const topMenuBar = ['Jewelry & Accessories', 'Clothing & Shoes', 'Home & Living', 'Wedding & Party', 'Toys & Entertainment', 'Art & Collectibles', 'Craft Supplies', 'Vintage Gifts']

const categoryBar = topMenuBar.map(item =>{
    return`
        <li class="item">${item}</li>`
        

}).join('')

document.querySelector('#menuBarOne').innerHTML= categoryBar






