function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]");
  document.getElementById("carrinho").classList.remove("right-[-360px]");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}
export function adicionarAoCarrinho() {
  const containerProdutosCarrinho = document.getElementById(
    produtos - carrinho
  );
  const cartaoProdutoCarrinho = ` <article class=" flex bg-slate-300 rounded-lg p-1 relative">
     <button id="fechar-item" aria-label="Fechar item"
       class="absolute top-0 right-1">
          <i class="fa-solid fa-circle-xmark text-slate-400
           hover:text-slate-500 ">
          </i>
    </button>
    <img src="./assets/img/product-1.png" 
      alt="Carrinho: Anel de Coração"
      class="h-24 rounded-lg"
    />
    <div class="py-1 px-1">
      <p class="text-slate-700 text-sm">Anel de Coração</p>
      <p class="text-slate-400 text-xs">Tamanho: 17</p>
      <p class="text-green-700">$70</p>
    </div>      
   </article>`;
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
  console.log("Adicionar ao carrinho clicado!");
}
