// Les éléments html du formulaire utilisés dans le script
const inputNoDA = document.getElementById('numero_da');             // Le input du numéro de da
const declaration = document.getElementById('declaration');         // Le checkbox de la déclaration
const sliderNote = document.getElementById('note_estime');          // Le slider de sélection de la note estimée
const titreNote = document.getElementById('titre_note_estime');     // Le titre de la note estimé
const daIconeErreur = document.getElementById('da_icone_erreur');   // L'icone d'erreur associée au input du numéro de da
const daIconeSucces = document.getElementById('da_icone_succes');   // L'icone de succès associée au input du numéro de da

// Initialisation de l'affichage de la bonne icone associé au numéro de da
daIconeErreur.classList.remove('hidden');
daIconeSucces.classList.add('hidden');

/**
 * Affiche un message dans la première balise small du même niveau qu'un élément html
 * @param {HTMLElement} element L'élément html de départ
 * @param {string} message Le message à afficher
 */
function AfficherMessage(element, message = '') {
    const zoneMessage = element.parentElement.querySelector('small');
    zoneMessage.innerHTML = message;
}

/**
 * Génère un nombre entier aléatoirement
 * @param {int} min La valeur minimum du nombre généré
 * @param {int} max La valeur maximum du nombre généré
 * @returns Un nombre entier
 */
function ObtenirNombreAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

const textErreur = document.getElementById("test");

//Attribue la fonction validationDa à notre input
inputNoDA.addEventListener("input", validationDa);

//Création de la fonction pour valider notre da
function validationDa() {
    let valideDa = false;
    AfficherMessage(textErreur, message = '');

    //Validation que le Da a seulement des chiffres
    let validationChiffre = false;
    // Objet regex dont le pattern est de permettre seulement des chiffres
    const REGEX_SEULEMENT_CHIFFRE = /^\d+$/;
    //Utilisation du match pour vérifier que le input corresponds au regex
    if (inputNoDA.value.match(REGEX_SEULEMENT_CHIFFRE)) {
        validationChiffre = true;
    } else {
        AfficherMessage(textErreur, message = "Le numéro de Da n'est pas uniquement composé de chiffres.");
    }

    //Vérification que le Da fait exactement 7 de longueur
    let validationLongueur = false;
    let longueur = inputNoDA.value.length;
    if (longueur == 7) {
        validationLongueur = true;
    } else {
        AfficherMessage(textErreur, message = "Le numéro de Da ne fait pas exactement 7 caractères.");
    }

    //Vérification que le Da commence par 1 ou 2
    let validationPremier = false;
    const regex = /^[12]/;
    if (inputNoDA.value.match(regex)) {
        validationPremier = true;
    } else {
        AfficherMessage(textErreur, message = "Le numéro de Da ne commence pas par 1 ou 2.");
    }

    //Vérifie que tout le da est valide
    if(validationChiffre && validationLongueur && validationPremier) {
        valideDa = true;
    }

    //Cacher et montrer les icones
    if (!valideDa) {
        daIconeErreur.classList.remove('hidden');
        daIconeSucces.classList.add('hidden');
    } else {
        daIconeErreur.classList.add('hidden');
        daIconeSucces.classList.remove('hidden');
    }

    return valideDa;
}


//Attribue la fonction noteEstime à notre input
sliderNote.addEventListener("input", noteEstime);

icone_note = document.getElementById("icone_note");

//Création de la fonction pour la note estimé
function noteEstime() {
    titreNote.innerText = "Ma note estimée = " +  sliderNote.value + " %";

    if (sliderNote.value >= 0 && sliderNote.value <= 19) {
        icone_note.className = "far fa-sad-cry";
    } else if (sliderNote.value >= 20 && sliderNote.value <= 39) {
        icone_note.className = "far fa-sad-tear";
    } else if (sliderNote.value >= 40 && sliderNote.value <= 59) {
        icone_note.className.value = "far fa-frown";
    } else if (sliderNote.value >= 60 && sliderNote.value <= 79) {
        icone_note.className = "far fa-smile";
    } else if (sliderNote.value >= 80 && sliderNote.value <= 100) {
        icone_note.className = "far fa-grin-squint-tears";
    }
}

//Fonction pour vérifier avant de submit 
const monFormulaire = document.getElementById("formulaire_examen");
monFormulaire.addEventListener('submit', validationFormulaire);

function validationFormulaire(e) {

    const checkbox = document.getElementById("declaration").checked;
    
    e.preventDefault();

    let formValide = false;

    if (validationDa() && checkbox) {
        formValide = true;
    }

    if (formValide) {
        monFormulaire.submit();
    }
}

//Fonction pour faire changer l'arrière-plan
let bouttonBackground = document.getElementById("bouton_changer_image_fond");
bouttonBackground.addEventListener('click', changerArrierePlan);
let conteneur = document.getElementById("conteneur_principale");
function changerArrierePlan() {
    let nombre = ObtenirNombreAleatoire(1, 5);
    if (nombre == 1) {
        conteneur.style.backgroundImage = 'url("./images/background01.jpg")';
    } else if (nombre == 2) {
        conteneur.style.backgroundImage = 'url("./images/background02.jpg")';
    } else if (nombre == 3) {
        conteneur.style.backgroundImage = 'url("./images/background03.jpg")';
    } else if (nombre == 4) {
        conteneur.style.backgroundImage = 'url("./images/background04.jpg")';
    } else if (nombre == 5) {
        conteneur.style.backgroundImage = 'url("./images/background05.jpg")';
    } 
}