const products= [

    {
        img: 'https://eu.marcolini.com/fr/phototheque/pierremarcolini.com/750/large/01W000583A.jpg',
        name: 'Framboise Verveine',
        price: 10.5,
        intolerence: 'Vegan',
        discount: false,
        priceDiscount : 9.25
    },

    {
        img: 'https://eu.marcolini.com/fr/phototheque/pierremarcolini.com/750/large/01W000568A.jpg',
        name: 'Abricot Romarin',
        price: 10.5,
        intolerence: 'Vegan',
        discount: true,
        priceDiscount : 9.25
    },

    {
        img: 'https://eu.marcolini.com/fr/phototheque/pierremarcolini.com/750/large/01W000570A.jpg',
        name: 'Mangue Yuzu',
        price: 12.50,
        intolerence: 'Vegan',
        discount: false,
        priceDiscount : 10.25
    }
]



const TBODY_PRODUCTS = document.getElementById ('products')

console.log (products);

products.forEach((product, index) => {

const TR = document.createElement('tr');

const TD_PRODUCT = document.createElement('td');
const IMG_PRODUCT = document.createElement('img');
IMG_PRODUCT.src = product.img;
IMG_PRODUCT.alt = "image de" + products.name;
IMG_PRODUCT.style.width = '100px';


TD_PRODUCT.append(IMG_PRODUCT)


const TD_NAME = document.createElement('td');
TD_NAME.textContent = product.name;


const TD_PRICE = document.createElement('td');

const SPAN_PRICE = document.createElement('span')

SPAN_PRICE.textContent = product.price + ' €';
TD_PRICE.append(SPAN_PRICE)

if (product.discount){
    SPAN_PRICE.classList.add('price-before');

    const SPAN_NEW_PRICE = document.createElement('span');
    SPAN_NEW_PRICE.textContent = product.priceDiscount + ' €';

    TD_PRICE.append(SPAN_NEW_PRICE);

}

const TD_INTOLERENCE = document.createElement('td');
TD_INTOLERENCE.textContent = product.intolerence;

TR.append(TD_PRODUCT, TD_NAME, TD_PRICE, TD_INTOLERENCE);
TBODY_PRODUCTS.append(TR);
})



//todo créer un span dans lequel tu mets le price
//todo ajouter le span dans la TD_PRICE

//todo si le produit est en promo
// rajouter une classe sur le span pour que le prix soit barré
// créer un 2ème span avec le prixPromo + l'ajouter à la td


