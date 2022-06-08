let error_text,mass_1,mass_2;
let temp;
    



//ibjc  с - цифра, b-буква, i -четная цифра.j-нечетная
function count(mass, element)
{
    let count = 0;
    for(let i=0; i<mass.length; i++)
        if( mass[i] == element)
            count++;
    return count;
}

function validate(str)
{
    let mass = false;
    if(str.length>0)
    {
        mass = str.split(" ");
        for(let i=0; i< mass.length; i++)
            if( (mass[i][0] % 2 != 0) || (mass[i][1]<'a' || mass[i][1]>'z') || (mass[i][2] % 2 === 0) || isNaN(mass[i][3]))
            {
                error_text = 'Ошибка при вводе массива: '+str+' В элементе '+ mass[i];
                alert(error_text)
                mass = false;
                break;
            }
        
        for(let i=0; i< mass.length; i++)
            if(count(mass, mass[i])>1) {
                mass.splice(i, 1);
                i--;
        }
        
        
    }
    else{
        error_text = 'Массив не должен быть пустым';
        alert(error_text);
    }
        
    return mass;
}


function uni(mass1,mass2){
    temp = mass1;
    
        for (let i = 0; i < mass2.length;i++){
            if (mass1[i] == mass2[i]){
                break;
            }
            if (temp.includes(mass2) === false){
                temp.push(mass2[i]);
            }
    }
    document.getElementById("OutputText").innerText = "Результат: " +  temp;
}

function intersect(mass1,mass2){
    temp = [];
    for (let i = 0; i < mass2.length;i++){
        if (mass2.includes(mass1[i]) === true && temp.includes(mass1[i]) == false){
            temp.push(mass1[i]);
        }
    }
    document.getElementById("OutputText").innerText = "Результат: " +  temp;
}

function ab(mass1,mass2){
    temp = [];
    for(let i = 0; i < mass2.length; i++){
        if (mass1.indexOf(mass2[i] == -1)){
            temp.push(mass2[i]);
        }
    }
    
    document.getElementById("OutputText").innerText = "Результат: " +  temp;
    return temp;
}
function ba(mass1,mass2){
    temp = [];
    for(let i = 0; i < mass1.length; i++){
        if (mass2.indexOf(mass1[i] == -1)){
            temp.push(mass1[i]);
        }
    }
    
    document.getElementById("OutputText").innerText = "Результат: " +  temp;
    return temp;
    
}

function diff(mass1,mass2){
    temp = "";
    temp = ab(mass1,mass2) + " " + ba(mass1,mass2);
    document.getElementById("OutputText").innerText = "Результат: " +  temp;
}

function main(){
    var a =document.getElementById('mass1');
    var b =document.getElementById('mass2');
    mass_1 = validate(a.value);
    mass_2 = validate(b.value);
}

function uniact(){
    main();
    uni(mass_1,mass_2);
}
function intersectAct(){
    main();
    intersect(mass_1,mass_2);
}
function abAct(){
    main();
    ab(mass_1,mass_2);
}
function baAct(){
    main();
    ba(mass_1,mass_2);
}
function diffAct(){
    main();
    diff(mass_1,mass_2);
}