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



const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
    img.onload = () => {
        img.removeAttribute("data-src");
    };
}

const imgOptions = {
    threshold: 0,
    rootMargin: "-50px",
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



const url = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(url)
    .then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const towns = jsonObject["towns"];


        for (let x = 0; x < towns.length; x++) {

            if ((x % 2) == 0) {
                if (x !== 4) {
                    let div = document.createElement('div');
                    let name = document.createElement('h3');
                    let motto = document.createElement('h4');
                    let founded = document.createElement('p');
                    let population = document.createElement('p');
                    let rainfall = document.createElement('p');

                    div.setAttribute('class', 'townsData');

                    name.textContent = towns[x].name;
                    motto.textContent = towns[x].motto;
                    founded.textContent = "Year Founded: " + towns[x].yearFounded;
                    population.textContent = "Current Population: " + towns[x].currentPopulation;
                    rainfall.textContent = "Average Rainfall: " + towns[x].averageRainfall; 

                    div.appendChild(name);
                    div.appendChild(motto);
                    div.appendChild(founded);
                    div.appendChild(population); 
                    div.appendChild(rainfall);

                    if (x == 0) {
                        document.querySelector('div#townsArt1').appendChild(div);}
                    else if (x == 2) {
                        document.querySelector('div#townsArt2').appendChild(div);}
                    else {
                        document.querySelector('div#townsArt3').appendChild(div);}
                }
            }
        }          
});