// Function Declaration
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anonymous Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

/* eslint-disable */
const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression

(function(age) {
  return `You are cool and age ${age}`;
})(10);

// Methods!!!
const coolObject = {
  name: "Mary Poppins",
  // Method!
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return "Hey Kiki";
  },
  // Short hand Method
  yellHi() {
    console.log("HEY KIKIIII");
  },
  // Arrow function
  whisperHi: () => {
    console.log("hii kiki im a mouse");
  },
};

// Callback Functions
// Click Callback
const button = document.querySelector(".clickMe");

function handleClick() {
  console.log("Great Clicking!!");
}

button.addEventListener("click", function() {
  console.log("Nice Job!!!");
});

// Timer Callback
setTimeout(() => {
  console.log("DONE! Time to eat!");
}, 2000);
