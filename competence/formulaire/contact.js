// Attend que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function () {
    // Désactive la touche "Enter" pour prévenir l'envoi du formulaire lorsqu'elle est pressée
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }, true);
    
    // Appelle la fonction changeinput au chargement de la page
    changeinput()
});

// Fonction pour gérer le changement entre les champs du formulaire
function changeinput() {
    // Récupère les éléments du formulaire
    var button = document.getElementById('valider');
    var prenom = 'inputprenom';
    var prenom2 = 'labelprenom';
    var nom = 'inputnom';
    var nom2 = 'labelnom';
    var email = 'inputemail';
    var email2 = 'labelemail';

    // Ajoute un écouteur d'événements sur le bouton "Valider"
    button.addEventListener('click', function changement() {
        // Si le champ du prénom est affiché
        if (document.getElementById(prenom).style.display === 'block') {
            // Masque les éléments liés au prénom
            document.getElementById(prenom).style.display = 'none'; 
            document.getElementById(prenom2).style.display = 'none'; 

            // Affiche les éléments liés au nom
            document.getElementById(nom).style.display = 'block';
            document.getElementById(nom2).style.display = 'block'; 

            // Masque les éléments liés à l'e-mail
            document.getElementById(email).style.display = 'none';
            document.getElementById(email2).style.display = 'none';
        } 
        // Si le champ du nom est affiché
        else if (document.getElementById(nom).style.display === 'block') {
            // Masque les éléments liés au prénom
            document.getElementById(prenom).style.display = 'none'; 
            document.getElementById(prenom2).style.display = 'none'; 

            // Masque les éléments liés au nom
            document.getElementById(nom).style.display = 'none';
            document.getElementById(nom2).style.display = 'none';

            // Affiche les éléments liés à l'e-mail
            document.getElementById(email).style.display = 'block';
            document.getElementById(email2).style.display = 'block';
        } 
        // Si le champ de l'e-mail est affiché
        else {
            // Récupérer la valeur de l'adresse e-mail
            var emailValue = document.getElementById(email).value;

            // Expression régulière pour vérifier le format de l'e-mail
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Tester l'adresse e-mail avec la regex
            if (emailRegex.test(emailValue)) {
                // Si l'e-mail est valide, soumettre le formulaire
                var formulaire = document.getElementById('myForm');
                formulaire.submit();
            } 
        }
    });
}









