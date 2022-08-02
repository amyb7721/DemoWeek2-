// // create an Object

let person = {
    firstName: 'Amy',
    lastName: 'Bernard',
    age: 26,
    favorites: {
        movies: ['Purple Heart', 'Scream', 'Halloween'],      
        books: ['Ends with Us', 'Harry Potter', '365 Days']
    }
}


//                             //  [] = array 
console.log(person.firstName, person['firstName'])
                           //  both ways does the same thing 

console.log(person.favorites.movies)
                           //  list all movies

console.log(person.favorites.movies[1])
//                          //  list a certain movie you have 




//                            //  desctrutre some of these properties

let {firstName, lastName} = person

console.log(firstName, lastName)
//                              //  Amy Bernard         do this so you can shorten your code 



//                              //  Destructive movies and books

let {movies, books} = person.favorites

console.log(movies, books)



//            //  renaming properties while destructing

let {firstName: fName, lastName: lName, favorites: favs} = person
console.log(fName, lName, favs)


               //  Doing loops

let person = {
    firstName: 'Amy',
    lastName: 'Bernard',
    age: 26,
    favorites: {
        movies: ['Purple Heart', 'Scream', 'Halloween'],      
        books: ['Ends with Us', 'Harry Potter', '365 Days']
    }
}


for(let i in person){
    console.log(`${person[i]}`)
}
 

            //   adding something to our object

person.eyeColor = 'blue'
console.log(person.eyeColor)


            //  deleting something from object 




delete person.age

console.log(person)           


                //  class

class Dog {
    constructor(name,breed,age){
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
}

let dog1 = new Dog('Spot', 'German Shepard', 2)

console.log(dog1.name, dog1.breed)

                    //  create bark method

class Dog {
    constructor(name,breed,age){
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    bark(){
        console.log(`Arf my name is ${this.name}, i am a ${this.breed}!`)
    }
    birthday(){
        this.age++
        console.log(`Happy birthday ${this.name} your ${this.age} years old`)
    }
}

let dog1 = new Dog('Spot', 'German Shepard', 2)

let {name, breed, age} = dog1

dog1.bark()
dog1.birthday()

             // creating a sub class

class Puppy extends Dog {
    constructor(name, breed, age, color){
        super(name, breed, age)

        this.color = color
    }

    boughtPuppy(){
        console.log(`Congrats your new puppy is name ${this.name} he is a ${this.breed}`)
    }
}

let puppy1 = new Puppy('Ivy', 'Corgi', 1, 'tan')

puppy1.birthday()
puppy1.boughtPuppy()
