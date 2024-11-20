// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typing effect for greeting text
const textElement = document.getElementById('greet');
const message = "Hello!";
let index = 0;

function typeText() {
  if (index < message.length) {
    textElement.textContent += message[index];
    index++;
    setTimeout(typeText, 200); // Adjust the delay for typing speed
  } else {
    setTimeout(() => {
      textElement.textContent = '';  // Clear the text
      index = 0;                     // Reset index
      typeText();                     // Start typing again
    }, 1000); // Delay before resetting and typing again
  }
}

typeText();

// Function to display skills one by one

