document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("valider").addEventListener("click", changerInput);
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            return false;
        }
    }, true);
});

function changeInput(input, suivant, limite) {
    if (input.value.length === limite) {
        var nextInput = document.getElementById(suivant);
        nextInput && nextInput.tagName.toLowerCase() === "input" && nextInput.focus();
    }
}

function changerInput() {
    var prenom = document.getElementById("prenom");
    
    var nom = document.createElement("input");
    nom.type = "text";
    nom.id = "nom";
    nom.name = "game";
    nom.maxlength = "10";
    nom.size = "10";
    nom.oninput = function () {
        changeInput2(this, 'email', 5);
    };

    prenom.parentNode.replaceChild(nom, prenom);

    var prenomLabel = document.querySelector('label[for="prenom"]');
    prenomLabel.textContent = "Veuillez entrer votre nom :";
    prenomLabel.setAttribute("for", "nom");

    document.getElementById("labelNom").style.display = "block";
    nom.style.display = "block";
    nom.focus();
}

function changerInput2() {
    var nom = document.getElementById("nom");

    var email = document.createElement("input");
    email.type = "email";
    email.id = "email";
    email.name = "game";
    email.pattern = ".+@example\.com";
    email.size = "10";
    email.oninput = function () {
        changeInput(this, 'suivant', 5);
    };

    nom.parentNode.replaceChild(email, nom);

    var nomLabel = document.querySelector('label[for="nom"]');
    nomLabel.textContent = "Veuillez entrer votre adresse mail :";
    nomLabel.setAttribute("for", "email");

    document.getElementById("labelemail").style.display = "block";
    email.style.display = "block";
    email.focus();
}



  

