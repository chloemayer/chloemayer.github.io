const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=86a8a127f039c280559b0b465179fac6';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        const imgsrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imgsrc;
        document.getElementById('icon').setAttribute('src', imgsrc);
        document.getElementById('icon').setAttribute('alt', desc);
    });