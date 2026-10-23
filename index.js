const productName1 = "Rice (1kg)";
const ricePrice = 2500;
const riceAvailableStock = 10;

const productName2 = "Milk";
const milkPrice = 1800;
const milkAvailableStock = 15;

const productName3 = "Bread";
const breadPrice = 1200;
const breadAvailableStock = 8;

let customerName = prompt("What is your Name?");
let riceQuantity = prompt("How many bag/bags of rice would you want to buy?");
let milkQuantity = prompt("How many bottle/bottles of milk would you want to buy?");
let breadQuantity = prompt("How many loaf/loaves of bread would you want to buy?");

if (customerName === null || riceQuantity === null || milkQuantity === null || breadQuantity === null) {
    alert(`Provide the details before we can be able to proceed`);

} else {
customerName = customerName.trim().toLowerCase();

let nameValid;

if (customerName === "") {
    alert(`Please Enter Your Name.`);
    nameValid = false;

} else {

    nameValid = true;

}

let riceValid;

if (riceQuantity.trim() === "") {
    alert(`Please enter rice quantity.`);
    riceValid = false;
     
} else {
    riceQuantity = Number(riceQuantity);


if (Number.isNaN(riceQuantity)) {
    alert(`Enter the rice quantity you want to buy in digits/Numbers.`);
    riceValid = false;

} else if (!Number.isInteger(riceQuantity)) {
    alert(`Enter the quantity to be in a whole number form.`);
    riceValid = false;

} else if (riceQuantity < 0) {
    alert(`The quantity you inputted shouldn't be lesser than 0`);
    riceValid = false;

} else if (riceQuantity > riceAvailableStock) {
    alert(`We don't have suffficient rice availablity stock to proceed, reduce your quantity to 10 before we can proceed.`);
    riceValid = false;
} else {

    riceValid = true;
}

}

let milkValid;

if (milkQuantity.trim() === "") {
    alert(`Please Enter milk quantity`);
    milkValid = false;

} else {

    milkQuantity = Number(milkQuantity);


if (Number.isNaN(milkQuantity)) {
    alert(`Enter the milk quantity you want to buy in digits/Numbers.`);
    milkValid = false;

} else if (!Number.isInteger(milkQuantity)) {
    alert(`Enter the quantity to be in a whole number form.`);
    milkValid = false;

} else if (milkQuantity < 0) {
    alert(`The quantity you inputted shouldn't be lesser than 0`);
    milkValid = false;

} else if (milkQuantity > milkAvailableStock) {
    alert(`We don't have suffficient milk availablity stock to proceed, reduce your quantity to 15 before we can proceed.`);
    milkValid = false;

} else {

    milkValid = true;
}

}

let breadValid;

if (breadQuantity.trim() === "") {
    alert(`Please Enter bread quantity`);
    breadValid = false;

} else {
    
    breadQuantity = Number(breadQuantity);


if (Number.isNaN(breadQuantity)) {
    alert(`Enter the bread quantity you want to buy in digits/Numbers.`);
    breadValid = false;

} else if (!Number.isInteger(breadQuantity)) {
    alert(`Enter the quantity to be in a whole number form.`);
    breadValid = false;

} else if (breadQuantity < 0) {
    alert(`The quantity you inputted shouldn't be lesser than 0`);
    breadValid = false;

} else if (breadQuantity > breadAvailableStock) {
    alert(`We don't have suffficient bread availablity stock to proceed, reduce your quantity to 8 before we can proceed.`);
    breadValid = false;

} else {

    breadValid = true;

}

}

if (nameValid && riceValid && milkValid && breadValid) {

     if (riceQuantity === 0 && milkQuantity === 0 && breadQuantity === 0) {
        alert(`Your cart is empty. Please select at least one item.`);

    } else {
  alert(`Proceed to processing and checkout.`);

  let discount = 0;
let riceTotal = riceQuantity * ricePrice;
let milkTotal = milkQuantity * milkPrice;
let breadTotal = breadQuantity * breadPrice;

let subtotal = riceTotal + milkTotal + breadTotal;
  alert(`Your subtotal is ₦${subtotal}`);

  if (subtotal >= 10000) {
    discount = subtotal * 0.10;

}

let finalTotal = subtotal - discount;
alert(`Discount: ₦${discount}`);
alert(`Final total: ₦${finalTotal}`);

let paymentMethod = prompt(
    "Choose payment method: cash, transfer, or card"
);

if (paymentMethod === null) {
    alert("Checkout cancelled.");

} else {
    paymentMethod = paymentMethod.trim().toLowerCase();

    switch (paymentMethod) {
        case "cash":
            let amountPaid = prompt(
    `Your total is ₦${finalTotal}. How much are you paying?`
);

if (amountPaid === null || amountPaid.trim() === "") {
    alert("Please enter the payment amount.");

} else {
    amountPaid = Number(amountPaid);

    if (Number.isNaN(amountPaid) || amountPaid < 0) {
        alert("Enter a valid payment amount.");

    } else if (amountPaid < finalTotal) {
        alert(`Insufficient payment. You still owe ₦${finalTotal - amountPaid}.`);

    } else {
        let change = amountPaid - finalTotal;
        alert(`Payment accepted! Your change is ₦${change}.`);
    }
}
            break;

        case "transfer":
            alert("Bank transfer selected.");
            break;

        case "card":
            alert("Card payment selected.");
            break;

        default:
            alert("Invalid payment method. Choose cash, transfer, or card.");
    }
}

} 

} else {
    alert(`Correct the invalid quantities and try again.`);

}

}