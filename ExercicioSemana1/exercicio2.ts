interface PessoasImportantes {
  id: number;
  name: string;
  bio: string;
  [key: string]: any;
}

let lista: PessoasImportantes[] = [
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
      const identificandoBioFunc = (id: number) => {
        if (!!lista.find((item) => item.id === id) == false) {
          return "ID inválido";
        }
        const bioSelecionada = lista
          .filter((item) => item.id === id)
          .map((item) => item.bio)
          .shift();
        return bioSelecionada;
      };

        // paradigma imperativo
        const identificandoBioImp = (id: number) => {
          if (!!lista.find((item) => item.id === id) == false) {
            return "ID inválido";
          }
          for (let index = 0; index < lista.length; index++) {
            if (lista[index].id === id) {
              return lista[index].bio;
            }
          }
        };

// b) Crie uma função que retorne o name do id passado

      //paradigma funcional

      const identificandoNome = (id: number) => {
        if (!!lista.find((item) => item.id === id) == false) {
          return "ID inválido";
        }
        const nomeSelecionado = lista
          .filter((item) => item.id === id)
          .map((item) => item.name)
          .shift();
        return nomeSelecionado;
      };

      //paradigma imperativo
      const identificandoNomeImper = (id: number) => {
        if (!!lista.find((item) => item.id === id) == false) {
          return "ID inválido";
        }
        for (let index = 0; index < lista.length; index++) {
          if (lista[index].id === id) {
            return lista[index].name;

          }
        }
      };

// c) Crie uma função que apague um item da lista a partir de um id passado

      //paradigma imperativo
      const apagarItem = (id: number) => {
        if (!!lista.find((item) => item.id === id) == false) {
          return "ID inválido";
        }
        lista.splice(id - 1, 1);
        return lista;
      };
      //paradigma funcional
      const eliminarItem = (id: number) => {
        if (!!lista.find((item) => item.id === id) == false) {
          return "ID inválido";
        }
        const novoArray = lista.filter((item) => item.id !== id);
        return novoArray;
      };

// d) Crie uma função que altere a bio ou o name a partir de um id passado

      //paradigma funcional

      const alterarBioNome = (id: number, itemAlterado: string, novoConteudo: string) => {
        if (!!lista.find((item) => item.id === id) == false) {
          return "ID inválido";
        }
        let bioName = itemAlterado.toLowerCase();
        if (bioName === "nome") bioName = "name";
        if (bioName !== "bio" && bioName !== "name") {
          return "Altere somente bio ou nome";
        }

        const novaLista = lista.map((lista) => {
          if (lista.id === id) {
            if (bioName === "bio") {
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

      const alterarBioNomeImp = (id: number, itemAlterado: string, novoConteudo: string) => {
        if (!!lista.find((item) => item.id === id) == false) {
          return "ID inválido";
        }
        let index = lista.findIndex((item) => item.id === id);
        let bioName = itemAlterado.toLowerCase();
        if (bioName === "nome") bioName = "name";
        if (bioName !== "bio" && bioName !== "name") {
          return "Altere somente bio ou nome";
        }
        lista[index][bioName] = novoConteudo;
        return lista;
      };
// e) Crie uma função que retorne a lista ordenada pelo nome dos itens

      // paradigma imperativo

    const ordenarLista = () => {
      lista.sort((a, b) => a.name.localeCompare(b.name));
      return lista;
    };

      //paradigma funcional

      const ordenarListaFuncional = () => {
        const novoArrayOrdenado = [...lista].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return novoArrayOrdenado;
      };


//console.log para demonstrar as funções
        //console para testar as funções:
        console.log(identificandoBioFunc(2));
        console.log(identificandoBioImp(2));
        console.log(identificandoNome(2));
        console.log(identificandoNomeImper(2));
        console.log(apagarItem(2));
        console.log(eliminarItem(1));
        console.log(alterarBioNome(4, "nome", "Jane"));
        console.log(alterarBioNomeImp(4, "nome", "Jane"));
        console.log(ordenarLista());
        console.log(ordenarListaFuncional());

// f) Demonstre todas as funções com o paradigma funcional e com o imperativo

