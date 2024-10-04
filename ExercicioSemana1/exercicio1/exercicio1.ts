//1 - Criar uma função que retorne a quantidade de vogais da palavra passada.


const contadorDeVogais = (palavra: string): number | string => {
  let quantidade: number= 0;

  if (palavra === undefined || palavra === null) return "Insira uma palavra.";

  const arrayVogais: string[] = ["a", "e", "i", "o", "u"];
  const quantidadeVogais: number[] = [];

  const palavraPadronizada = palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const arrayLetras = palavraPadronizada.split("");

  for (let i = 0; i < arrayVogais.length; i++) {
    const vogal = arrayVogais[i];
    const filtrarVogais = arrayLetras.filter(
      (letra) => !letra.toLowerCase().localeCompare(vogal)
    );

    if (filtrarVogais.length !== 0) {
      quantidadeVogais.push(filtrarVogais.length);
    }
  }

  if (quantidadeVogais.length > 0) {
    quantidade = quantidadeVogais.reduce((acc, item) => acc + (item || 0), 0);
  } else if (quantidadeVogais.length === 1) {
    quantidade = quantidadeVogais[0];
    quantidade = 0;
  }

  return quantidade;
};
//a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.

console.log(contadorDeVogais("Amêndoas"));

//b) Dar um exemplo de uso com uma palavra recebida via input no formulário.

// simulando uma função ligada ao botão de Submit

   const onSubmit = (event: Event) => {
            event.preventDefault();
            const data = event.target as HTMLFormElement;
            const palavra = (data.querySelector('#palavra') as HTMLInputElement).value;
            const resultado = contadorDeVogais(palavra);
            const divResultado = document.getElementById('resultado') as HTMLDivElement;

            divResultado.textContent = resultado;
            data.reset();
        }


