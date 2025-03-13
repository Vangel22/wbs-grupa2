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
