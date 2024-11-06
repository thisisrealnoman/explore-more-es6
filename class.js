const products = [
    {id: 1, name: "Lenovo", price: 65000},
    {id: 2, name: "Hp", price: 75000},
    {id: 3, name: "ThinkPad", price: 45000},
    {id: 4, name: "MacBook", price: 165000},
]

// has some properties, method
class Product{
    country = "Bangladesh";

    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product("LG");
console.log(lenovo);
lenovo.speak("JavaScript");


// ex.2

class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(subject){
        console.log(`I love ${subject}`);
    }
}

const teacherDetails = new Teacher("Julfikar Iqbal", "Physics");
console.log(teacherDetails);
teacherDetails.lecture("physics");