<?php
    header("Content-type: application/json");

    include_once 'model/produitModel.php';

    function allProductAction(){
        $products = getProducts();
        $productsJSON = json_encode($products);
        if ($productsJSON === false) {
            $jsonError = json_last_error_msg();
            echo "JSON encoding error: $jsonError";
        } else {
            return $productsJSON;
        }
    }
    function productByIdAction($id){
        $product = getProductById($id);
        $productJSON = json_encode($product);
        return $productJSON;
    }
    function productByUserIdAction($user){
        $products = getProductByUserId($user);
        $productsJSON = json_encode($products);
        return $productsJSON;
    }
?>