<?php
// Votre logique de connexion à la base de données (à adapter selon votre configuration)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cv";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupérer les données envoyées en POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $valeur = $_POST['id']; // Assurez-vous de sécuriser cette valeur en fonction de vos besoins

    // Insérez la valeur dans la base de données (exemple très basique)
    $sql = "INSERT INTO visiteur (id) VALUES ('$valeur')";

    if ($conn->query($sql) === TRUE) {
        echo "Données insérées avec succès";
    } else {
        echo "Erreur lors de l'insertion des données : " . $conn->error;
    }
}

$conn->close();
?>
