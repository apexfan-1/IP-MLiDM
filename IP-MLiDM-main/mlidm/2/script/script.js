function check(txt)
{
    isTrue = true;
    if (txt.value == ""){
        alert("Введите хотя бы одну пару");
        isTrue = false;
    }
    let matrixElem = txt.value.split(", ");
    let matrixPairs = new Array(matrixElem.length);
    for(let i = 0; i < matrixElem.length; i++) {
        matrixPairs[i] = matrixElem[i].split(" ");
        if(matrixPairs[i].length > 2) {
            alert("Количество элементов: " + matrixPairs[x].length + ", а должна 2");
            isTrue = false;
            break;
        }

    }
    if(isTrue)
        return matrixPairs;
    else
        return false;
}
function unique(pivot)
{
    let mass1 = [];
    let mass2 = [];
    let j = 0;
    for (let i = 0; i < pivot.length;i++){
        temp = pivot[i]
        if(mass1[temp] !== 1){
            mass1[temp] = 1;
            mass2[j++] = temp;
        }
    }
    return mass2
}
function reflective(matrix)
{
    let reflective = true;
    for(let i = 0; i < matrix.length; i++)
        if(matrix[i][i] == 0){
            reflective = false;
            break;
        }
    return reflective;
}

function symmetric(matrix)
{
    let symmetric  = true;
    for(let i = 0; i < matrix.length; i++)
        for(let j = 0; j < matrix[i].length; j++)
            if(matrix[i][j] != matrix[j][i])
            {
                symmetric  = false;
                break;
            }

    return symmetric;
}
function transitive (matrix)
{
    let transitive = true;
    for(let i = 0; i < matrix.length && transitive == true; i++)
        for(let j = 0; j < matrix[i].length && transitive == true; j++)
        {
            if(matrix[i][j] == 1)
            {
                for(let z = 0; z < matrix.length && transitive  == true; z++)
                {
                    if(matrix[j][z] == 1 && matrix[i][z] != 1)
                    {
                        transitive = false;
                        break;
                    }
                }
            }
        }
    return transitive;
}
function antisymmetric(matrix)
{
    let antisymmetric = true;
    for(let i = 0; i < matrix.length && antisymmetric == true; i++)
        for(let j = 0; j < matrix[i].length && antisymmetric == true; j++)
        {
            if(matrix[i][j] == 1 && matrix[j][i] == 1 && i != j)
            {
                antisymmetric = false;
                break;
            }
        }
    return antisymmetric;
}
function id(pivot,elem) // айди в оси
{
    let id = -1;
    for(let i = 0; i < pivot.length;i++)
        if(pivot[i] == elem)
        {
            id = i;
            break;
        }
    return id;
}
function main(){
    let element = document.getElementById("pair");
    let elemMatrix = document.getElementById("matrix");
    let reflect = " "
    let symm = " "
    let trans = " "
    antisymm = " "
    let pair = check(element);
    let pivot = new Array(pair.length * pair[0].length);
    for(let i = 0; i < pair.length;i++)
        for(let j = 0; j < pair[i].length;j++){
            pivot[j + i * pair[i].length] =  pair[i][j];
        }
    
    pivot = unique(pivot);
    pivot.sort();
    let matrix = new Array(pivot.length);
    for(let i = 0; i < pivot.length; i++)
    {
        matrix[i] = new Array(pivot.length);
        for(let j = 0; j < pivot.length; j++)
            matrix[i][j] = 0;
    }
    for(let i = 0; i < pair.length; i++)
    {
        let x = id(pivot, pair[i][0]);
        let y = id(pivot, pair[i][1]);
        matrix[x][y] = 1;
    }
    elemMatrix.innerHTML = "";
    for(let y = 0; y < pivot.length; y++)
    {
        for(let x = 0; x < pivot.length; x++)
            elemMatrix.innerHTML += matrix[x][y] + " ";
        elemMatrix.innerHTML += "<br>";
    }
    if (reflective(matrix))
    {
        document.getElementById("reflection").innerHTML = "Рефлективно"
    }else{
        document.getElementById("reflection").innerHTML = "Не рефлективно"
    }
    if (symmetric(matrix))
    {
        document.getElementById("symmetry").innerHTML  = "Симметрично"
    }else{
        document.getElementById("symmetry").innerHTML = "Не симметрично"
    }
    if(antisymmetric(matrix))
    {
        document.getElementById("antisymmetry").innerHTML = "Антисимметрично"
    }else{
        document.getElementById("antisymmetry").innerHTML = "Не антисимметрично"
    }
    if(transitive(matrix))
    {
        document.getElementById("transitivity").innerHTML = "Транзитивно"
    }else{
        document.getElementById("transitivity").innerHTML = "Не транзитивно"
    }

}