document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }, true);
});

function changeinput() {
    var button = document.getElementById('valider');
    var prenom = 'inputprenom';
    var nom = 'inputnom';
    var email = 'inputemail';

    button.addEventListener('click', function changement() {
        if (document.getElementById(prenom).style.display === 'block') {
            
            document.getElementById(prenom).style.display = 'none'; 
            document.getElementById(nom).style.display = 'block';
            document.getElementById(email).style.display = 'none';
        } else if (document.getElementById(nom).style.display === 'block') {
            document.getElementById(prenom).style.display = 'none'; 
            document.getElementById(nom).style.display = 'none';
            document.getElementById(email).style.display = 'block';
        } else {
            // Récupérer la valeur de l'adresse e-mail
            var emailValue = document.getElementById(email).value;

            // Expression régulière pour vérifier le format de l'e-mail
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Tester l'adresse e-mail avec la regex
            if (emailRegex.test(emailValue)) {
                var formulaire = document.getElementById('myForm');
                formulaire.submit();
            } 
        }
    });
}








