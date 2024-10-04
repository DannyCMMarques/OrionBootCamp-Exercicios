import { lista } from './arrayLista';

// a) Crie uma função que retorne a bio do id passado

const identificandoBioFunc = (id: number) => {
  if (!!lista.find((item) => item.id === id) === false) {
    return "ID inválido";
  }
  const bioSelecionada = lista
    .filter((item) => item.id === id)
    .map((item) => item.bio)
    .shift();
  return bioSelecionada;
};

// b) Crie uma função que retorne o name do id passado

const identificandoNome = (id: number) => {
  if (!!lista.find((item) => item.id === id) === false) {
    return "ID inválido";
  }
  const nomeSelecionado = lista
    .filter((item) => item.id === id)
    .map((item) => item.name)
    .shift();
  return nomeSelecionado;
};

// c) Crie uma função que apague um item da lista a partir de um id passado

const eliminarItem = (id: number) => {
  if (!!lista.find((item) => item.id === id) === false) {
    return "ID inválido";
  }
  const novoArray = lista.filter((item) => item.id !== id);
  return novoArray;
};

// d) Crie uma função que altere a bio ou o name a partir de um id passado

const alterarBioNome = (
  id: number,
  itemAlterado: "bio" | "nome",
  novoConteudo: string
) => {
  if (!!lista.find((item) => item.id === id) === false) {
    return "ID inválido";
  }
  const novaLista = lista.map((lista) => {
    if (lista.id === id) {
      if (itemAlterado === "bio") {
        lista.bio = novoConteudo;
        return lista;
      } else {
        lista.name = novoConteudo;
        return lista;
      }
    } else return lista;
  });
  return novaLista;
};

// e) Crie uma função que retorne a lista ordenada pelo nome dos itens

const ordenarListaFuncional = () => {
  const novoArrayOrdenado = [...lista].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return novoArrayOrdenado;
};

// Demonstração
console.log(identificandoBioFunc(2));
console.log(identificandoNome(2));
console.log(eliminarItem(1));
console.log(alterarBioNome(4, "nome", "Jane"));
console.log(ordenarListaFuncional());
