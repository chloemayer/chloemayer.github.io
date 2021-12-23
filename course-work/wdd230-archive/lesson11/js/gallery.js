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


if (!localStorage.getItem('p')) {
    document.getElementById('lastVisit').textContent = "It's your first time visiting this page!";
    storeDates ();
}

else {
    dateCalc ();
}

function storeDates () {
    localStorage.setItem('p', date);
};

function dateCalc () {
    
    localStorage.setItem('c', date);  
    const curr = new Date(localStorage.getItem('c'));              
    const past = new Date(localStorage.getItem('p'));  
    
    const milliseconds = Math.abs(curr - past) / 1000;
    const days = Math.floor(milliseconds / 86400);

        document.getElementById('lastVisit').textContent = days;
        localStorage.setItem('p', localStorage.getItem('c'));
};


const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "-100px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } 
        else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});
