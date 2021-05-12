// Iniciar estrutura de repetição para contagem
for (let count = 1; count <=6; count++){
  //criando novo elemento do tipo p
  let novoParagrafo = document.createElement("p")
  novoParagrafo.innerText = count
  
  //inserindo novo element no final do body
  document.body.insertAdjacentElement("beforeEnd", novoParagrafo);
}
