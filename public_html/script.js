document.addEventListener("DOMContentLoaded", function() {
    const blackPage = document.getElementById("black-page");
    const parallaxText = blackPage.querySelector(".text");

    console.log("blackPage:", blackPage);
    console.log("parallaxText:", parallaxText);

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY || window.pageYOffset;

        console.log("scrollPosition:", scrollPosition);

        const newSize = 1.2 + scrollPosition / 1000; 

        console.log("newSize:", newSize);

        parallaxText.style.fontSize = newSize + "em";
    });
});

document.addEventListener('mousemove', (event) => {
  const logo = document.getElementById('logo');
  const moveX = (event.clientX / window.innerWidth - 0.5) * 20; 
  const moveY = (event.clientY / window.innerHeight - 0.5) * 20; 

  logo.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

window.addEventListener('scroll', function() {
    var purpleContainer = document.getElementById('purple-container');
    var scrollPosition = window.scrollY;

    if (scrollPosition >= 500) {
        purpleContainer.classList.add('expand');
    } else {
        purpleContainer.classList.remove('expand');
    }
});

const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 40;

const calcValue = (a, b) => (a/b*range-range/2).toFixed(1) 

let timeout;
document.addEventListener('mousemove', ({x, y}) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
  	
  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

    [].forEach.call(images, (image) => {
      image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    });

    [].forEach.call(backgrounds, (background) => {
      background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
    })
	})
}, false);
