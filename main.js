// mettre dans une constante (là des objets dans un tableau) les informations des produits

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

//et les linker à "products" dans le HTML

const TBODY_PRODUCTS = document.getElementById ('products')

console.log (products);

// pour chaque produit, on va faire une boucle qui va aller observer les éléments du tableau pour chaque produit

products.forEach((product, index) => {

// créer des tr qui vont contenir ces éléments de tableau
const TR = document.createElement('tr');

// créer une td pour contenir l'image du produit 
const TD_PRODUCT = document.createElement('td');
const IMG_PRODUCT = document.createElement('img'); // & insérer l'image
IMG_PRODUCT.src = product.img;
IMG_PRODUCT.alt = "image de" + products.name;
IMG_PRODUCT.style.width = '100px';

// .apprend= "inserts a set of Node objects or strings after the last child of the document"
TD_PRODUCT.append(IMG_PRODUCT)

// créer une td pour contenir le nom du produit 
const TD_NAME = document.createElement('td');
TD_NAME.textContent = product.name; // & insérer le nom


// créer une td pour contenir le prix du produit
const TD_PRICE = document.createElement('td');
// créer un span qui va contenir le prix
const SPAN_PRICE = document.createElement('span')
// y insérer le prix
SPAN_PRICE.textContent = product.price + ' €';
TD_PRICE.append(SPAN_PRICE)

//si le prix est en discount "true"
if (product.discount){
    SPAN_PRICE.classList.add('price-before'); // alors on applique la class "price-before" du CSS --> soit le prix avant est barré

    //créer un nouveau span qui contient le nouveau prix
    const SPAN_NEW_PRICE = document.createElement('span');
    SPAN_NEW_PRICE.textContent = product.priceDiscount + ' €';

    TD_PRICE.append(SPAN_NEW_PRICE);

}

// créer une td pour contenir les intolérences
const TD_INTOLERENCE = document.createElement('td');
TD_INTOLERENCE.textContent = product.intolerence;

// pusher toute les infos dans le tableau
TR.append(TD_PRODUCT, TD_NAME, TD_PRICE, TD_INTOLERENCE);
TBODY_PRODUCTS.append(TR);
})

