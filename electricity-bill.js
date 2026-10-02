let units = 150;
let bill;

if (units <= 100) {
  bill = units * 5;
} else {
  bill = 100 * 5 + (units - 100) * 7;
}

console.log("Electricity bill:", bill);
// Electricity bill: 850
