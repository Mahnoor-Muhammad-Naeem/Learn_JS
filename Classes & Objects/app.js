// PROTOTYPES IN JS:
// A JAVASCRIPT OBJECT IS AN ENTITY HAVING STATE AND BEHAVIOR (PROPERTIES AND METHOD)
// JS OBJECTS HAVE A SPECIAL PROPERTY CALLED PROTOTYPE.    
// WE CAN SET PROTOTYPE USING _ _ PROTO _ _  
// IF OBJECT & PROTOTYPE HAVE SAME METHOD, OBJECT'S METHOD WILL BE USED.

// const student = {
//     fullName: "mahnoor",
//     marks: 94.4,
//     printMarks: function () {
//         console.log("marks = ", this.marks);
//     },
// };

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// write in console:
// employee.calcTax()
// output: tax rate is 10%


// const employee = {
//     calcTax1() {
//         console.log("tax rate is 10%");
//     },
// };

// const mahnoor = {
//     salary: 50000,
// };

// const mahnoor2 = {
//     salary: 50000,
// };

// const mahnoor3 = {
//     salary: 50000,
// };

// const mahnoor4 = {
//     salary: 50000,
// };

// const mahnoor5 = {
//     salary: 50000,
// };


// mahnoor.__proto__ = employee;

// write in console for output:
// mahnoor, output
// mahnoor.calcTax(), output


// for object:
const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const mahnoor = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};

mahnoor.__proto__ = employee;

// CLASSES IN JS:
// CLASS IS A PROGRAM-CODE TEMPLATE FOR CREATING OBJECTS. 
// THOSE OBJECTS WILL HAVE SOME STATE (VARIABLES) & SOME BEHAVIOUR (FUNCTIONS) INSIDE IT. 

// class MyClass {
//     constructor() { ... }
//     myMethod() { ... }
// }

// let myObj = new MyClass();

// class ToyotaCar {
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar();

// for console: typeof fortuner
// for console: fortuner.start()

// for variable:
class ToyotaCar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    // setBrand(brand) {
    //     // this.brandName = brand;
    //     this.brand = brand; // we can use brand = brand
    // }
}

let fortuner = new ToyotaCar("fortuner", 10); //constructor
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12); //constructor
console.log(lexus);

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus");

// for console: lexus

// INHERITANCE IN JS:
// INHERITANCE IS PASSING DOWN PROPERTIES & METHODS FROM PARENT CLASS TO CHILD CLASS.
// class Parent {

// }  

// class Child extends Parent {

// }

// IF CHILD & PARENT HAVE SAME METHOD, CHILD'S METHOD WILL BE USED. [METHOD OVERRIDING]

class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {}

let obj = new Child();

// for console: obj -> work, obj.hello() -> work, obj.abc() -> not work.

// class Person {
//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }

//     work() {
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person {
//     work() {
//         console.log("solve problems, build something");
//     }
// }

// class Doctor extends Person {
//     work() {
//         console.log("treat patients");
//     }
// }

// let mahnoor = new Engineer();


//for species:
class Person {
    constructor() {
        this.species = "homo sapiens"
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing");
    }
}

class Engineer extends Person {
    work() {
        console.log("solve problems, build something");
    }
}

class Doctor extends Person {
    work() {
        console.log("treat patients");
    }
}

let mahnoor = new Engineer();

// for console: let p1 = new Person();
// p1
// let e1 = new Engineer();
// e1

// SUPER KEYWORD:
// THE SUPER KEYWORD IS USED TO CALL THE CONSTRUCTOR OF ITS PARENT CLASS TO ACCESS THE PARENT'S PROPERTIES AND METHODS.
// super( args ) // calls Parent's constructor
// super.parentMethod( args )


class Person {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
}

class Engineer extends Person {
    constructor(name) {
        super(name); // to invoke parent class constructor
    }
    work() {
        super.eat();
        console.log("solve problems, build something");
    }
}

let engObj = new Engineer("mahnoor");

// for console: engObj 

// LET'S PRACTICE:
// Q: YOU ARE CREATING A WEBSITE FOR YOUR COLLEGE. CREATE A CLASS USER WITH 2 PROPERTIES, NAME & EMAIL. IT ALSO HAS A METHOD CALLED viewData() THAT ALLOWS USER TO VIEW WEBSITE DATA.

// let DATA = "secret information";

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("data = ", DATA);
//     }
// }

// let student1 = new User("mahnoor", "mahnoor@gmail.com");
// let student2 = new User("naeem", "naeem@gmail.com");

// let teacher1 = new User("najia", "najia@college.com");


// CREATE A NEW CLASS CALLED ADMIN WHICH INHERITS FROM USER. ADDA N EW METHOD CALED editData to ADMIN THAT ALLOWS IT TO EDIT WEBSITE DATA.
let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("mahnoor", "mahnoor@gmail.com");
let student2 = new User("naeem", "naeem@gmail.com");

let teacher1 = new User("najia", "najia@college.com");

let admin1 = new Admin("admin", "admin@college.com");

// for console: admin1, DATA

// ERROR HANDLING:
// try-catch
//     try {
//         ... normal code   
//     } catch ( err ) { //err is error object
//         ... handling error
//     }

let a = 5;
let b = 10;

console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a + b);

try {
    console.log("a+b = ", a + c); // error
} catch (err) {
    console.log(err);
}

console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
