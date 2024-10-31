// form-demo.js

// Toggle visibility based on the selected payment type
document.getElementById("paymentType").addEventListener("change", function () {
  const creditCardFields = document.getElementById("creditCardFields");
  const paypalFields = document.getElementById("paypalFields");

  // Hide both sections initially
  creditCardFields.classList.add("hide");
  paypalFields.classList.add("hide");

  // Remove required attributes from all fields
  document.getElementById("cardNumber").required = false;
  document.getElementById("expiry").required = false;
  document.getElementById("cvv").required = false;
  document.getElementById("PayPalUsername").required = false;

  // Show the correct fields based on the selected option
  if (this.value === "Credit Card" || this.value === "Debit Card") {
    creditCardFields.classList.remove("hide");
    document.getElementById("cardNumber").required = true;
    document.getElementById("expiry").required = true;
    document.getElementById("cvv").required = true;
  } else if (this.value === "PayPal") {
    paypalFields.classList.remove("hide");
    document.getElementById("PayPalUsername").required = true;
  }
});
