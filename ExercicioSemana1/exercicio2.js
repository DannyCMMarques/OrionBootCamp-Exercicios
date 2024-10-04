export var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
export var lista = [
  {
    id: 1,
    name: "Ada Lovelace",
    bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
  },
  {
    id: 2,
    name: "Alan Turing",
    bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial",
  },
  {
    id: 3,
    name: "Nikola Tesla",
    bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
  },
  {
    id: 4,
    name: "Nicolau Copérnico",
    bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
  },
];
// a) Crie uma função que retorne a bio do id passado
//paradigma funcional
export var identificandoBioFunc = function (id) {
  if (
    !!lista.find(function (item) {
      return item.id === id;
    }) === false
  ) {
    return "ID inválido";
  }
  var bioSelecionada = lista
    .filter(function (item) {
      return item.id === id;
    })
    .map(function (item) {
      return item.bio;
    })
    .shift();
  return bioSelecionada;
};
// paradigma imperativo
export var identificandoBioImp = function (id) {
  if (
    !!lista.find(function (item) {
      return item.id === id;
    }) === false
  ) {
    return "ID inválido";
  }
  for (var index = 0; index < lista.length; index++) {
    if (lista[index].id === id) {
      return lista[index].bio;
    }
  }
};
// b) Crie uma função que retorne o name do id passado
//paradigma funcional
export var identificandoNome = function (id) {
  if (
    !!lista.find(function (item) {
      return item.id === id;
    }) === false
  ) {
    return "ID inválido";
  }

  var nomeSelecionado = lista
    .filter(function (item) {
      return item.id === id;
    })
    .map(function (item) {
      return item.name;
    })
    .shift();
  return nomeSelecionado;
};
//paradigma imperativo
export var identificandoNomeImper = function (id) {
  if (
    !!lista.find(function (item) {
      return item.id === id;
    }) === false
  ) {
    return "ID inválido";
  }
  for (var index = 0; index < lista.length; index++) {
    if (lista[index].id === id) {
      return lista[index].name;
    }
  }
};
// c) Crie uma função que apague um item da lista a partir de um id passado
//paradigma imperativo
export var apagarItem = function (id) {
  if (
    !!lista.find(function (item) {
      return item.id === id;
    }) === false
  ) {
    return "ID inválido";
  }
  const ID = lista.find((item) => item.id === id);
  const index = lista.indexOf(ID);
  lista.splice(index, 1);
  return lista;
};
//paradigma funcional
var eliminarItem = function (id) {
  if (
    !!lista.find(function (item) {
      return item.id === id;
    }) === false
  ) {
    return "ID inválido";
  }
  var novoArray = lista.filter(function (item) {
    return item.id !== id;
  });
  return novoArray;
};
// d) Crie uma função que altere a bio ou o name a partir de um id passado
//paradigma funcional
var alterarBioNome = function (id, itemAlterado, novoConteudo) {
  if (
    !!lista.find(function (item) {
      return item.id === id;
    }) === false
  ) {
    return "ID inválido";
  }
  var novaLista = lista.map(function (lista) {
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
// paradigma imperativo
export var alterarBioNomeImp = function (id, itemAlterado, novoConteudo) {
  if (
    !!lista.find(function (item) {
      return item.id === id;
    }) === false
  ) {
    return "ID inválido";
  }
  let alteracao = itemAlterado;
  if (itemAlterado === "nome") alteracao = "name";
  var index = lista.findIndex(function (item) {
    return item.id === id;
  });
  lista[index][alteracao] = novoConteudo;
  return lista;
};
// e) Crie uma função que retorne a lista ordenada pelo nome dos itens
// paradigma imperativo
export var ordenarLista = function () {
  lista.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return lista;
};
//paradigma funcional
var ordenarListaFuncional = function () {
  var novoArrayOrdenado = __spreadArray([], lista, true).sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return novoArrayOrdenado;
};
//console.log para demonstrar as funções
//console para testar as funções:
// console.log(identificandoBioFunc(2));
// console.log(identificandoBioImp(2));
// console.log(identificandoNome(2));
// console.log(identificandoNomeImper(2));
// console.log(apagarItem(2));
// console.log(eliminarItem(1));
// console.log(alterarBioNome(4, "nome", "Jane"));
// console.log(alterarBioNomeImp(4, "nome", "Jane"));
// console.log(ordenarLista());
// console.log(ordenarListaFuncional());
// // f) Demonstre todas as funções com o paradigma funcional e com o imperativo
