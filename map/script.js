// Simple array of fruits
const fruits = ["mango", "orange", "apple", "kiwi", "pear"];

// Array of objects
const pets = [
  {
    id: 1,
    name: "Hulk",
    race: "Leonberger",
    species: "Canis familiaris",
    color: "brown",
    age: 3,
    skills: ["guard", "eat"],
  },
  {
    id: 2,
    name: "Scratch",
    race: "idk",
    species: "Lizard",
    color: "light sea green",
    age: 1,
    skills: ["swim", "fly"],
  },
  {
    id: 3,
    name: "Nemo",
    race: "Gold Fish",
    species: "Fish?",
    color: "red",
    age: 1,
    skills: ["swim"],
  },
];

// Simple loop
// For each single fruits => console.log(the specific fruit)
// console.log("For");
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i}: ${fruits[i]}`);
// }

// With map it's easy
// For each fruit => console.log(the specific fruit)
// console.log("Map");
// fruits.map((fruit, i) => console.log(`${i}: ${fruit}`));

// Why using map? Because it returns our array
// const result = fruits.map((fruit, i) => `${i}: ${fruit}`);
// console.log(result);

// pets.map((pet) => console.log(`${pet.name} is ${pet.color}`));

// const petsSkills = pets.map((pet) => pet.name);
// console.log(petsSkills);

// HOW IT WORKS?
// arr is our array
// fn is a function, a callback one
function ourMap(arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }

  return result;
}

// ourMap(fruits, (fruit) => console.log(fruit));

// PROTOTYPE version
// We're using 'this'!
// Also we can use the other two optional arguments
// Whoops!
Array.prototype.ourMap = function (fn) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i, this));
  }

  return result;
};

fruits.ourMap((fruit, i, array) =>
  console.log(`${fruit} is inside ${array} at position ${i}`)
);
