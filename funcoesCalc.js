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

function teclado(evento){
    var display = document.querySelector(".display");

    if(evento.keyCode == 48 || evento.keyCode == 96){
        display.innerHTML += "0";
    }else if(evento.keyCode == 49 || evento.keyCode == 97){
        display.innerHTML += "1";
    }else if(evento.keyCode == 50 || evento.keyCode == 98){
        display.innerHTML += "2";
    }else if(evento.keyCode == 51 || evento.keyCode == 99){
        display.innerHTML += "3";
    }else if(evento.keyCode == 52 || evento.keyCode == 100){
        display.innerHTML += "4";
    }else if(evento.keyCode == 53 || evento.keyCode == 101){
        display.innerHTML += "5";
    }else if(evento.keyCode == 54 || evento.keyCode == 102){
        display.innerHTML += "6";
    }else if(evento.keyCode == 55 || evento.keyCode == 103){
        display.innerHTML += "7";
    }else if(evento.keyCode == 56 || evento.keyCode == 104){
        display.innerHTML += "8";
    }else if(evento.keyCode == 57 || evento.keyCode == 105){
        display.innerHTML += "9";
    }else if(evento.keyCode == 111){
        display.innerHTML += "/"
    }else if(evento.keyCode == 106){
        display.innerHTML += "*";
    }else if(evento.keyCode == 109){
        display.innerHTML += "-";
    }else if(evento.keyCode == 106){
        display.innerHTML += "*";
    }else if(evento.keyCode == 107){
        display.innerHTML += "+";
    }else if(evento.keyCode == 8){
        limparBack(display);
    }else if(evento.keyCode == 13){
        calcular(display);
    }


}