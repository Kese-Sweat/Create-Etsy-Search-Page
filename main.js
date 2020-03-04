const first = items.results[0]
console.log('first item', first)
const gridItems = items.results.map((item) => {
    return {
        title: item.title,
        image: item.Images[0].url_fullxfull
    }
})

const gridList = gridItems.map((item) => {
    return `
        <div class="card">
            <div>
                <div class="card-image" style="background-image: url(${item.image})"></div>
                <h2>${ item.title }</h2>
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


