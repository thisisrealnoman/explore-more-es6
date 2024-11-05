const products = [
    {id: 1, name: "Lenovo", price: 65000},
    {id: 2, name: "Hp", price: 75000},
    {id: 3, name: "ThinkPad", price: 45000},
    {id: 4, name: "MacBook", price: 165000},
]



// map
const productNames = products.map(product => product.name);
// console.log(productNames);

const productPrices = products.map(product => product.price);
// console.log(productPrices);



// forEach
products.forEach(product => console.log(product.id));



// filter
const expensive = products.filter(p => p.price > 50000);
// console.log(expensive);


// find
const affordable = products.find(p => p.price < 50000);
console.log(affordable);


// reduce 
const totalPriceOfProducts = products.reduce((acum, current) => acum + current.price, 0)
console.log(totalPriceOfProducts);