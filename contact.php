<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    // Connexion à la base de données MySQL
    $con = mysqli_connect("localhost", "root", "", "cv");
    if (mysqli_connect_errno()) {
        echo "Erreur : " . mysqli_connect_error();
        exit(); // Quitte le script en cas d'erreur de connexion
    }

   // Récupération des données soumises par le formulaire
$prenom = $_POST['prenom'];
$nom = $_POST['nom'];
$email = $_POST['email'];

// Requête SQL pour insérer les données dans la table appropriée
$sql = "INSERT INTO utilisateur (prenom,nom, email) VALUES ('$prenom','nom','email')";

//execution
if($mysqli ->query($sql) === TRUE) {
    echo "donnée envoyées ";
} else {
    echo "pas envoyé " . $mysqli -> error;}

    //fermeture de la base de donnée 
    $mysqli ->close();


?>
</body>
</html>