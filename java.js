const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

//Bidding Portion of the Code
const bidButtons = document.querySelectorAll(".bidding button");

bidButtons.forEach(button => {
  button.addEventListener("click", function() {
    const productElement = button.closest(".products");
    const currentBidElement = productElement.querySelector(".bidding p:first-child");
    const newBidInput = productElement.querySelector(".bidding input[type='number']");
    const newBid = parseFloat(newBidInput.value);
    const highestBidderElement = productElement.querySelector(".bidding .highest-bidder");

    // Validation
    if (isNaN(newBid) || newBid <= 0) {
      alert("Please enter a valid bid amount greater than zero.");
      return;
    }

    // Update current bid
    const currentBid = parseFloat(currentBidElement.textContent.split(": $")[1]);
    if (newBid > currentBid) {
      // Update bid (replace with backend logic)
      currentBidElement.textContent = `Current Bid: $${newBid}`;

      // Get user's name and phone number
      const bidderName = prompt("Congratulations! You're the highest bidder! Please enter your name:");
      const bidderPhone = prompt("Please enter your phone number for contact (numbers only):");

      // Validate phone number
      if (isNaN(bidderPhone) || bidderPhone.length !== 10) {
        alert("Invalid phone number. Please enter a 10-digit phone number.");
        return;
      }

      // Update highest bidder with name and formatted phone number
      highestBidderElement.textContent = `Highest Bidder: ${bidderName} - ${bidderPhone.slice(0, 3)}-${bidderPhone.slice(3, 6)}-${bidderPhone.slice(6)}`;

      // Clear bid input
      newBidInput.value = "";
    } else {
      alert("Bid must be higher than the current bid.");
    }
  });
});

// Styling for the highest bidder element 
const highestBidderElements = document.querySelectorAll(".bidding .highest-bidder");
highestBidderElements.forEach(element => {
  element.style.fontStyle = "italic"; 
});


