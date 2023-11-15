// Attendez que le DOM soit entièrement chargé avant d'attacher des écouteurs d'événements
document.addEventListener("DOMContentLoaded", function () {
    // Attachez une fonction pour changer l'input lorsqu'on clique sur le bouton "valider"
    document.getElementById("valider").addEventListener("click", changerInput);

    // Empêchez la soumission du formulaire lorsqu'on appuie sur la touche "Enter"
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }, true);
});

var formulaireData = {};
var etatFormulaire = "prenom";
var coffre = {
    prenom: "",
    nom: "",
    email: ""
};

function envoyerFormulaire() {
    var formulaire = document.forms["game"];

    if (formulaire) {
        // Utilisation directe des valeurs des champs
        coffre.prenom = formulaire.prenom ? formulaire.prenom.value : "";
        coffre.nom = formulaire.nom ? formulaire.nom.value : "";
        coffre.email = formulaire.email ? formulaire.email.value : "";

        // Enregistrez les données dans la base de données ou effectuez d'autres opérations nécessaires ici
        console.log("Données du formulaire prêtes à être envoyées :", coffre);
    } else {
        console.error("Le formulaire n'a pas été trouvé.");
    }
}

function changerInput() {
    var inputActuel;

    switch (etatFormulaire) {
        case "prenom":
            inputActuel = document.getElementsByName("prenom")[0];
            changerInputPrenom(inputActuel);
            console.log("État du formulaire : prénom");
            break;

        case "nom":
            inputActuel = document.getElementsByName("nom")[0];
            changerInputGenerique(inputActuel, "email", "email", "votre e-mail");
            console.log("État du formulaire : nom");
            break;

        case "email":
            var emailInput = document.getElementsByName("email")[0];
            if (validationEmailReussie(emailInput.value)) {
                envoyerFormulaire();
                etatFormulaire = "soumission";
                console.log("État du formulaire : soumission");
            } else {
                console.log("Validation de l'e-mail échouée. Ne soumettez pas le formulaire.");
            }
            break;

        case "soumission":
            envoyerFormulaire(); // Appel de la fonction à la fin du processus du formulaire
            console.log("État du formulaire : soumission");
            break;
    }
}

function changerInputPrenom(inputActuel) {
    changerInputGenerique(inputActuel, "text", "nom", "votre nom");
}

function changerInputGenerique(inputActuel, type, inputSuivant, labelSuivant) {
    if (!inputActuel) {
        console.error("L'élément n'a pas été trouvé.");
        return;
    }

    var valeurInputActuel = inputActuel.value.trim();

    if (valeurInputActuel !== "") {
        // Stocker la valeur dans l'objet coffre avant le remplacement
        coffre[inputActuel.name] = valeurInputActuel;

        var nouvelInput = document.createElement("input");
        nouvelInput.type = type;
        nouvelInput.id = inputSuivant;
        nouvelInput.name = inputSuivant;
        nouvelInput.maxLength = 25;
        nouvelInput.size = 20;

        var parent = inputActuel.parentNode; // Récupérer le parent de l'input actuel

        // Remplacer l'input actuel par le nouvel input
        inputActuel.replaceWith(nouvelInput);

        var labelActuel = document.querySelector('label[for="' + inputActuel.id + '"]');
        if (labelActuel) {
            labelActuel.textContent = "Veuillez entrer " + labelSuivant + " :";
            labelActuel.htmlFor = nouvelInput.id;
        }

        nouvelInput.style.display = "block";
        nouvelInput.focus();

        etatFormulaire = inputSuivant;
    }
}

function validationEmailReussie(email) {
    var pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return pattern.test(email);
}