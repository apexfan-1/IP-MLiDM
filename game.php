<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Крестики нолики</title>
    <link rel="stylesheet" href="./styles/game.css">
</head>
<body>
    <div class="content">
    <div class="currentPlayer">
            <span>Сейчас ходит: <span id="curPlyr">X</span></span>
        </div>

        <div id="area"></div>

        <div class="stat">
            <table>
                <th colspan="2">Статистика</th>
                <tr>
                    <td>X</td>
                    <td><span id="sX">0</span></td>
                </tr>
                <tr>
                    <td>O</td>
                    <td><span id="sO">0</span></td>
                </tr>
                <tr>
                    <td>Ничьи</td>
                    <td><span id="sD">0</span></td>
                </tr>
            </table>
        </div>
    </div>

    <script src = "./script/game.js"></script>
</body>
</html>