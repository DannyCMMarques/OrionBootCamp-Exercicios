//1 - Criar uma função que retorne a quantidade de vogais da palavra passada.
export var contadorDeVogais = function (palavra) {
  var quantidade = 0;
  if (palavra === undefined || palavra === null) return "Insira uma palavra.";
  var arrayVogais = ["a", "e", "i", "o", "u"];
  var quantidadeVogais = [];
  var palavraPadronizada = palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  var arrayLetras = palavraPadronizada.split("");
  var _loop_1 = function (i) {
    var vogal = arrayVogais[i];
    var filtrarVogais = arrayLetras.filter(function (letra) {
      return !letra.toLowerCase().localeCompare(vogal);
    });
    if (filtrarVogais.length !== 0) {
      quantidadeVogais.push(filtrarVogais.length);
    }
  };
  for (var i = 0; i < arrayVogais.length; i++) {
    _loop_1(i);
  }
  if (quantidadeVogais.length > 0) {
    quantidade = quantidadeVogais.reduce(function (acc, item) {
      return acc + (item || 0);
    }, 0);
  } else if (quantidadeVogais.length === 1) {
    quantidade = quantidadeVogais[0];
    quantidade = 0;
  }
  return quantidade;
};
