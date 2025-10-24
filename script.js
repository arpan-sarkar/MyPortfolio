// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation and submission (basic)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        // In a real app, send data to a server or email service like EmailJS
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

window.addEventListener("scroll", () => {
  const overlay = document.getElementById("overlay");
  const scrollY = window.scrollY;
  const opacity = Math.min(0.3 + scrollY / 600, 0.7);
  overlay.style.background = `rgba(0, 0, 0, ${opacity})`;
});
