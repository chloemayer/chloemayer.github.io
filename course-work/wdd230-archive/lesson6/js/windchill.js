let temp = parseFloat(document.querySelector("#cTemp").textContent);
let speed = parseFloat(document.querySelector("#wSpeed").textContent);

if (temp <= 50 && speed >= 3) {
    let f = windChill(temp, speed);

    document.querySelector("#wcSpan").textContent = f;
}

else {
    let f = "N/A";

    document.querySelector("#wcSpan").textContent = f;
}


function windChill(t, s) {
    let chill = Math.round(35.74 + (0.6215 * t) - 35.75 * (Math.pow(s, 0.16)) + (0.4275 * t) * (Math.pow(s, 0.16))); 
    return chill;
}