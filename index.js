let sidebar = document.querySelector(".sidebar");

const plusp = document.querySelectorAll(".plus");
const para = document.querySelectorAll(".quest-p");

plusp.forEach(element => {
    element.innerHTML = `<i class="fas fa-plus"></i>`;
    element.addEventListener("click", () => {
        const icon = element.querySelector("i");
               if (icon.classList.contains("fa-plus")) {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");

        } else {
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
        }
    });
});



function handleClick(event) {
    const clickedParagraph = event.target;
    clickedParagraph.classList.toggle("show-all-p");
}

para.forEach(paragraph => {
    paragraph.addEventListener("click", handleClick);
});


const header = document.querySelector('.navbar');
function toggleHeaderShadow() {
    if (window.scrollY > 0) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
}

window.addEventListener('scroll', toggleHeaderShadow);

toggleHeaderShadow();



const darkBtn = document.querySelector(".darkmode-toggle");
const sideDarkBtn = document.querySelector(".side-darkmode-toggle");

darkBtn.innerHTML = `<i class="fas fa-moon moon"></i>`
darkBtn && darkBtn.addEventListener("click", ( )=> {
    if(darkBtn.innerHTML === `<i class="fas fa-moon moon"></i>`){
        darkBtn.innerHTML = `<i class="fas fa-sun sun"></i>`
        document.body.classList.add("dark") 
    } else {
        darkBtn.innerHTML = `<i class="fas fa-moon moon"></i>`
        document.body.classList.remove("dark")
    }
})
sideDarkBtn.innerHTML = `<i class="fas fa-moon moon"></i>`
sideDarkBtn && sideDarkBtn.addEventListener("click", ( )=> {
    if(sideDarkBtn.innerHTML === `<i class="fas fa-moon moon"></i>`){
        sideDarkBtn.innerHTML = `<i class="fas fa-sun sun"></i>`
        document.body.classList.add("dark") 
    } else {
        sideDarkBtn.innerHTML = `<i class="fas fa-moon moon"></i>`
        document.body.classList.remove("dark")
    }
})

const blur = document.querySelector(".menu-blur")
const menuBar = document.querySelector(".menubar")
const navbar = document.querySelector(".nav-con")

menuBar.innerHTML = `<i class="fas fa-bars"></i>`
menuBar && menuBar.addEventListener("click", () => {

if(menuBar.innerHTML ===`<i class="fas fa-bars"></i>`) {
    menuBar.innerHTML = `<i class="fas fa-times close"></i>`
    navbar.classList.add("show-nav")
    blur.style.display = "flex"
} else {
menuBar.innerHTML =`<i class="fas fa-bars"></i>`
navbar.classList.remove("show-nav")
blur.style.display = "none"
} 

})

blur && blur.addEventListener("click", () => {
    navbar.classList.remove("show-nav")
})


const closebtn = document.querySelector(".close")
closebtn && closebtn.addEventListener("click", () => {
    navbar.classList.remove("show-nav")
})

const navLinks = document.querySelectorAll(".nav-link");

function toggleNavbar() {
    menuBar.innerHTML =`<i class="fas fa-bars"></i>`
    navbar.classList.remove("show-nav")
    blur.style.display = "none"
}


navLinks.forEach(link => {
    link.addEventListener("click", toggleNavbar);
});

const prevButton = document.querySelector(".fa-arrow-left-long")
const nextButton = document.querySelector(".fa-arrow-right-long")
const cardContainer = document.querySelector('.testimonial-card-con');

let scrollPosition = 0;

prevButton.addEventListener("click", () => {
    scrollPosition -= 320; 
    if (scrollPosition < 0) {
        scrollPosition = 0;
    }
    cardContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
    });
});

// Function to scroll to the next card
nextButton.addEventListener("click", () => {
    scrollPosition += 320; // Adjust the value to control the scroll distance
    if (scrollPosition > cardContainer.scrollWidth - cardContainer.clientWidth) {
        scrollPosition = cardContainer.scrollWidth - cardContainer.clientWidth;
    }
    cardContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
    });
});


const proprevButton = document.querySelector(".pro-left-arrow");
const pronextButton = document.querySelector(".pro-right-arrow");
const procardContainer = document.querySelector(".buttom-design-con");

let proscrollPosition = 0;

proprevButton &&
  proprevButton.addEventListener("click", () => {
    proscrollPosition -= 320;
    if (proscrollPosition < 0) {
      proscrollPosition = 0;
    }
    procardContainer.scrollTo({
      left: proscrollPosition,
      behavior: "smooth",
    });
  });

// Function to scroll to the next card
pronextButton.addEventListener("click", () => {
    proscrollPosition += 320; // Adjust the value to control the scroll distance
    if (proscrollPosition > procardContainer.scrollWidth - procardContainer.clientWidth) {
        proscrollPosition = procardContainer.scrollWidth - procardContainer.clientWidth;
    }
    procardContainer.scrollTo({
        left: proscrollPosition,
        behavior: "smooth"
    });
});





