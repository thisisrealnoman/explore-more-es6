class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sleep(){
        console.log(`sleeping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const kismotAli = new Person("kismot ali", 23);
console.log(kismotAli);
kismotAli.sleep();

const bashmotAli = new Person("bashmot ali", 33);
console.log(bashmotAli);
bashmotAli.activity();


// bejal
const lazy = kismotAli.sleep;
lazy();