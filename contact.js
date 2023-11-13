document.addEventListener("DOMContentLoaded", function () {
    // Utilisation d'une fonction nommée pour plus de clarté
    document.getElementById("valider").addEventListener("click", changerInput);

    document.addEventListener("keydown", function (event) {
        // Utilisation de l'événement key === "Enter" plutôt que keyCode (qui est déprécié)
        if (event.key === "Enter") {
            event.preventDefault();
            return false;
        }
    }, true);
});

function changeInput(input, suivant, limite) {
    if (input.value.length === limite) {
        var nextInput = document.getElementById(suivant);
        // Utilisation de l'opérateur ternaire pour plus de concision
        nextInput && nextInput.tagName.toLowerCase() === "input" && nextInput.focus();
    }
}


function changerInput() {
    // Récupère l'élément d'entrée du prénom
    var prenom = document.getElementById("prenom");
    
    // Crée un nouvel élément d'entrée pour le nom
    var nom = document.createElement("input");
    nom.type = "text";
    nom.id = "nom";
    nom.name = "game";
    nom.maxlength = "10";
    nom.size = "10";
    nom.oniput = "changeInput(this, 'nom', 5)"
    
    // Remplace l'élément d'entrée du prénom par l'élément d'entrée du nom
    prenom.parentNode.replaceChild(nom, prenom);

    var prenomL =document.querySelector('label[for="prenom"]');

    prenomL.textContent = "veuillez entrer votre nom : ";
    prenomL.setAttribute("for", "nom")

    // Affiche le label et l'input pour le nom
    document.getElementById("labelNom").style.display = "block";
    nom.style.display = "block";

    // Met le focus sur le nouvel élément d'entrée du nom
    nom.focus();
}

function changerInput2(){

    var nom = document.getElementById("nom");

    var email = document.createElement("input");
    email.type="email";
    email.id ="email";
    email.name = "game";
    email.pattern = ".+@example\.com";
    email.size  = "10";


    nom.parentNode.replaceChild(email, nom);

    var nomL = document.querySelector('label[for="nom"]');

    nomL.textContent = " veuillez entrer votre adresse mail :"
    nomL.setAttribute("for","email")

    document.getElementById("labelemail").style.display = "block";
    nom.style.display = " block"

    email.focus();

}



  

