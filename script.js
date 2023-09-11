
const conteudo = document.querySelector('.conteudo-principal')
const loginLink = document.querySelector('.login-link')
const cadastroLink = document.querySelector('.registrar-link')
const btnPopup = document.querySelector('.btn-login-popup')
const btnClose = document.querySelector('.ico-close')

cadastroLink.addEventListener('click', () => {
    conteudo.classList.add('active')
});

loginLink.addEventListener('click', () => {
    conteudo.classList.remove('active')
});

btnPopup.addEventListener('click', () => {
    conteudo.classList.add('active-popup')
})

btnClose.addEventListener('click', () => {
    conteudo.classList.remove('active-popup')
})


// MEXENDO COM NAVBAR

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const abas = document.getElementById("abas");

    menuIcon.addEventListener("click", function () {
        abas.classList.toggle("active");

    });

    btnPopup.addEventListener('click', function () {
        abas.classList.remove('active') // Quando aperto no botão de login a aba com os links somem para aparecer nossa tela de login 
    });

    menuIcon.addEventListener('click', function (){
        conteudo.classList.remove('active-popup') // Quando clico no icone de hamburguer o conteúdo que estava na tela some
    })
});
