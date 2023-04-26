function limparDisplay(display){
        display.innerHTML = "";
}

function limparBack(display){
    var resultado = document.querySelector(".display").innerHTML;
    display.innerHTML = resultado.substring(0,resultado.length-1); 
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML);
}