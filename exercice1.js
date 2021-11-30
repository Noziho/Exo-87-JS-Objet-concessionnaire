let voiture = {
    Nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    Couleur : "Marron",
    Constructeur : "Citroen",
    Carburant : "Solaire",
    nombrePortes : 3,
    Autonomie : "450km",
    vitesseMaxi : "120km/h"
};

document.getElementById('imgEggo').src = voiture.imgUrl;

let createP = document.createElement("p");
createP.innerHTML = "Nom: " + voiture.Nom + '<br>' + "Nombres de roues: " + voiture.nombresRoues + '<br>' +
    "Couleur: " + voiture.Couleur + "<br>" + "Constructeur: " + voiture.Constructeur + "<br>" +
    "Carburant: " + voiture.Carburant + "<br>" + "Nombres de portes: " + voiture.nombrePortes + "<br>" +
    "Autonomie: " +voiture.Autonomie + "<br>" + "Vitesse maxi: " + voiture.vitesseMaxi;

document.getElementById("caracteristiques").append(createP);


