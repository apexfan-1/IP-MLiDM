const image = document.querySelectorAll('.slider .line img');
const sliderLine = document.querySelector('.line');
let count = 0;
let width;

function init(){
    console.log('resize');
   width = document.querySelector('.slider').offsetWidth;
   sliderLine.style.width = width*image.length + 'px';
   image.forEach(item =>{
       item.style.width = width + 'px';
       item.style.height = 'auto';
   });
   roll();
}

window.addEventListener('resize', init);
init();

document.querySelector('.next').addEventListener('click',function(){
    count++;
    if (count >= image.length){
        count = 0;
    }
    roll()
});

document.querySelector('.prev').addEventListener('click',function(){
    count--;
    if (count < 0){
        count = image.length - 1;
    }
    roll()
});
function roll(){
    sliderLine.style.transform = 'translate(-' + count * width+'px';
}