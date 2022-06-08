<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Третья лабораторная</title>
</head>
<body>
            <h1>Лабораторная работа 3</h1>
            <h3>Первое множество:</h3>
            <input type="text"  id="set1" placeholder = "Пример ввода: 4 5 6 7"/> <br>
            <h3>Второе множество:</h3>
            <input type="text"  id="set2" placeholder = "Пример ввода: a b c d"/> <br>
            <h3>Третье множество:</h3>
            <textarea type="text"  id="array"placeholder = "Пример ввода:
            4 a 
            5 b 
            6 c"></textarea> <br>
            <input type="button"  value="Проверить" onclick="main();"/><br>
            <h3 class="matr">Матрица отношений:</h2><br>
            <div class="matrix1">
                    <p id="results1"></p>
                    <p id="results2"></p>
                    <p id="results3"></p>
                    <p id="results4"></p>
            </div>
            <h3 class="matr">Проверка на функцию:</h2> <br>
                <div class="res">
                    <p id="AB"></p>
                    <p id="BA"></p>
            </div>
    <script src="./script/laba3.js"></script>
</body>
</html>