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
                        document.querySelector('article#townsArt1').appendChild(div);}
                    else if (x == 2) {
                        document.querySelector('article#townsArt2').appendChild(div);}
                    else {
                        document.querySelector('article#townsArt3').appendChild(div);}
                }
            }
        }          
});

function toggleMenu() {
    document.getElementsByClassName("navUl")[0].classList.toggle("responsive");
}

document.querySelector(".yearSpan").textContent = new Date().getFullYear();
const date = new Date();
document.querySelector(".currDateSpan").textContent = new Intl.DateTimeFormat('en-UK', {dateStyle: 'full'}).format(date);