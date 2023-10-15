function abrirCarrinho (){
    document.getElementById("carrinho").classList.add('right -[0px]');
    document.getElementById("carrinho").classList.remove('right -[-360px]');
}
function fecharCarrinho (){
   document.getElementById("carrinho").classList.remove('right -[0px]');
   document.getElementById("carrinho").classList.add('right -[-360px]');
}
