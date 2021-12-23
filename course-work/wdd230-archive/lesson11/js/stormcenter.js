function toggleMenu() {
    document.getElementsByClassName("navUl")[0].classList.toggle("responsive");
}

const date = new Date();

document.querySelector("#yearSpan").textContent = date.getFullYear();
document.querySelector("#currDateSpan").textContent = new Intl.DateTimeFormat('en-UK', { dateStyle: 'full'}).format(date);
  
const day = date.getDay();
const banner = document.querySelector(".pancakeBanner");

if (day == 5){
    banner.style.display = "block";
}
else {
    banner.style.display = "none";
}


function rangeChange(severity) {
    document.getElementById("rangeSpan").innerHTML = severity;
}