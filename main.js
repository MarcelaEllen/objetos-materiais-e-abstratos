
//------material------//
class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.velocidade = 0;
      this.ligado = false;
    }
  //métodos
    acelerar() {
      if (this.ligado) {
        this.velocidade += 10;
        console.log(`O carro acelerou para ${this.velocidade} km/h.`);
      } else {
        console.log('O carro está desligado. Ligue o motor primeiro.');
      }
    }
  
    frear() {
      this.velocidade -= 10;
      console.log(`O carro reduziu a velocidade para ${this.velocidade} km/h.`);
    }
  
    ligarMotor() {
      this.ligado = true;
      console.log('O motor do carro foi ligado.');
    }
  }
  //usando
  const meuCarro = new Carro('Toyota', 'Corolla', 2022);
  meuCarro.ligarMotor();
  meuCarro.acelerar();
  meuCarro.frear();

//------material------//

  class Animal {
    constructor(nome, classe, som){
      this.nome = nome;
      this.classe = classe;
      this.som = som;
    }

  //métodos
    falar() {
      console.log(`${this.nome} faz ${this.som}`)
    } 
    pertence(){
      console.log(`${this.nome} é um ${this.classe}`)
    }
    fazerAtividade(atividade){
      console.log(`${this.nome} gosta de ${atividade}`)
    }
  }
  //usando
const vaca = new Animal('Vaca','mamífero','muuu')
vaca.falar() 
vaca.pertence()
vaca.fazerAtividade("correr")

//------abstrato------//

class carrinhoCompras {
  constructor(nome, produtos, valor){
    this.nome = nome;
    this.produtos = produtos;
    this.valor = valor;
  }

  //métodos
  produtos = []
  addProdutos(produto){
    this.produtos.push(produto)
  }

  removerProdutos(i, qtd = 1){
      this.produtos.splice(i, qtd)
  }

  frase(){
    console.log(`Produtos: ${this.produtos} - TOTAL: ${this.valor}`)
  }
}

//usando
const meuCarrinho = new carrinhoCompras("", [], "50 reais")

meuCarrinho.addProdutos("laranja")
meuCarrinho.addProdutos(" saco de lixo")
meuCarrinho.addProdutos(" doritos")
console.log(meuCarrinho.produtos)

meuCarrinho.removerProdutos(0,1)
console.log(meuCarrinho.produtos)

meuCarrinho.frase()

//------abstrato------//

class Agenda {
  constructor() {
    this.compromissos = []; // Crie um array para armazenar os compromissos
  }

//métodos
  addEvento(compromisso, data, descricao) {
    this.compromissos.push({ compromisso, data, descricao }); // Adicione o compromisso ao array
  }

  visualizarCompromissos() {
    for (const compromisso of this.compromissos) {
      console.log(`Compromisso: ${compromisso.compromisso}, Data: ${compromisso.data}, Descrição: ${compromisso.descricao}`);
    }
  }
  removerCompromisso(index) {
    if (index >= 0 && index < this.compromissos.length) {
      const compromissoRemovido = this.compromissos.splice(index, 1);
      console.log(`Compromisso removido: ${compromissoRemovido[0].compromisso}`);
    } else {
      console.log("Índice inválido. Não foi possível remover o compromisso.");
    }
  }
}

//usando
const minhaAgenda = new Agenda();
minhaAgenda.addEvento("Casamento da Mari", "25/12/2023", "Festa");
minhaAgenda.addEvento("Aula de música", "20/10/2023", "Piano");
minhaAgenda.addEvento("Reunião de trabalho", "15/10/2023", "Projeto X");
minhaAgenda.visualizarCompromissos();

minhaAgenda.removerCompromisso(1);

console.log("Compromissos após a remoção:");
minhaAgenda.visualizarCompromissos();
