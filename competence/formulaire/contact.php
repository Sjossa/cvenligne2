<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
    <link rel="stylesheet" type="text/css" href="contact.css">
    <script src="contact.js" defer></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
</head>

<body>
    
    <!-- En-tête de la page -->
    <div id="con">
        <h1>Contact</h1>
    </div>
    <!-- Tableau pour la BDD -->


    <!-- Formulaire de contact -->
    <div id="formulaire">
        <div class="border-content"></div>
        <form action="contact-BDD.php" method="post" name="game" id="myForm">
            <fieldset>
                <!-- Champ pour le prénom -->
                <label id="labelprenom" style="display: block;">Merci de renseigner votre prénom :</label>
                <input type="text" id="inputprenom" name="prenom" maxlength="25" size="20" style="display: block;" autocomplete="off" autofocus>

                <!-- Champ pour le nom -->
                <label id="labelnom" style="display: none;">Merci de renseigner votre nom :</label>
                <input type="text" id="inputnom" name="nom" maxlength="25" size="20" style="display: none;" autocomplete="off" autofocus>

                <!-- Champ pour l'adresse e-mail -->
                <label id="labelemail" style="display: none;">Merci de renseigner votre adresse mail :</label>
                <input type="email" id="inputemail" name="email" maxlength="25" size="20" style="display: none;" autocomplete="off" autofocus>

                <!-- Bouton pour valider le formulaire -->
                <input type="button" id="valider" value="Valider" onclick="changeinput()">
            </fieldset>
        </form>
    </div>
    <?php 
    $cnx = mysqli_connect("localhost", "root", "", "cv");

    if(mysqli_connect_errno()) {
        echo "erreur de connexion à la base ".mysqli_connexion_error(); 
    }
         $sql = "select id";
    $result = mysqli_query($cnx, $sql);
    echo "<table>";
                    echo "<thead>";
                    echo "<th>"."id"."</th>";
                    echo "</thead>";
                    echo "<tbody>";



    ?>
    
</body>

</html>


    


