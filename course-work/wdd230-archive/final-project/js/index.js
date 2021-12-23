function navButton() {
    document.getElementsByClassName("navU")[0].classList.toggle("menu");
}

const wurl = "https://api.openweathermap.org/data/2.5/onecall?lat=40.6255&lon=-111.8763&units=imperial&appid=86a8a127f039c280559b0b465179fac6";
const date = new Date();
let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


fetch(wurl)
.then(function (response) {
    return response.json();
})  
.then(function (jObject) {
    const forecast = jObject['current'];
    const daily = jObject['daily'];

    const cTemp = document.createElement('p');
    const cCond = document.createElement('p');
    const cHum = document.createElement('p');

    cTemp.textContent = 'Currently . . .' + ' ' + forecast.temp;
    cHum.textContent = 'Humidity . . .' + ' ' + forecast.humidity;
    cCond.textContent = 'Condition . . .' + ' ' + forecast.weather[0].description;

    const d = document.getElementById('wdiv');
    d.appendChild(cTemp);
    d.appendChild(cHum);
    d.appendChild(cCond);

    let u = 0;

        for (let x = 0; x < 7; x++) {
            let container = document.createElement('div');
            let wd = document.createElement('h4');
            let tem = document.createElement('p');

            wd.textContent = weekdays[x];
            tem.textContent = daily[x].temp.day + '\u00B0';

            container.appendChild(wd);
            container.appendChild(tem);
            document.getElementById('fdiv').appendChild(container);

            u++;

            if (u > 2) {
                break;
            }
        }
     
}); 

document.getElementById('lastMod').textContent = new Intl.DateTimeFormat('en-US').format(date);