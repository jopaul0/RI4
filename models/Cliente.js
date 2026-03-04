export default class Cliente {
    #cpf;

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.telefones = new Set();
        this.endereco = endereco;
    }

    // --- GETTERS ---
    get nome() { return this.nome; }
    get cpf() { return this.#cpf; }
    get telefones() { return this.telefones; }
    get endereco() { return this.endereco; }

    // --- SETTERS ---
    set nome(valor) { this.nome = valor; }
    set endereco(valor) { this.endereco = valor; }

    getNomeUpper() { return this.nome.toUpperCase(); }
    getNomeLower() { return this.nome.toLowerCase(); }
}