const buttonIncrease = document.getElementById('btn-increase');
const buttonDecrease = document.getElementById('btn-decrease');
const buttonReset = document.getElementById('btn-reset');
let counter = 0;

buttonIncrease.addEventListener('click', () =>{
    counter++;
    increaseValue();
})
function increaseValue(){
    let id = document.getElementById('numero');
    id.textContent = counter;
}


buttonDecrease.addEventListener('click', () =>{
    counter--;
    decreaseValue();
})
function decreaseValue(){
    let id = document.getElementById('numero');
    
    if(id.textContent > '0'){
        id.textContent = counter;
        
    }else{
        alert('no counter negative');
    }
}

buttonReset.addEventListener('click', () => {
   resetValues();
})
function resetValues(){
    let id = document.getElementById('numero');
    id.textContent = counter = 0;
}