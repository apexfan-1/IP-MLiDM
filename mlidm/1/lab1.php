<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Первая лабораторная работа</title>
    <link rel="stylesheet" href="./styles/style.css">
</head>
<body>
    <div class="head">
        <h2>Лабораторная работа №1</h2>
    </div>
    <div class="container">
        <form method="" action = "">

            <table>
                <tr>
                    <td>Первый массив:</td>
                    <td><input type="text" size="70" id ="mass1"></td>
                </tr>
                <tr>
                    <td>Второй массив:</td>
                    <td><input type="text" size="70" id ="mass2"></td>
                </tr>
                <tr class="button">
                        <td colspan="2"> <input type="button" value="Объеденение" onclick="uniact();"/> </td>
                        <td colspan="2"> <input type="button" value="Пересечение" onclick="intersectAct();"/> </td>
                        <td colspan="2"> <input type="button" value="A\B" onclick="abAct();"/> </td>
                        <td colspan="2"> <input type="button" value="B\A" onclick="baAct();"/> </td>
                        <td colspan="2"> <input type="button" value="Симметрическая разность" onclick="diffAct();"/> </td>
                </tr>
                <tr>
                    <td colspan = "2"><output id = "OutputText"></output></td>
                </tr>
            </table>
    </div>
    <script src="./script/script.js"></script>
</body>
</html>