// Initialize AOS (Animate On Scroll)
AOS.init({
duration: 1000,
easing: 'ease-out-back',
once: true,
delay: 50
});

// Initialize Feather Icons
feather.replace();

// Mobile menu toggle
document.querySelector('.mobile-menu-button').addEventListener('click', function() {
document.querySelector('.mobile-menu').classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
// Hide mobile menu on click
document.querySelector('.mobile-menu')?.classList.add('hidden');
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});

// Navigation scroll effects
window.addEventListener('scroll', function() {
const nav = document.querySelector('nav');
if (window.scrollY > 50) {
nav.classList.add('bg-opacity-95', 'backdrop-blur-sm', 'shadow-lg');
nav.classList.remove('bg-opacity-100');
} else {
nav.classList.remove('bg-opacity-95', 'backdrop-blur-sm', 'shadow-lg');
nav.classList.add('bg-opacity-100');
}
});

// Particles.js configuration - Green theme
particlesJS('particles-js', {
"particles": {
"number": {
"value": 60,
"density": {
"enable": true,
"value_area": 800
}
},
"color": {
"value": "#d1fae5"
},
"shape": {
"type": "circle"
},
"opacity": {
"value": 0.6,
"random": true,
"anim": {
"enable": true,
"speed": 1,
"opacity_min": 0.1,
"sync": false
}
},
"size": {
"value": 4,
"random": true,
"anim": {
"enable": true,
"speed": 2,
"size_min": 0.1,
"sync": false
}
},
"line_linked": {
"enable": true,
"distance": 150,
"color": "#e0f7e9",
"opacity": 0.4,
"width": 1
},
"move": {
"enable": true,
"speed": 3,
"direction": "none",
"random": true,
"straight": false,
"out_mode": "out",
"bounce": false
}
},
"interactivity": {
"detect_on": "canvas",
"events": {
"onhover": {
"enable": true,
"mode": "grab"
},
"onclick": {
"enable": true,
"mode": "push"
},
"resize": true
},
"modes": {
"grab": {
"distance": 200,
"line_linked": {
"opacity": 1
}
},
"push": {
"particles_nb": 4
}
}
}
});

// EmailJS Contact Form
const serviceID = "service_9jvx6ia";
const templateID = "template_1ac523n";

document.getElementById('contact-form').addEventListener('submit', function(e) {
e.preventDefault();
emailjs.sendForm(serviceID, templateID, this)
.then(function(response) {
console.log('SUCCESS!', response.status, response.text);
document.getElementById('status-message').innerText = "Message sent successfully!";
}, function(error) {
console.error('FAILED...', error);
document.getElementById('status-message').innerText = "Failed to send message. Please try again.";
});
});