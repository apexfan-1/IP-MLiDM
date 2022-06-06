<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Галерея</title>
    <link rel="stylesheet" href="styles/gallery.css">
</head>
<body>
    <?php include_once "header.php"?>
    <main>
        <div class="container">
            <div class = "slider">
                <div class="line">
                    <img src="./image/_23.jpg" alt="">
                    <img src="./image/1623792207_5-oir_mobi-p-letnie-peizazhi-s-domami-priroda-krasivo-f-6.jpg" alt="">
                    <img src="./image/imth33oc388001.jpg" alt="">
                    <img src="./image/lake-3593379_960_720.webp" alt="">
                    <img src="./image/53_b93ce5a20c6e5458391137b298493c3d.jpg" alt="">
                </div>
            </div>

            <button class="prev">Предыдущая</button>
            <button class = "next">Следующая</button>
        </div>
    </main>
    <script src = "script/scpipt.js"></script>
    <script src = "script/gallery.js"></script>
</body>
</html>