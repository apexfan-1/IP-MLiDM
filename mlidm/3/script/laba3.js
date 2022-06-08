let error;
function delRepeat(arr)
{
    arr.sort()
    for (i = 0; i < arr.length - 1;i++)
    {
        if (arr[i] === arr[i+1])
        {
            arr.splice(i,1);
            i--;
        }
    }
}
function checkRatio(txt)
{
    let array = false;
    let str;

    if (txt.value.length > 0)
    {
        array = new Array();
        str = txt.value.split('\n');

        for (i = 0; i < str.length; i++)
        {
            if (str[i].length > 0)
            {
                array[i] = str[i].split(' ');
                
            }else
            {
                
                error = "Какая то строка пустая"
            }

        }
    }else
    {
        error = "Должно быть введено хотя бы одно отношение";
    }
    
    return array;
}



function checkSet(str)
{
    let array = false;
    if (str.value.length > 0)
    {
        array = str.value.split(" ");
        delRepeat(array);
    }else
    {
        error = "Должен быть введен хотя бы один элемент";
    }
    
    return array;
}
function check(set1, set2, ratio){
    let flagcheck = true;

    for(let i = 0; i < ratio.length; i++){
        if(flagcheck == true){
            flagcheck = set1.includes(ratio[i][0]);
            if(flagcheck == false){
                error = "Ошибка: введен элемент, которго нет в одном из множеств";
                break
            }
        }
    }

    if(flagcheck == true){
        for(let i = 0; i < ratio.length;i++){
            if(flagcheck == true){
                flagcheck = set2.includes(ratio[i][1]);
                if(flagcheck == false){
                    error = "Ошибка: введен элемент, которго нет в одном из множеств";
                    break
                }
            }
        }
    }

    return flagcheck;
}

function main()
{
    let output;
    let set1 = document.getElementById('set1');
    let set2 = document.getElementById('set2');
    let ratio = document.getElementById('array');
    let flagA = true;
    let flagB = true;
    let sumA = 0;
    let sumB = 0;
    let resultArray = [
        [0, 0, 0, 0], 
        [0, 0, 0, 0], 
        [0, 0, 0, 0], 
        [0, 0, 0, 0]
    ];
    set1 = checkSet(set1);
    set2 = checkSet(set2);
    ratio = checkRatio(ratio);
    for (let i = 0; i < ratio.length; i++){
        if (Array.from(set1).indexOf(ratio[i][0]) >= 0 && Array.from(set2).indexOf(ratio[i][1]) >= 0) {
            resultArray[Array.from(set1).indexOf(ratio[i][0])][Array.from(set2).indexOf(ratio[i][1])] = 1;
        }
    }
    
    for (let i = 0; i < resultArray.length; i++){
            sumA = 0;
            sumB = 0;
        for (let j = 0; j < resultArray[i].length; j++){
                sumA += resultArray[i][j];
                sumB += resultArray[j][i];
        }
            
        if (sumA != 1) {
                flagA = false;
        }
        if (sumB != 1) {
                flagB = false;
        }
    }
    if (!check(set1,set2,ratio)){
        alert(error);
    }else
    {
        for (let i = 1; i < resultArray.length + 1; i++){
            document.getElementById('results' + i).innerHTML = resultArray[i - 1] + " ";
        }
        if (flagA) {
            document.getElementById('AB').innerHTML = "Отношение является функцией (A к B)";
        }
        else {
            document.getElementById('AB').innerHTML = "Отношение не является функцией (A к B)";
        }
        if (flagB) {
            document.getElementById('BA').innerHTML = "Отношение является функцией (B к A)";
        }
        else {
            document.getElementById('BA').innerHTML = "Отношение не является функцией (B к A)";
        }
    }
    console.log(resultArray,flagA,flagB);
}