<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Вторая Лабораторная Работа</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <div class="head">
        <h2>Лабораторная работа №2</h2>
    </div>
    <div class="container">
        <form method="" action = "">

            <table>
                <tr>
                    <td>Введите пару элементов:</td>
                    <td><input type="text" size="70" id ="pair"></td>
                </tr>
                
                <tr>
                    <td colspan = "2"><input type = "button" onclick="main()" value = "Рассчитать"></button>
                </tr>
                <tr class = "answ">
                    <td colspan = "2">
                    <div id="matrix"></div> 
                    <div id="reflection"></div>
                    <div id="symmetry"></div>
                    <div id="antisymmetry"></div>
                    <div id="transitivity"></div>
                </tr>
            </table>
    </div>
    <script src="./script/script.js"></script>
</body>
</html>