<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
// Vérifie si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupère les données du formulaire
    $prenom = isset($_POST["prenom"]) ? $_POST["prenom"] : "";
    $nom = isset($_POST["nom"]) ? $_POST["nom"] : "";
    $email = isset($_POST["email"]) ? $_POST["email"] : "";
    
    // Connexion à la base de données MySQL
    $con = mysqli_connect("localhost", "root", "", "cv");

    // Vérifier la connexion
    if (!$con) {
        die("Erreur : " . mysqli_connect_error());
    }

    // Échapper les données pour éviter les injections SQL
    $prenom = mysqli_real_escape_string($con, $prenom);
    $nom = mysqli_real_escape_string($con, $nom);
    $email = mysqli_real_escape_string($con, $email);

    // Requête SQL préparée pour insérer les données dans la table appropriée
    $query = "INSERT INTO utilisateur (prenom, nom, email) VALUES (?, ?, ?)";
    $stmt = mysqli_prepare($con, $query);

    // Liage des paramètres
    mysqli_stmt_bind_param($stmt, "sss", $prenom, $nom, $email);

    // Exécution de la requête préparée
    if (mysqli_stmt_execute($stmt)) {
        echo "Enregistrement réussi dans la base de données.";
    } else {
        echo "Erreur lors de l'enregistrement : " . mysqli_error($con);
    }

    // Fermer la connexion à la base de données
    mysqli_close($con);
}
?>
</body>
</html>

<?php
header('Location: default_index.html');
exit();
?>
