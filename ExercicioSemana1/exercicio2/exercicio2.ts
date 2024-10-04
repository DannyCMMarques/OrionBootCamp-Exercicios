import { lista } from './arrayLista';

         // versão paradigmas Imperativos

// a) Crie uma função que retorne a bio do id passado

export const identificandoBioImp = (id: number) => {
  if (!!lista.find((item) => item.id === id) === false) {
    return "ID inválido";
  }
  for (let index = 0; index < lista.length; index++) {
    if (lista[index].id === id) {
      return lista[index].bio;
    }
  }
};

// b) Crie uma função que retorne o name do id passado

export const identificandoNomeImper = (id: number) => {
  if (!!lista.find((item) => item.id === id) === false) {
    return "ID inválido";
  }
  for (let index = 0; index < lista.length; index++) {
    if (lista[index].id === id) {
      return lista[index].name;
    }
  }
};

// c) Crie uma função que apague um item da lista a partir de um id passado

export const apagarItem = (id: number) => {
  if (!!lista.find((item) => item.id === id) === false) {
    return "ID inválido";
  }
  const ID: any = lista.find((item) => item.id === id);
  const index = lista.indexOf(ID);
  lista.splice(index, 1);
  return lista;
};

// d) Crie uma função que altere a bio ou o name a partir de um id passado

export const alterarBioNomeImp = (
  id: number,
  itemAlterado: "bio" | "nome",
  novoConteudo: string
) => {
  if (!!lista.find((item) => item.id === id) === false) {
    return "ID inválido";
  }
  let index = lista.findIndex((item) => item.id === id);
  lista[index][itemAlterado] = novoConteudo;
  return lista;
};
// e) Crie uma função que retorne a lista ordenada pelo nome dos itens

export const ordenarLista = () => {
  lista.sort((a, b) => a.name.localeCompare(b.name));
  return lista;
};

//console para testar as funções:
console.log(identificandoBioImp(2));
console.log(identificandoNomeImper(2));
console.log(apagarItem(2));
console.log(alterarBioNomeImp(4, "nome", "Jane"));
console.log(ordenarLista());

