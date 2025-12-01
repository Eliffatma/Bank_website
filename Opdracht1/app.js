let product = 18;
let budget = prompt("Hoe oud bent u?", 0);

let Resultaat = document.getElementById("Resultaat");

if (budget >= product) {
    Resultaat.innerHTML = "";
    Resultaat.style.color = "green";
}
else {
    window.location.href = "https://www.youtube.com/";
}