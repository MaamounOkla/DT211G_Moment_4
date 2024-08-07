//Variabler

const nav = document.querySelector('nav');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav');
const images = document.querySelectorAll('img');

//Responsiv menu toggle 

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});



//animering för responsive nav slide up&down

//eventlyssnare när sidan laddas
document.addEventListener('DOMContentLoaded', function () {

    let lastScrollY = window.scrollY;

    // Scroll eventlyssnare
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            nav.classList.remove('slide-down');
            nav.classList.add('slide-up');
        } else {
            nav.classList.remove('slide-up');
            nav.classList.add('slide-down');
        }
        lastScrollY = window.scrollY;
    });

    // Meny eventlyssnare
    menuToggle.addEventListener('click', () => {
        if (navMenu.classList.contains('fade-in')) {
            navMenu.classList.remove('fade-in');
            navMenu.classList.add('fade-out');
            setTimeout(() => {
                //tid för att ta bort active-class 300ms (lika länge som animeringen)
                navMenu.classList.remove('active');
                navMenu.style.display = 'none';
            }, 300);

        } else {
            navMenu.classList.remove('fade-out');
            navMenu.classList.add('active');
            navMenu.style.display = 'flex';
            navMenu.classList.add('fade-in');
        }
    });


    // bild eventlyssnare
    let activeImage = null;

    images.forEach(img => {
      let isEnlarged = false;
  
      img.addEventListener('click', () => {
        if (isEnlarged) {
          img.classList.remove('enlarge');
          img.classList.add('reduce');
          
          img.addEventListener('animationend', function handler() {
            img.classList.remove('reduce');
            img.style.position = 'static';
            img.removeEventListener('animationend', handler);
            activeImage = null;
          });
          
        } else {
          if (activeImage) {
            activeImage.classList.remove('enlarge');
            activeImage.classList.add('reduce');
  
            activeImage.addEventListener('animationend', function handler() {
              activeImage.classList.remove('reduce');
              activeImage.style.position = 'static';
              activeImage.removeEventListener('animationend', handler);
            });
          }
  
          img.style.position = 'fixed';
          img.classList.add('enlarge');
          activeImage = img;
        }
        isEnlarged = !isEnlarged;
      });
    });
});