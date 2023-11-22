<!DOCTYPE html>
<html lang="fr">

<head>
    <!-- Métadonnées du document -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>

    <!-- Liens vers les fichiers CSS et JavaScript -->
    <link rel="stylesheet" type="text/css" href="contact.css">
    <script src="contact.js" defer></script>

    <!-- Lien vers la police de caractères Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
</head>

<body>
    <!-- En-tête de la page -->
 
        <h1>Contact</h1>
            <!-- Formulaire de contact -->
    <div id="formulaire">
        <form action="contact-BDD.php" method="post" name="game" id="myForm">
            <fieldset>
                <!-- Champ pour le prénom -->
                <label id="labelprenom" style="display: block;" size="200">Veuillez indiquer votre prénom :</label>
                <input type="text" id="inputprenom" name="prenom" maxlength="25" size="20" style="display: block;" autocomplete="off" autofocus>

                <!-- Champ pour le nom -->
                <label id="labelnom" style="display: none;">Veuillez indiquer votre nom :</label>
                <input type="text" id="inputnom" name="nom" maxlength="25" size="20" style="display: none;" autocomplete="off" autofocus>

                <!-- Champ pour l'adresse e-mail -->
                <label id="labelemail" style="display: none;">Veuillez saisir votre adresse e-mail:</label>
                <input type="email" id="inputemail" name="email" maxlength="25" size="20" style="display: none;" autocomplete="off" autofocus>

                <!-- Bouton pour valider le formulaire -->
                <input type="button" id="valider" value="Valider" onclick="changeinput()">
            </fieldset>
        </form>
    </div>
   



    <!-- Affichage du nombre de formulaires remplis et de visiteurs -->
    <?php 
        // Connexion à la base de données
        $cnx = mysqli_connect("localhost", "root", "", "cv");

        // Vérification de la connexion
        if(mysqli_connect_errno()) {
            echo "Erreur de connexion à la base " . mysqli_connect_error(); 
        }

        // Requête pour la table "utilisateur"
        $sqlUtilisateur = "SELECT id_utilisateur FROM utilisateur ORDER BY id_utilisateur DESC"; 
        $resultUtilisateur = mysqli_query($cnx, $sqlUtilisateur);

        // Requête pour la table "visiteur"
        $sqlVisiteur = "SELECT id FROM visiteur ORDER BY id DESC"; 
        $resultVisiteur = mysqli_query($cnx, $sqlVisiteur);

        // Affichage du tableau avec les données
        echo "<table>";
        echo "<thead>";
        echo "<tr>";
        echo "<th></th>";
        echo "<th></th>";
        echo "</tr>";
        echo "</thead>";
        echo "<tbody>";

        // Récupération et affichage de la dernière entrée de la table "utilisateur"
        if ($rowUtilisateur = mysqli_fetch_assoc($resultUtilisateur)) {
            echo "<tr>";
            echo "<td>" ."Nombre de formulaires remplis :" . $rowUtilisateur['id_utilisateur'] . "</td>";
            echo "</tr>";
        }

        // Récupération et affichage de la dernière entrée de la table "visiteur"
        if ($rowVisiteur = mysqli_fetch_assoc($resultVisiteur)) {
            echo "<tr>";
            echo "<td>" ."Nombre de visiteurs :". $rowVisiteur['id'] . "</td>";
            echo "</tr>";
        }

        echo "</tbody>";
        echo "</table>";

        // Fermeture de la connexion à la base de données
        mysqli_close($cnx);
    ?>
</body>

</html>


    


