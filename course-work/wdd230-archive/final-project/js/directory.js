const url = "json/directory.json";

function navButton() {
    document.getElementsByClassName("navU")[0].classList.toggle("menu");
}


function listView() {
    
    document.getElementsByClassName("x")[0].classList.add('list');
}

function gridView() {
    document.getElementsByClassName("x")[0].classList.remove('list');
}

fetch(url)
.then(function(response) {
    return response.json();
    })
.then(function(jObject) {

        const businesses = jObject['businesses']; 
        
         for(let i = 0; i < businesses.length; i++)   {
            
            const section = document.createElement('section');
            const h2 = document.createElement('h2');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const pic = document.createElement('picture');
            const img = document.createElement('img');

            h2.textContent = businesses[i].name;
            p1.textContent = businesses[i].contact;
            p2.textContent = businesses[i].website;
            p2.setAttribute('class', 'drctLinks');
            section.setAttribute('class', 'drctCards');
            img.setAttribute('src', businesses[i].src);
            img.setAttribute('alt', businesses[i].alt);

            section.appendChild(pic);
            pic.appendChild(img);
            section.appendChild(h2);
            section.appendChild(p1);
            section.appendChild(p2);
            
            document.getElementById('bCards').appendChild(section);
        }})

        const date = new Date();

        document.getElementById('lastMod').textContent = new Intl.DateTimeFormat('en-US').format(date);
    