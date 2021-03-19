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

console.log(person3)

function parseObject(){
    // Loop through the keys of person3
    for (let i = 0; i < Object.keys(person3).length; i++){
        // If value at key[i] is an array
        if (Array.isArray(Object.values(person3)[i])){
            // Loop through the array
            for (let j = 0; j < Object.values(person3)[i].length; j++){
                // if the value of array[j] is an object
                if(typeof(Object.values(person3)[i][j]) === 'object'){
                    // loop through the keys of person3[i][j]
                    for(let k=0; k < Object.keys(Object.values(person3)[i][j]).length; k++){
                        // log the values at index k of person3[i][j]
                        console.log(Object.values(Object.values(person3)[i][j])[k])
                    }
                // if not an object
                }else{
                    // log value at person3[i][j]
                    console.log(Object.values(person3)[i][j])
                }
            }
        // if not an array
        } else {
            // log value at person3[i]
            console.log(Object.values(person3)[i])
        }
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
        console.log(`Name: ${this.name} \nAge: ${this.age}`)
    }
    // Create another arrow function for the addAge method that takes a single parameter
    this.increaseAge = () => {
        this.age += ageIncrease
        return this.age
    }
    this.closeAge = (() =>{
        return ()=>{return this.age++}
    })()
    // Adding to the age
}

person1 = new Person('Josh',42);
person2 = new Person('Brian',27);

person1.printInfo();
person2.printInfo();

person2.increaseAge(3);
person2.printInfo();


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

isStringGreater(_a).then((result) => {
    console.log('Large', result)
}).catch((error) => {
    console.log('Small', error)
})
