<?php
    include_once 'scripts/mod.php';
?>

<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>Лабораторная работа #5</title>
        <link href="styles/style.css" rel="stylesheet">
        <script src="scripts/mod.js"></script>
        <script src="scripts/jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <h1>Лабораторная работа #5</h1>
        <div id="inputView">
            <form action="" method="post" enctype="multipart/form-data" onsubmit="return false;">
                <div id="graphView">
                    <label for="txtAr">Ввод матрицы смежности: </label>
                    <textarea id="txtAr" spellcheck="false" placeholder="1 * 0 *
                                                                         1 0 1 *
                                                                         * * 0 *
                                                                         0 1 * 1" name="graph"></textarea>
                </div>
                <div id="commitView">
                    <button id="commit" type="submit" name="commit" onclick="doCommit();">Анализ по Уоршеллу</button>
                </div>
            </form>
        </div>
        <div id="resultView"></div>
    </body>
</html>
