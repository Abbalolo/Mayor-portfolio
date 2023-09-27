
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

// Function to add or remove the shadow class based on scroll position
function toggleHeaderShadow() {
    if (window.scrollY > 0) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
}

// Add scroll event listener to trigger the function
window.addEventListener('scroll', toggleHeaderShadow);

// Initial check for shadow class on page load
toggleHeaderShadow();



const darkBtn = document.querySelector(".darkmode-toggle");

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

const blur = document.querySelector(".menu-blur")
const menuBar = document.querySelector(".menubar")
const navbar = document.querySelector(".nav-con")

menuBar.innerHTML = `<i class="fas fa-bars"></i>`
menuBar && menuBar.addEventListener("click", () => {

if(menuBar.innerHTML ===`<i class="fas fa-bars"></i>`) {
    menuBar.innerHTML = `<i class="fas fa-times close"></i>`
    navbar.classList.add("show-nav")
} else {
menuBar.innerHTML =`<i class="fas fa-bars"></i>`
navbar.classList.remove("show-nav")
} 

})


const closebtn = document.querySelector(".close")
closebtn && closebtn.addEventListener("click", () => {
    navbar.classList.remove("show-nav")
})

const navLinks = document.querySelectorAll(".nav-link");

function toggleNavbar() {
    menuBar.innerHTML =`<i class="fas fa-bars"></i>`
    navbar.classList.remove("show-nav")
}


navLinks.forEach(link => {
    link.addEventListener("click", toggleNavbar);
});



// let currentCardsIndex = 0;
// const cards = document.querySelectorAll('.testimonial-card');
// const cardContainer = document.querySelector('.testimonial-card-con');

// function showCards(index) {
//     const offset = index * cards[0].clientWidth * -1;
//     cardContainer.style.transform = `translateX(${offset}px)`;
// }

// function prevCards() {
//     currentCardsIndex = (currentCardsIndex - 1 + cards.length) % cards.length;
//     showCards(currentCardsIndex);
// }

// function nextCards() {
//     currentCardsIndex = (currentCardsIndex + 1) % cards.length;
//     showCards(currentCardsIndex);
// }

// showCards(currentCardsIndex); 

// const testLeft = document.querySelector(".fa-arrow-left-long")
// const testRight = document.querySelector(".fa-arrow-right-long")

// testLeft && testLeft.addEventListener("click", prevCards)
// testRight && testRight.addEventListener("click", nextCards)


const prevButton = document.querySelector(".fa-arrow-left-long")
const nextButton = document.querySelector(".fa-arrow-right-long")
const cardContainer = document.querySelector('.testimonial-card-con');

let scrollPosition = 0;

prevButton.addEventListener("click", () => {
    scrollPosition -= 320; // Adjust the value to control the scroll distance
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
