export var contadorDeVogais = function (palavra) {
  var frase = "";
  if (palavra == undefined || null) return (frase = "Insira uma palavra.");
  var arrayVogais = ["a", "e", "i", "o", "u"];
  var quantidadeVogais = [];
  var palavraPadronizada = palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  var arrayLetras = palavraPadronizada.split("");
  var _loop_1 = function (i) {
    var vogais = arrayVogais[i];
    var filtrarVogais = arrayLetras.filter(function (letras) {
      return !letras.toLowerCase().localeCompare(vogais);
    });
    if (filtrarVogais.length !== 0) {
      quantidadeVogais.push({
        vogais: filtrarVogais.shift(),
        quantidade: filtrarVogais.length + 1,
      });
    }
  };
  for (var i = 0; i < arrayVogais.length; i++) {
    _loop_1(i);
  }
  if (quantidadeVogais.length !== 0) {
    var vogaisEQuantidade = quantidadeVogais.map(function (item) {
      var _a;
      return "Possui "
        .concat(item.quantidade, " ")
        .concat(item.quantidade > 1 ? "letras" : "letra", " ")
        .concat(
          (_a = item.vogais) !== null && _a !== void 0 ? _a : "".toUpperCase()
        );
    });
    if (vogaisEQuantidade.length > 1) {
      frase =
        vogaisEQuantidade.slice(0, -1).join(", ") +
        " e " +
        vogaisEQuantidade[vogaisEQuantidade.length - 1] +
        ".";
    } else {
      frase = vogaisEQuantidade[0] + ".";
    }
  } else {
    frase = "A palavra não possui vogais.";
  }
  return frase;
};
