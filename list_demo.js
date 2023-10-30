// ARRAY AKA list/Vector prdered seriers of Values
pets = ["Biancan", "Finneley", "Dany",]
console.log(pets[2]) //DANY 2 from the beginning

let people = [
    {
        name: "Kevin",
        age: 56
},
{
    name: "Nina",
    age: 47
  }
];
  //ADD ONE MORE
  peoplel.push ({name: "Kay", age: 59})

  people[2].name = "Kate";//update the  last person
  people[0].name = "Kevy";//update the first person

// for(START, STOP, HOW)
for(let index = 0; index < people.length; idex++){
    console.log(people[index].name, people[index].age);
}