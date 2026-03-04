export default class Cliente {
    #cpf;

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.telefones = new Set();
        this.endereco = endereco;
    }

    get cpf() { return this.#cpf; }

    getNomeUpper() { return this.nome.toUpperCase(); }
    getNomeLower() { return this.nome.toLowerCase(); }

    detalhe() {
        let info = `Nome: ${this.nome}\n`;
        info += `Estado: ${this.endereco.estado} cidade: ${this.endereco.cidade} rua: ${this.endereco.rua} numero: ${this.endereco.numero}\n`;
        
        this.telefones.forEach(tel => {
            info += `ddd: ${tel.ddd} numero: ${tel.numero}\n`;
        });
        return info;
    }
}