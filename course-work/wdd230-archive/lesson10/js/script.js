function toggleMenu() {
    document.getElementsByClassName("navUl")[0].classList.toggle("responsive");
}

const date = new Date();

document.querySelector(".yearSpan").textContent = date.getFullYear();
document.querySelector(".currDateSpan").textContent = new Intl.DateTimeFormat('en-UK', { dateStyle: 'full'}).format(date);
    
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


const url = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=86a8a127f039c280559b0b465179fac6";
const fUrl = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=86a8a127f039c280559b0b465179fac6";

fetch(url) 
.then((response) => response.json())
.then((jsObject) => {
        document.getElementById('cTemp').textContent = jsObject.main.temp; 
        document.getElementById('hTemp').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wSpeed').textContent = jsObject.wind.speed;
        let temp = parseFloat(document.querySelector("#cTemp").textContent);
        let speed = parseFloat(document.querySelector("#wSpeed").textContent);
            if (temp <= 50 && speed >= 3) {
                document.querySelector("#wcSpan").textContent = windChill(temp, speed);
            }
            
            else {
                document.querySelector("#wcSpan").textContent = "N/A";
            }
    });

function windChill(t, s) {
    return Math.round(35.74 + (0.6215 * t) - 35.75 * (Math.pow(s, 0.16)) + (0.4275 * t) * (Math.pow(s, 0.16))); 
};


let i = 0;
let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

fetch(fUrl)
.then((response) => response.json())
.then((jObject) => {
    const list = jObject['list']; //list inside json array
    const fList = list.filter(list => list.dt_txt.includes('18:00:00')); //filtered list in json array

    fList.forEach(forecastDay => {
        let div = document.createElement('div');
        let wspan = document.createElement('span');
        let wspan1 = document.createElement('span');
        let wspan2 = document.createElement('span');
        let wspan3 = document.createElement('span');
        let wspan4 = document.createElement('span');
        let img = document.createElement('img');
        let span = document.createElement('span');

        div.setAttribute('class', 'forecastColumn');
        wspan.setAttribute('class', 'forecastWeekdays');
        img.setAttribute('class', 'w-icons');
        span.setAttribute('class', 'forecastTemps');
        let imgsrc = 'https://openweathermap.org/img/w/' + forecastDay.weather[0].icon + '.png';
        let desc = forecastDay.weather[0].description;
        img.setAttribute('src', imgsrc);
        img.setAttribute('alt', desc);
        span.textContent = forecastDay.main.temp;
        weekdayLoop(wspan, wspan1, wspan2, wspan3, wspan4);

        div.appendChild(wspan);
        div.appendChild(img);
        div.appendChild(span);
        document.querySelector('div.fDiv').appendChild(div);
    }); 


    function weekdayLoop (day, day1, day2, day3, day4){
        while (i < weekdays.length) {  
            if (i == 0) {
                day.textContent = weekdays[i];
                break;
            }
            else if (i == 1) {
                day.textContent = weekdays[i];
                break;
            } 
            else if (i == 2) {
                day.textContent = weekdays[i];
                break;
            }
            else if (i == 3) {
                day.textContent = weekdays[i];
                break;
            }
            else {
                day.textContent = weekdays[i];  
                break;
            }
        }
        i++;
        return i;
    }
});

const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventsURL)
.then(function (response) {
    return response.json();
    })
.then(function (jObject) {

    const towns = jObject['towns']; 
    const fTowns = towns.filter(town => town.name == 'Soda Springs' || town.name =='Fish Haven' || town.name == 'Preston');

    let section = document.getElementById('eventsSec');
    let h2 = document.createElement('h2');
    let div = document.createElement('div');
    let event = document.createElement('p');
    let event1 = document.createElement('p');
    let event2 = document.createElement('p');

    h2.textContent = "Upcoming Events!";
    event.textContent = fTowns[2].events[0];
    event1.textContent = fTowns[2].events[1];
    event2.textContent = fTowns[2].events[2];

    section.appendChild(div);
    div.appendChild(h2);
    div.appendChild(event);
    div.appendChild(event1);
    div.appendChild(event2);
});