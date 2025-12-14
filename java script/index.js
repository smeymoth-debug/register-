<<<<<<< HEAD
// Button click event
document.getElementById("clickMeBtn").addEventListener("click", () => {
  document.getElementById("message").innerText = "You clicked the button! 🎉";
});

// Form submission event
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page refresh
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const messageInput = document.getElementById("messageInput").value;

  alert(`Thank you ${name}! Your message has been sent.`);
  this.reset();
});
=======
// Button click event
document.getElementById("clickMeBtn").addEventListener("click", () => {
  document.getElementById("message").innerText = "You clicked the button! 🎉";
});

// Form submission event
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page refresh
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const messageInput = document.getElementById("messageInput").value;

  alert(`Thank you ${name}! Your message has been sent.`);
  this.reset();
});
>>>>>>> 9aab2601685e2f42bf68582089439645cdab4bcc
