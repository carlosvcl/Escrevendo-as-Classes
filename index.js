class Heroi {
    // O construtor define as propriedades iniciais do objeto.
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        // Normaliza o tipo para minúsculas para facilitar a comparação no switch
        this.tipo = tipo.toLowerCase(); 
    }

    // O método atacar faz a lógica de exibição
    atacar() {
        let ataque = "";

        // Estrutura de Decisão (Switch/Case) para determinar o ataque
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }
        
        // Saída formatada: "o [tipo] atacou usando [ataque]"
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplos de Uso:

const heroiMago = new Heroi("Merlin", 1000, "Mago");
const heroiGuerreiro = new Heroi("Aragorn", 30, "Guerreiro");

// Chamando o método atacar:
heroiMago.atacar();      // Saída: o mago atacou usando magia
heroiGuerreiro.atacar(); // Saída: o guerreiro atacou usando espada
