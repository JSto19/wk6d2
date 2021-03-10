//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFood(p3_obj){
    for (let i = 0; i < Object.values(person3).length; i++){
        console.log(Object.values(person3)[i])
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.name = name;
    this.age = age;
    // Use an arrow to create the printInfo method

    this.printInfo = () => {
        return `You're ${this.name} and you are ${this.age} years old`
    }
    // Create another arrow function for the addAge method that takes a single parameter
    this.age = () => {
        this.age = this.age + 1;
    }
    // Adding to the age 
    let new_person = new Person('Josh',42);

    
}

console.log(new_person.printInfo())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isStringGreater = (_a) => {
    return new Promise((resolve,reject) => {
        const newLocal = 0;
        let _a = newLocal;
        if(_a.toString() += a){
            resolve(true);
        } else {
            reject(false)
        }
    })
}

isStringGreater(-a).then((result) => {
    console.log('Big Word', result)
}).catch((error) => {
    console.log('Small Number', error)
})
