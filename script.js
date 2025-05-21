// Optional: Simple form alert
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Welcome to Sanika's portfolio!");
  alert("Thanks for your message, Sanika will get back to you soon!");
  this.reset();
});
