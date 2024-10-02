//1 - Criar uma função que retorne a quantidade de vogais da palavra passada.
type VogalQuantidade = {
  vogais: string | undefined;
  quantidade: number;
};

const contadorDeVogais = (palavra: string): string => {
  let frase = "";
  if (palavra == undefined || null) return (frase = "Insira uma palavra.");

  const arrayVogais: string[] = ["a", "e", "i", "o", "u"];
  const quantidadeVogais: VogalQuantidade[] = [];

  const palavraPadronizada = palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const arrayLetras = palavraPadronizada.split("");

  for (let i = 0; i < arrayVogais.length; i++) {
    const vogais = arrayVogais[i];
    const filtrarVogais = arrayLetras.filter(
      (letras) => !letras.toLowerCase().localeCompare(vogais)
    );
    if (filtrarVogais.length !== 0) {
      quantidadeVogais.push({
        vogais: filtrarVogais.shift(),
        quantidade: filtrarVogais.length + 1,
      });
    }
  }
  if (quantidadeVogais.length !== 0) {
    const vogaisEQuantidade = quantidadeVogais.map((item) => {
      return `Possui ${item.quantidade} ${item.quantidade > 1 ? "letras" : "letra"
        } ${item.vogais ?? ''.toUpperCase()}`;
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
//a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.

console.log(contadorDeVogais("Amêndoas"));

//b) Dar um exemplo de uso com uma palavra recebida via input no formulário.

// simulando uma função ligada ao botão de Submit

const onSubmit = (data: any) => {
  const palavra = data.palavra.value;
  const resultado: string = contadorDeVogais(palavra);
  console.log(11, resultado);
};

// Testes

onSubmit({
  palavra: {
    value: "Amanhã",
  },
});
