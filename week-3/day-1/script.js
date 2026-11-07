// Day 1 — Variables, arrays, objects, functions
// Read each Example, then write YOUR truck's version under the TODOs.
// See the results in the console (right-click the page → Inspect → Console).

// ---------- Step 1: Variables ----------
// Example:
// Create 3 variables using "let" or "const"
const truckName = "El Burro Veloz"; // string (text)
const yearsOpen = 1; // number
const isOpen = true; // boolean (true or false)

// Log variables
console.log(truckName, yearsOpen, isOpen);
console.log(typeof truckName, typeof yearsOpen, typeof isOpen);
// typeof tells you the type

// TODO: Make 3 variables for YOUR truck: a name, a number, and a true/false.
let schedule = "Hours of Operation";
let daysOpen = 6;
let twentyFourHours = false;

// TODO: console.log them, and log the typeof each one.
console.log(schedule, daysOpen, twentyFourHours);
console.log(typeof schedule, typeof daysOpen, typeof twentyFourHours);

// ---------- Step 2: An array (a list) ----------
// Example:
// const exampleMenu = ["taco", "burrito", "nachos"];
// console.log(exampleMenu[0]); // first item: index 0
// console.log(exampleMenu.length); // how many items

// TODO: Make an array of 3 or more things YOUR truck sells.
const elMenu = ["burritos", "taquitos", "dip"];

// TODO: Log the first item, the last item, and how many items there are.
console.log(elMenu[0]);
console.log(elMenu[elMenu.length - 1]);
console.log(elMenu.length);
// ---------- Step 3: An object (one thing with details) ----------
// Example:
// const exampleItem = { name: "taco", price: 4.5, spicy: true };
// console.log(exampleItem.name); // dot notation
// console.log(exampleItem["price"]); // bracket notation

// TODO: Make an object for one of YOUR menu items (name, price, spicy).
let item = {
  name: "ChoriQueso",
  price: 6.75,
  spicy: true,
};

// TODO: Log one property with dot notation and one with bracket notation.
console.log(item.name);
console.log(item["price"]);
// ---------- Step 4: A function ----------
// Example:
function addTip(price, tip) {
  return price + tip;
}
console.log(addTip(10, 2)); // 12

// TODO: Write a function orderTotal(price, quantity) that RETURNS price * quantity.
function orderTotal(price, quantity) {
  return price * quantity;
}

// TODO: Before you run it, guess what orderTotal(4.5, 3) gives. Then log it.
console.log(orderTotal(6.75, 2)); // my guess is 13.5 i used my own price and quantity
// ---------- Extra practice (if you finish early) ----------
// 1. Change your menu item's price AFTER you made the object, then log it again.
console.log(item.price); // 6.75
item.price = 7.5; // change
console.log(item["price"]);

// 2. Write isCheap(price): return "cheap!" if price is under 5, otherwise "fancy".
function isCheap(price) {
  if (price < 5) {
    return "cheap!";
  } else {
    return "fancy";
  }
}
