/*
    Objetivo 1 - quando o usuário clicar no botão de Mostrar Mais deve abrir os projetos que estão escondidos no HTML 
        Passo 1 - pegar o botão Mostrar Mais no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique do botão

        passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão e esconder ele
*/

// Obejetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML

// Passo 1 - pegar botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click',() => {
    // passo 3 - adicionar a classe "ativo" nos projetos escondidos
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });

    // esconder o botão
    botaoMostrarProjetos.classList.add("remover");

});