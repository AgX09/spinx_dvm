const dummy = document.querySelector('.dummy')
const navbar = document.querySelector('.navbar')
const navcontents = document.querySelector('.navcontents')
const nav = document.querySelector('.nav')
const logo = document.querySelector('.logo')
const logoscrolled = document.querySelector('.logo-scrolled')
const box = document.querySelectorAll('.box')
const box_hidden = document.querySelectorAll('.box-hidden')

const container = document.querySelector('.main')

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-60px 0px 0px 0px"
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        console.log(entry);

        if (!entry.isIntersecting) {
            navbar.classList.add("navbar-scrolled");
            navbar.classList.remove("navbar");

            nav.classList.add("nav-scrolled");
            nav.classList.remove("nav");

            navcontents.classList.add("navcontents-scrolled");
            navcontents.classList.remove("navcontents");

            logo.classList.add("hide");
            logoscrolled.classList.remove("hide");
        }
        else {
            navbar.classList.remove("navbar-scrolled");
            navbar.classList.add("navbar");

            nav.classList.remove("nav-scrolled");
            nav.classList.add("nav");

            navcontents.classList.remove("navcontents-scrolled");
            navcontents.classList.add("navcontents");

            logo.classList.remove("hide");
            logoscrolled.classList.add("hide");
        }
    })
}, options);

observer.observe(dummy);

window.addEventListener('scroll', function () {
    var img1 = document.querySelector('.img-scroll1');
    var img2 = document.querySelector('.img-scroll2');
    var img3 = document.querySelector('.img-scroll3');
    var scrollPosition = window.pageYOffset;
    var translateY = -scrollPosition * 0.7;
    img1.style.transform = 'translate(-50%, ' + translateY + 'px)';
    img2.style.transform = 'translate(-50%, ' + translateY + 'px)';
    img3.style.transform = 'translate(-50%, ' + translateY + 'px)';
});

const iconStrip = document.querySelector('.slide-right');
const iconContainer = document.querySelector('.box2');
let scrollPosition = 0;

function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollDelta = scrollY - scrollPosition;
    scrollPosition = scrollY - 100;

    iconContainer.style.transform = `translateX(${scrollDelta}px)`;
}

window.addEventListener('DOMContentLoaded', () => {
    const viewportWidth = document.documentElement.clientWidth;
    const iconStripWidth = iconStrip.offsetWidth;
    const initialTranslateX = (viewportWidth - iconStripWidth) / 2;
    iconContainer.style.transform = `translateX(${initialTranslateX}px)`;
});

window.addEventListener('scroll', handleScroll);



document.addEventListener('DOMContentLoaded', function () {
    var hiddenBoxes = document.getElementsByClassName('box-h');
    var boxes = document.getElementsByClassName('box');

    hideAllBoxes();
    boxes[0].style.display = 'block';
    hiddenBoxes[0].style.display = 'none';



    Array.from(hiddenBoxes).forEach(function (hiddenBox) {
        hiddenBox.addEventListener('click', function () {
            hideAllBoxes();
            this.style.display = 'none';
            this.nextElementSibling.style.display = 'block';
            showAllHiddenBoxes(this);
        });
    });

    // Add click event listeners to box elements
    Array.from(boxes).forEach(function (box) {
        box.addEventListener('click', function () {
            this.style.display = 'none';
            this.previousElementSibling.style.display = 'flex';
        });
    });

    function hideAllBoxes() {
        Array.from(boxes).forEach(function (box) {
            box.style.display = 'none';
        });
    }

    function showAllHiddenBoxes(excludeBox) {
        Array.from(hiddenBoxes).forEach(function (hiddenBox) {
            if (hiddenBox !== excludeBox) {
                hiddenBox.style.display = 'flex';
            }
        });
    }
});



const elements = document.querySelectorAll('.fade-in-element');

const options2 = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
};

const observer2 = new IntersectionObserver((entries, observer2) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
            observer2.unobserve(entry.target);
        } else {
            entry.target.classList.remove('slide-in');
        }
    });
}, options);

elements.forEach(element => {
    observer2.observe(element);
});
