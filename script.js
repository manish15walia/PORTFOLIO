let darkmode = false;
function move() {
    let c = document.getElementById("circle");
    let sun = document.getElementsByClassName("fa-sun")[0];
    let moon = document.getElementsByClassName("fa-moon")[0];

    if (!darkmode) {
        c.classList.add('darkmode');
        sun.style.display = "none";
        moon.style.display = "inline";
        darkmode = true;
    }
    else {
        c.classList.remove('darkmode');
        sun.style.display = "block";
        moon.style.display = "none";
        darkmode = false;
    }
}

function revealItems() {
    reveal('.card');
}

function reveal(item) {
    let cards = document.querySelectorAll(item);

    for (const element of cards) {
        let windowHeight = window.innerHeight;
        let elementTop =
            element.getBoundingClientRect().top;
        let elementBottom = element.getBoundingClientRect().bottom;

        let elementTopVisible = 50, elementBottomVisible = 600;

        if (elementTop < windowHeight - elementTopVisible && elementBottom + elementBottomVisible > windowHeight) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    }
}

window.addEventListener("scroll", revealItems);