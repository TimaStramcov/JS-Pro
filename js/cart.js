class ProductsList {
    constructor(container = '.carts') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: "t-shirt", price: 2000 },
            { id: 2, title: "t-shirt", price: 20 },
            { id: 3, title: "t-shirt", price: 200 },
            { id: 4, title: "t-shirt", price: 50 },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new Products(product);
            block.insertAdjacentHTML('afterbegin', productObj.render())
        }
    }
    sumPrice() {
        let s = 0;
        for (let product of this.goods) {
            s += product.price;
        }
        alert(s);
    }
}

class Products {
    constructor(product, img = 'https://yandex.ru/images/search?source-serpid=hn3TCCldFkd0bRviUX013Q&nomisspell=1&text=футболка%20png%20без%20фона&source=related-query-serp&pos=7&img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2d%2Fff%2F5b%2F2dff5b3a9a41e416f60e2013ff657942.png&rpt=simage') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return ` <div class="carts__item" data-id="${this.id}">
    <div class="carts__item-image"><img src="${this.img}" alt="img"></div>
    <div class="carts__item-information">
        <div class="carts__heading-wrapper">
            <h2 class="carts__heading">mango people <span class="carts__heading-subtitle">${this.title}</span></h2>
            <button class="carts__button-close" type="button"><img src="img/button-close.svg" alt="close" width="18" height="18"></button>
        </div>
        <div class="carts__list-wrapper">
            <ul class="carts__list">
                <li class="carts__list-item">Price: <span class="carts__list-subtitle">${this.price}</span></li>
                <li class="carts__list-item">Color: Red</li>
                <li class="carts__list-item">Size: Xl</li>
                <li class="carts__list-item">Quantity: <input class="carts__list-input" type="text" size="1"></li>
            </ul>
        </div>
    </div>
</div>`
    }
}

let list = new ProductsList();
list.render();
list.sumPrice();

// class Basket {
//     addProduct {

//     }
//     removeProduct {

//     }
//     changeProduct {

//     }
//     render() {

//     }
// }

// class ElemBasket {
//     render() {

//     }
// }