<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Principal</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../assets/css/styles_index.css">
   <!--<link rel="stylesheet" href="bootstrap.min.css">-->     
    </head>
    <body>


        <button id="toggleDarkMode"><img src="../assets/img/icons8-soleil.svg" alt=""> <p>/</p> <img src="../assets/img/icons8-lune-et-étoiles-40.png" alt=""> </button>

<div class="cardTwo">
    <form action="">
        <div class="search">
            <input form="GET" type="text" class="search-bar" id="inputCity" placeholder="Search">
            <button class="btn btn-outline-dark" type="submit" > <img src="../assets/img/KEY0.CC-Barre-de-recherche-ouverte-Icône-de-barre-de-recherche-blanche (2).png" alt=""></button>
        </div>
    </form>

<div class="infoville"></div>

    <div class="weather">
        <h2 class="city"></h2>
        <h1 class="temp"></h1>
        <div class="flex"></div>
        <img src="" alt="" class="icon">
        <div class="main"></div>
        <div class="description"></div>
        <div class="flex"></div>
        <div class="humidity"></div>
        <div class="wind"></div>
        <div class="info"></div>
        <div class="pollution"></div>

    </div>


</div>


<div class="card">
    <div class="hourly"></div>
</div>

<div class="daily"></div>


<script type="module" src="../assets/js/main.js"></script>


    </body>
</html>