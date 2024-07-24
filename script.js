const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


// counter js start here

        document.addEventListener('DOMContentLoaded', () => {
            const counters = document.querySelectorAll('.counter-number');
            counters.forEach(counter => {
                const duration = parseInt(counter.getAttribute('data-duration'));
                const toValue = parseInt(counter.getAttribute('data-to-value'));
                const fromValue = parseInt(counter.getAttribute('data-from-value'));
                const delimiter = counter.getAttribute('data-delimiter');
                
                let currentNumber = fromValue;
                const increment = (toValue - fromValue) / (duration / 10);
                
                const updateCounter = () => {
                    currentNumber += increment;
                    if (currentNumber >= toValue) {
                        currentNumber = toValue;
                        clearInterval(interval);
                    }
                    counter.textContent = Math.floor(currentNumber).toLocaleString();
                };

                const interval = setInterval(updateCounter, 10);
            });
        });