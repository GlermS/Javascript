//Alteração do título da página
document.title = "3, 5 e 7";

//Alteração do título do conteúdo
var titulosH1 = document.getElementsByTagName("h1");
titulosH1[0].innerText = "Multiplos de 3, 5 e 7";

//Remoção o texto padrão
var paragrafos = document.getElementsByTagName("p");
paragrafos[0].parentNode.removeChild(paragrafos[0]);

const divisores = [2, 10, 33];
//criando elementos para receber vos valores
for (let i in divisores){
  //criando elementos
  let elementoDiv = document.createElement("div");
  let elementoH2 = document.createElement("h2");
  let elementoP = document.createElement("p");

  elementoH2.innerText = "Multiplos de "+divisores[i];

  //marcando o parágrafo para receber os valores
  elementoP.id = divisores[i];

  //posicionando os elementos na página
  elementoDiv.insertAdjacentElement('beforeend', elementoH2);
  elementoDiv.insertAdjacentElement('beforeend', elementoP);
  document.body.insertAdjacentElement('beforeend', elementoDiv);
}

//percorrendo os valores entre 100 e 200
var contador = 100;
while (contador <= 200){

  //verificando os se o valor é divisível por cada uma das opções na lista 
  for (let i in divisores){
    if (contador%divisores[i]==0){

      //adicionando o valor que é divisível ao texto no elemento "p" correspondente
      let paragrafo = document.getElementById(divisores[i]);
      paragrafo.innerText = paragrafo.innerText + " " + contador;
    }
  }

  contador++;
}

