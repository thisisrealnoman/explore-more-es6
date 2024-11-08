// print the secondary school location of sophia

let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                [
                    {school_name: "ABC Primary School"},
                    {location: "Peters Burg"}
                ]
            },
            {
                secondary:
                [
                    {school_name: "ABC Secondary School"},
                    {location: "St Lorence"}
                ]
            }
        ]
    }
}

console.log(data.Sophia.study[1].secondary[1].location);





// task 2 (print: Petersburg , herry)

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address:{
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },

    3333:{
        name: "Herry",
        // "name": "Herry",
        section: "D",
        class: "X",
        address:{
            "building no": 85,
            "street": "DC ROAD",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}

console.log(students["2222"].address["city"]);
// console.log(students["3333"]["name"]);
console.log(students["3333"].name);




// task - 3 
// (print : habluder adda)
// print : beginner

let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "Habluder Addakhana",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "Gabluder Adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            },
        ]
}