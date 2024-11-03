// data access
const data = [{id: 1, name: "neel", address: "dhaka"}];
console.log(data[0].address);



// ex.2
const products = {
    count: 5000,
    data: [
        {id: 1, name: "Lenovo Laptop", price: 65000},
        {id: 2, name: "Macbook air", price: 265000},
        {id: 3, name: "Thinkpad", price: 50000},
        {id: 4, name: "Asus III", price: 200000},
    ],
}
// second product price
console.log(products.data[1].price);



// ex-3

const user = {
    id: 5001,
    name: "Neel John",
    address: {
        street: {
            first: "KochuKhet, R: 15/20",
            second: "ditiogoli, purandhaka",
            third: "komolabag, area51"
        },
        city: "Dhaka",

    }
}

// find the second street address 
console.log(user.address.street.second);


// optional chaining
const user2 = {
    id: 5002,
    name: "Jon Kabir",
    address:{
        city: "Chittagong",
        country: "bangladesh"
    }
}
// option chain used - thats why they didn't give an error
console.log(user2.address.street?.second);