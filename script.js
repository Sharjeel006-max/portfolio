// Header hide/show on scroll
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = '-100px'; // Hide header when scrolling down
    } else {
        header.style.top = '0'; // Show header when scrolling up
    }

    lastScrollTop = scrollTop;
});

// Add scroll-based animation for About Me and Education boxes
const boxes = document.querySelectorAll('.section-box');

window.addEventListener('scroll', function() {
    boxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (boxPosition < windowHeight - 100) {
            box.classList.add('box-visible'); // Show box when it comes into view
        }
    });
});

// Mobile navbar toggle
let menubar = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
