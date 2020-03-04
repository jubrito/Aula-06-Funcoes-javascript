// ITERAR LISTA COM FOR
let array = ['Bastardos Inglorios', 'KillBill', 'Caes de Aluguel','Pulp Fiction', 'Os 8 odiados', 'O Hostel'];
 
// FOR OF
console.log("---------- Exibindo itens FOR OF ----------");
for(let item of array){
  console.log(item);
}

// FOR IN
console.log("---------- Exibindo itens FOR IN ----------");
for(let indice in array){
  console.log(array[indice])
}

let indice;
console.log("---------- Exibindo itens FOR PADRÃO ----------");
for(indice=0; indice<array.length; indice++){
  console.log(array[indice]);
}


// function nomeDaFuncao(argumentos){
//   return qualquer coisa que envolva os argumentos
// }

/* O método toFixed() formata um número utilizando notação de ponto fixo.
  
  numObj.toFixed([dígitos])

  Digitos (opcional): O número de dígitos que aparecem depois do ponto decimal; valor entre 0 e 20 (se omitido, valor = 0). 
*/

// FUNCTION
function calcMedia(n1,n2,n3){
  return ((n1+n2+n3)/3).toFixed(1)
}

// ARROW FUNCTION
calcMedia = (n1,n2,n3) => {
  return ((n1+n2+n3)/3).toFixed(1)
}

// OBJETO COM ARRAYS
let casa = {
  cozinha: ["fogao", "microondas","agua"],
  sala: ["sofa","televisao"]
} 

// ARRAY DE OBJETOS
let filmes=[
  /* 0 */{titulo:"Star Wars", classificacao: 14},
  /* 1 */{titulo:"Chureki", classificacao: 0},
  /* 2 */{titulo:"Ninja Assassino", classificacao: 18}
]

// COMO ACESSAR OBJETO NA LISTA
filmes[0].classificacao

/* QUAL É A SUA IDADE? 
  condição se a idade for menor ou igual classificacao,
  mostrar o filme disponivel

  ** FERRAMENTAS **
  variavel e prompt
  for in
  if else 

*/













