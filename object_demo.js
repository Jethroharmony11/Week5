//
let x = 123 //initial
x = 999 //replace
x = 777 //repllace again
console.log(x)

let animail = {
    strenght: 18,
    intelligence: 12,
    wisdom: 8,
    name: "Bianca",
    speak: () => console.log("Meow") 
}
// //ERROR if const
// animal ={ //replace whole object
//     trenght: 18, 
//     intelligence: 12,
//     wisdom: 8,
//     name: "Bianca",
//     speak: () => console.log("Meow") 
//}

animal.name = "Dandy",
warior.kind = "Dog",
animal.speak = () => cosole.log("woof")

animal.name = "finneley",
warior.kind = "cat",
animal.speak = () => cosole.log("purr")


console.log( animal.name)
console.log( animal.intelligence)
console.log(animal.kind)

animal.speak()

    // console.log( animal["name"])
    //console.log(animal["intelligence"])


console.log( warior["name"])
console.log( warior["intelligence"])