const dummy = document.querySelector('.dummy')
const navbar = document.querySelector('.navbar')
const navcontents = document.querySelector('.navcontents')
const nav = document.querySelector('.nav')
const logo = document.querySelector('.logo')
const logoscrolled = document.querySelector('.logo-scrolled')
const box = document.querySelectorAll('.box')
const box_hidden = document.querySelectorAll('.box-hidden')
const faders = document.querySelectorAll('.slide-in');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


const container = document.querySelector('.main')

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-60px 0px 0px 0px"
};

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")

    navbar.classList.add("navbar-scrolled");
    navbar.classList.remove("navbar");

    nav.classList.add("nav-scrolled");
    nav.classList.remove("nav");

    navcontents.classList.add("navcontents-scrolled");
    navcontents.classList.remove("navcontents");

    logo.classList.add("hide");
    logoscrolled.classList.remove("hide");
})

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


window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var box2 = document.querySelector('.box2');
    var box3 = document.querySelector('.box3');
    box2.style.transform = 'translateX(' + (-scrollPosition * 0.7) + 'px)';
    box3.style.transform = 'translateX(' + (-scrollPosition * 0.7) + 'px)';
});


var previousScrollPosition = window.scrollY;




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




const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})







