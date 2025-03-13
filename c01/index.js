// var, const, let

var myName = "Marija"; // Function scope

// Block scope
const MAX_NUM = 10;
let hello = "Hello World";

function greetMe() {
  const testMe = "testMe";
  if (true) {
    var hello = "Test";
    let zdravo = "Zdravo";
    console.log(zdravo);
  }
  console.log(hello);
  console.log(testMe);
}

greetMe();

// function
const test = function () {};
const arrow = () => {};
// IIFE 1
(() => {})();
function calculate() {}
// IIFE 2
(function () {})();

// const sum = (a, b) => {
//   return a + b;
// };

const sum = (a, b) => a + b;

console.log(sum(4, 5));

// Require cars.js functions
const cars = require("./cars");
const { getCar, addCar, updateCar, removeCar } = require("./cars"); // so destrukturiranje na objekt
// cars.addCar;
const fs = require("fs");
const express = require("express");

const person = {
  name: "Vangel",
  age: 25,
};

const { name } = person; // destrukturiranje

const personAdditional = {
  name: "Andrej",
  city: "Strumica",
  profession: "Software Engineer",
};

const personMerged = {
  ...person,
  ...personAdditional,
  //   Isto kako so spread
  //   name: "Vangel",
  //   age: 25,
  //   name: "Andrej",
  //   city: "Strumica",
  //   profession: "Software Engineer",
};

console.log(personMerged);

const niza = [1, 2, 3, 4, 5];

// find - go vrakja prviot koj go zadovoluva uslovot
const findFirst = niza.find((el) => el % 2 == 0);
console.log("find", findFirst);

// map -> vrakja nova niza
const mapArray = niza.map((el) => {
  if (el % 2 === 0) {
    return el + 1;
  }
  return el;
});

const mapArrayTernary = niza.map((el) => (el % 2 === 0 ? el + 1 : el));

console.log("map", mapArray);
console.log("map ternary", mapArrayTernary);

// filter -> vrakja nova niza
const filterEvenNumbers = niza.filter((el) => el % 2 === 0);
console.log("filter", filterEvenNumbers);

// every -> vrakja true ili false vrednost ako site go ispolnuvaat uslovot
const everyElement = niza.every((el) => el > 0);

console.log("Every element is bigger than zero:", everyElement);
// some -> vrakja true ili false vrednost ako postoi barem eden sto go zadovoluva uslovot
const someElement = niza.some((el) => el % 2 === 0);
console.log("I have even number in the array:", someElement);

// reduce -> nova vrednost koja se skladira vo acc
const sumarnaNiza = niza.reduce((acc, curr) => (acc += curr), 0);
console.log(sumarnaNiza);

// Za da procitame read i write
const { read, write } = require("./read-write");

read("cars.json")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const newCar = {
  make: "Audi",
  model: "A7",
  year: 2025,
  color: "Black",
  mileage: 30000,
  price: 35000,
};

write("cars.json", newCar)
  .then((res) => console.log("Car added!"))
  .catch((err) => console.log(err));
