//Alterando o primeiro parágrafo
var elementosP = document.getElementsByTagName("p");
elementosP[0].innerText = "Pares e impares de 1 a 10:"

//Contando os números de 1 a 10
for (let numero = 1; numero<=10; numero++){
  //Criando parágrafo para receber o número
  let paragrafo = document.createElement("p");
  paragrafo.innerText = numero;
  
  //Verificando se o número é par ou impar
  if (numero%2 == 0){
    paragrafo.style.color="blue";
  }else{
     paragrafo.style.color="red";
  }
  
  //Posicionando o parágrafo
  document.body.insertAdjacentElement("beforeend", paragrafo)
}