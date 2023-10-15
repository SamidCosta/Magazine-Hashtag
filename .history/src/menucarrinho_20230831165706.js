// main.js

function abrirCarrinho() {
    document.getElementById("carrinho").classList.add('right-0');
    document.getElementById("carrinho").classList.remove('right-[-360px]');
  }
  
  function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove('right-0');
    document.getElementById("carrinho").classList.add('right-[-360px]');
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
  
    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
  });
  