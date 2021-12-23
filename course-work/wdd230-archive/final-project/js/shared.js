const date = new Date();

document.getElementById('lastMod').textContent = new Intl.DateTimeFormat('en-US').format(date);

function navButton() {
    document.getElementsByClassName("navU")[0].classList.toggle("menu");
}