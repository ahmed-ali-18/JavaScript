let age = 20;
let ticketPrice;

if (age < 12) {
  ticketPrice = 100;
} else if (age >= 60) {
  ticketPrice = 120;
} else {
  ticketPrice = 200;
}

console.log("Ticket price:", ticketPrice);
// Ticket price: 200
