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
}