var botoes = document.querySelectorAll(".botao");
var display = document.querySelector(".display");
var botaoVisual = document.querySelector(".botao__muda-visual");
var iluminacao = document.querySelectorAll(".iluminados");
var principal = document.querySelector(".principal");
var modo = "azul";
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

botaoVisual.addEventListener("click",()=>{
    if(modo == "azul"){
        iluminacao.forEach(botao=>{
            botao.classList.add("iluminados__red");
        })
        principal.classList.add("principal__red");
        modo = "vermelho";
    }else if(modo == "vermelho"){
        iluminacao.forEach(botao=>{
            botao.classList.add("iluminados__green");
        })
        principal.classList.add("principal__green");
        modo = "verde";
    }else if("verde"){
        iluminacao.forEach(botao=>{
            botao.classList.remove("iluminados__red");
            botao.classList.remove("iluminados__green");
        })
        principal.classList.remove("principal__red");
        principal.classList.remove("principal__green");
        modo = "azul";
    }


})