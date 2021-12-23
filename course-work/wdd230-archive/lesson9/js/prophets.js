const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) { 
        const prophets = jsonObject["prophets"];
        console.log(prophets);

        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let bDay = document.createElement("p");
            let bPlace = document.createElement("p");
            let img = document.createElement("img");

            h2.textContent = prophets[i].name + " " + prophets[i].lastname;
            bDay.textContent = "Date of Birth:" + " " + prophets[i].birthdate;
            bPlace.textContent = "Place of Birth:" + " " + prophets[i].birthplace;
            img.setAttribute("src", prophets[i].imageurl);
            img.setAttribute("alt", h2.value + " " + "-" + " " + prophets[i].order);

            card.appendChild(h2);
            card.appendChild(bDay);
            card.appendChild(bPlace);
            card.appendChild(img);

            document.querySelector("div.cards").appendChild(card);
        }

    });

    