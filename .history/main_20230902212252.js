
import { inicializarCarrinho } from "./src/menucarrinho";

 const catalogo = [{
    id: 1,
    nome: 'Anel Coração',
    marca: 'Gran Prata',
    preco: 70,
    nomeArquivoImagem: "product-1.png",
  },{
    id: 2,
    nome: 'Colar Cruz',
    marca: 'Gran Prata',
    preco: 120,
    nomeArquivoImagem: "product-2.png",
   },{
    id: 3,
    nome: 'Colar Gota',
    marca: 'Gran Prata',
    preco: 80,
    nomeArquivoImagem: "product-3.png",
  },{
    id: 4,
    nome: 'Colar Praia',
    marca: 'Gran Prata',
    preco: 110,
    nomeArquivoImagem: "product-4.png",
   },{
    id: 5,
    nome: 'Presilha Prata',
    marca: 'Gran Prata',
    preco: 50,
    nomeArquivoImagem: "product-5.png",
  },{
    id: 6,
    nome: 'Corrente Masculina',
    marca: 'Gran Prata',
    preco: 130,
    nomeArquivoImagem: "product-6.png",
   }]

  for (const produtoCatalogo of catalogo){
    const cartaoProduto = `<div class ='border-solid border-2 border-sky-500 w-48 m-2 ' 
    id="card-produto-${produtoCatalogo.id}">
    <img 
    src="./assets/img/${produtoCatalogo.nomeArquivoImagem}" 
    alt="Produto 1 do magazine hashtag."
    style="height: 210px;"
    />
    <p class = "marca">${produtoCatalogo.marca}</p>
    <p>${produtoCatalogo.nome}</p>
    <p>$${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
    </div>`;
    
    document.getElementById("container-produto").innerHTML += cartaoProduto;
 }

 inicializarCarrinho();
