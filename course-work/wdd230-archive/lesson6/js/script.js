function toggleMenu() {
    document.getElementsByClassName("navUl")[0].classList.toggle("responsive");
}

document.querySelector(".yearSpan").textContent = new Date().getFullYear();
const date = new Date();
document.querySelector(".currDateSpan").textContent = new Intl.DateTimeFormat('en-UK', { dateStyle: 'full'}).format(date);


const weekDate = new Date();
const day = weekDate.getDay();
const banner = document.querySelector(".pancakeBanner");

if (day == 5){
    banner.style.display = "block";
}

else {
    banner.style.display = "none";
}