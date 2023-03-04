// dom manuplation 

//event listner 
//onclick 
//adding event listiner in java script 

// element.addEventListener('click', function);


//click
const btn2 = document.querySelector('.btn-2');

function alertbtn(){
    alert('i also love javascript');
}

btn2.addEventListener("click", alertbtn);

// mouse Over

const btn3 = document.querySelector('.btn-3');
const box3 = document.querySelector('.box-3');
function changeBgColor(){
    box3.style.backgroundColor = 'blue';
}
btn3.addEventListener('mouseover', changeBgColor);

