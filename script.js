let heroBtn = document.getElementById("hero-btn");

function buy() {
    alert("Thank you for your purchase!");
}

heroBtn.addEventListener('click', buy);

let rt2 = document.getElementById("r-t-2");
rt2.textContent = "Product Reviews";

document.querySelectorAll(".rev-about")[0].style.fontStyle = "italic";
document.querySelectorAll(".rev-about")[1].style.fontStyle = "italic";
document.querySelectorAll(".rev-about")[2].style.fontStyle = "italic";
document.querySelectorAll(".rev-about")[3].style.fontStyle = "italic";
document.querySelectorAll(".rev-about")[4].style.fontStyle = "italic";

let footerTag = document.getElementById("footer-tag")
footerTag.style.fontStyle = "italic"
footerTag.style.textDecoration = "underline"