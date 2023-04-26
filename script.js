var botoes = document.querySelectorAll(".botao");

botoes.forEach(botao=>{
    botao.addEventListener("click",(evento)=>{
        console.log(evento.target);
    })
})