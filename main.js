const hamburgerBCGD = document.querySelector(".hamburger-bcgd");
let hamburgerActive = false;

const ActiveFalseHandler = () => {
    if(!hamburgerActive) {
        hamburgerBCGD.classList.add("open");
        hamburgerActive = true;
    } else {
        hamburgerBCGD.classList.remove("open");
        hamburgerActive = false;
    }
};

hamburgerBCGD.addEventListener("click", ActiveFalseHandler);