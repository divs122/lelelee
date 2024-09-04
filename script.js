// Add event listener to the "Book Now" button
const bookNowButton = document.querySelector(".hero-text .button");
bookNowButton.addEventListener("click", () => {
  // Redirect to the booking page
  window.location.href = "booking.html";
});