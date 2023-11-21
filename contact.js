
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }, true);
    changeinput()
});


function changeinput() {
    var button = document.getElementById('valider');
    var prenom = 'inputprenom';
    var prenom2 = 'labelprenom';
    var nom = 'inputnom';
    var nom2 = 'labelnom';
    var email = 'inputemail';
    var email2 = 'labelemail';


    button.addEventListener('click', function changement() {
        if (document.getElementById(prenom).style.display === 'block') {

            document.getElementById(prenom).style.display = 'none'; 
            document.getElementById(prenom2).style.display = 'none'; 

            document.getElementById(nom).style.display = 'block';
            document.getElementById(nom2).style.display = 'block'; 

            document.getElementById(email).style.display = 'none';
            document.getElementById(email2).style.display = 'none';

        } else if
         (document.getElementById(nom).style.display === 'block') {
        
            document.getElementById(prenom).style.display = 'none'; 
            document.getElementById(prenom2).style.display = 'none'; 


            document.getElementById(nom).style.display = 'none';
            document.getElementById(nom2).style.display = 'none';


            document.getElementById(email).style.display = 'block';
            document.getElementById(email2).style.display = 'block';

        } else 
        {
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








