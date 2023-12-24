const readline = require('readline');

class Tamagotchi {
  constructor() {
    this.fome = 0;
    this.felicidade = 100;
    this.emoji = '🐣';
    this.isAlive = true;
  }

  alimentar() {
    if (this.isAlive) {
      this.fome -= 10;
      console.log('Você alimentou seu tamagotchi. Fome -10!');
      this.verificarEstado();
    } else {
      console.log('Seu tamagotchi está morto. 😢');
    }
  }

  carinho() {
    if (this.isAlive) {
      this.felicidade += 10;
      console.log('Você deu carinho no seu tamagotchi. Felicidade +10!');
      this.verificarEstado();
    } else {
      console.log('Seu tamagotchi está morto. 😢');
    }
  }

  passear() {
    if (this.isAlive) {
      this.felicidade += 5;
      console.log('Você levou seu tamagotchi para passear. Felicidade +5!');
      this.verificarEstado();
    } else {
      console.log('Seu tamagotchi está morto. 😢');
    }
  }

  trocarRoupa() {
    if (this.isAlive) {
      const emojis = ['🐣', '🐶', '🐰', '🐱'];
      const newIndex = Math.floor(Math.random() * emojis.length);
      this.emoji = emojis[newIndex];
      console.log('Você trocou a roupa do seu tamagotchi! ' + this.emoji);
    } else {
      console.log('Seu tamagotchi está morto. 😢');
    }
  }

  verificarEstado() {
    if (this.fome >= 100 || this.felicidade <= 0) {
      this.isAlive = false;
      console.log('Seu tamagotchi morreu. 😵');
    }
  }

  atualizarEstado() {
    if (this.isAlive) {
      this.fome += 5;
      this.felicidade -= 5;
      console.log('Atualizando estado... Fome +5, Felicidade -5');
      this.verificarEstado();
    }
  }
}

const tamagotchi = new Tamagotchi();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function exibirMenu() {
  console.log('\nEscolha uma ação:');
  console.log('1. Alimentar');
  console.log('2. Carinho');
  console.log('3. Passear');
  console.log('4. Trocar de Roupa');
  console.log('5. Sair');
}

function executarAcao(opcao) {
  switch (opcao) {
    case '1':
      tamagotchi.alimentar();
      break;
    case '2':
      tamagotchi.carinho();
      break;
    case '3':
      tamagotchi.passear();
      break;
    case '4':
      tamagotchi.trocarRoupa();
      break;
    case '5':
      console.log('Saindo... Até logo!');
      process.exit();
      break;
    default:
      console.log('Opção inválida. Tente novamente.');
  }

  tamagotchi.atualizarEstado();
  exibirMenu();
  rl.question('Escolha uma opção: ', executarAcao);
}

exibirMenu();
rl.question('Escolha uma opção: ', executarAcao);

setInterval(() => {
  tamagotchi.atualizarEstado();
}, 10000);