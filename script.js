
// Mobile navigation
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
}

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(element => {
  observer.observe(element);
});

// Automatic copyright year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Contact form
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("New Business Enquiry: " + service);

    const body = encodeURIComponent(
      "Name: " + name +
      "\nEmail: " + email +
      "\nService: " + service +
      "\nMessage: " + message
    );

    window.location.href =
      "mailto:YOUR_EMAIL@gmail.com?subject=" + subject + "&body=" + body;
  });
}
