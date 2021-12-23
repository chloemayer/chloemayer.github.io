function toggleMenu() {
    document.getElementsByClassName("navUl")[0].classList.toggle("responsive");
}

document.querySelector(".yearSpan").textContent = new Date().getFullYear();
const date = new Date();
document.querySelector(".currDateSpan").textContent = new Intl.DateTimeFormat('en-UK', { dateStyle: 'full'}).format(date);