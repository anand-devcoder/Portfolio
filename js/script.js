/*========================================toggle icon navbar========================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*========================================scroll sections active link========================================*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        //console.log(id);
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                let currentLink = document.querySelector('header nav a[href*=' + id + ']');
                if (currentLink) currentLink.classList.add('active');
            });
        }
    });
     /*========================================sticky navbar========================================*/
     let header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrolly > 100);
     /*========================================remove toggle icon and navbar when click navbar link (scroll)========================================*/
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
};

/*========================================scroll reveal========================================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/*========================================portfolio filter========================================*/
const form = document.getElementById('contactForm');
const popup = document.getElementById('popupMessage');
const popupIcon = document.getElementById('popupIcon');
const popupText = document.getElementById('popupText');

function showPopup(message, isError = false) {
    popupText.textContent = message;
    
    if (isError) {
        popupIcon.textContent = '❌';
        popup.classList.add('error');
    } else {
        popupIcon.textContent = '✅';
        popup.classList.remove('error');
    }

    popup.style.display = 'flex';
    
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000); // Auto-hide after 3 seconds
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            showPopup('Message sent successfully!');
            form.reset();
        } else {
            showPopup('Failed to send message.', true);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showPopup('There was an error sending your message.', true);
    });
});


