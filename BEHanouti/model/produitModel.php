<?php 

function databaseConnection(){

    try {
        $pdo = new PDO("mysql:host=localhost;dbname=hanouti", 'root', '');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo "Connected successfully";
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
    return $pdo;
}

function getProducts(){
    $pdo = databaseConnection();
    return $produits = $pdo->query('SELECT `id`, `title`, `owner`, `rating`, `price`, `priceSOLD` FROM `produits`')->fetchAll(PDO::FETCH_OBJ);
}
function getProductById($id){
    $pdo = databaseConnection();
    $stm = $pdo->prepare('SELECT `id`, `title`, `owner`, `rating`, `price`, `priceSOLD` FROM `produits` WHERE id =:id');
    $stm->execute([
        "id" => $id
    ]);
    return $stm->fetchAll(PDO::FETCH_OBJ);
}
function getProductByUserId($user){
    $pdo = databaseConnection();
    $stm = $pdo->prepare('SELECT `id`, `title`, `owner`, `rating`, `price`, `priceSOLD` FROM `produits` WHERE `owner` = :user');
    $stm->execute([
        "user" => $user
    ]);
    return $stm->fetchAll(PDO::FETCH_OBJ);
}

?>