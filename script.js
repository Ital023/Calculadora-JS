var botoes = document.querySelectorAll(".botao");
var display = document.querySelector(".display");

botoes.forEach(botao=>{
    botao.addEventListener("click",(evento)=>{
        var valor = evento.target.textContent;
        if(valor == "CA"){
            limparDisplay(display);
        }else if (valor == ">>"){
            limparBack(display);
        }else if(valor == "="){
            calcular(display);
        }else{
            display.innerHTML += valor;
        }
    })
    document.onkeydown = teclado;
})