// Function Definition
function calculateBill(billAmount, taxRate = 0.085, tipRate = 0.15) {
  // this is the function body
  console.log("running calculateBill");
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function Call. Or **Run**
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Wes');
// console.log(greeting);

// const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = "Kiki") {
  return `HEY ${name.toUpperCase()}`;
}

// console.log(yell(doctorize("ryan")));

const pizza = calculateBill(24, undefined, 0.15);
console.log(pizza);

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
