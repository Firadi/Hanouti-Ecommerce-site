<?php 
require_once 'controller/produitsController.php';

if (isset($_GET['action'])) {
    $action = $_GET['action'];
    switch ($action) {
        case 'allProduct':
            echo allProductAction();
            break;
        case 'product':
            if(isset($_GET['idProduit']) ){
                $id = $_GET['idProduit'];
                echo productByIdAction($id);
            }
            break;
        case 'productsByUser':
            if(isset($_GET['user'])){
                $user = $_GET['user'];
                echo productByUserIdAction($user);
            }
            break;
                
    }
}
