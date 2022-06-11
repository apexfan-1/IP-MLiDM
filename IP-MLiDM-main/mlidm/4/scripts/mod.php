<?php
    $weightMatrix = [];
    $distMatrix = [];
    $pathMatrix = [];
    $shortestPath = [];

    if (isset($_POST['commit'])) {
        $graph = $_POST['graph'];
        $start = $_POST['start'];
        $end = $_POST['end'];
        analyze();
        
    }

    
    function tableFormat($array, $id) {
        $s = "";

        for ($i = 0; $i < count($array); $i++) {
            $p = '';
            for ($j = 0; $j < count($array[$i]); $j++) {
                $p = $p.'<td>'.$array[$i][$j].'</td>';
            }
            $s = $s.'<tr>'.$p.'</tr>';
        }

        return '<table id="'.$id.'">'.$s.'</table>';
    }

    
    function findPath($start, $end) {
        global $distMatrix, $pathMatrix, $shortestPath;

        if ($distMatrix[$start][$end] == INF) {
            echo '<p id="smthWrong">'."Нет пути с таким началом и концом!".'</p>';
            die();
        }

        while ($end != -1) {
            array_push($shortestPath, $end+1);
            $end = $pathMatrix[$start][$end];
        }

        $shortestPath = array_reverse($shortestPath);
    }

    
    function initPathMatrix() {
        global $weightMatrix, $pathMatrix;

        for ($i = 0; $i < count($weightMatrix); $i++) {
            for ($j = 0; $j < count($weightMatrix[$i]); $j++) {
                $pathMatrix[$i][$j] = $i;
            }
            $pathMatrix[$i][$i] = -1;
        }
    }

    
    function floyd() {
        global $weightMatrix, $distMatrix, $pathMatrix;

        for ($k = 0; $k < count($weightMatrix); $k++) {
            for ($i = 0; $i < count($weightMatrix); $i++) {
                for ($j = 0; $j < count($weightMatrix); $j++) {
                    if ($weightMatrix[$i][$k]+$weightMatrix[$k][$j] < $weightMatrix[$i][$j]) {
                        $distMatrix[$i][$j] = $weightMatrix[$i][$k]+$weightMatrix[$k][$j];
                        $pathMatrix[$i][$j] = $pathMatrix[$k][$j];
                    }
                }
            }
        }
    }

    
    function validate($start, $end) {
        global $weightMatrix;

        foreach ($weightMatrix as $row) {
            if (count($weightMatrix) != count(array_diff($row, array('NAN')))) {
                echo '<p id="smthWrong">'."Матрица не является квадратной!".'</p>';
                die();
            }
        }

        if (($start <= 0 || $end <= 0) || $start > count($weightMatrix) || $end > count($weightMatrix)) {
            echo '<p id="smthWrong">'."Не может быть такой вершины!".'</p>';
            die();
        }
    }

    function analyze() {
        global $weightMatrix, $distMatrix, $pathMatrix, $shortestPath, $graph, $start, $end;

        
        $rows = explode("\n", $graph);
        for ($i = 0; $i < count($rows); $i++) {
            $cols = explode(" ", $rows[$i]);
            $array_row = [];

            for ($j = 0; $j < count($cols); $j++) {
                if (trim($cols[$j]) == "*") {
                    
                    array_push($array_row, INF);
                } else {
                    
                    array_push($array_row, $cols[$j] != "" ? (int)$cols[$j] : NAN);
                }
            }

            array_push($weightMatrix, $array_row);
        }

        validate($start, $end);
        initPathMatrix();
        $distMatrix = $weightMatrix;
        floyd();
        findPath($start-1, $end-1);

        
        echo '<div id="matricesView">'.
                '<div id="distMtxView">'.
                    '<label class="header">Матрица расстояний</label>'.
                    tableFormat($distMatrix, "distMtx").
                '</div>'.
             '</div>'.
             '<div id="shortView">'.
                '<label class="header">'."Кратчайший путь: ".'</label>'.implode("  ⭢  ", $shortestPath).
             '</div>';
    }

/*
Тестовые данные:
0 8 5
3 0 *
* 2 0

От 1 к 2: 132


Тест #2:
0 1 6 *
* 0 4 8
* * 0 1
* * * 0

От 1 к 4: 1234
*/
?>
