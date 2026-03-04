export default class Empresa {
    #cnpj;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get cnpj() { return this.#cnpj; }

    getRazaoSocialUpper() { return this.razaoSocial.toUpperCase(); }
    getRazaoSocialLower() { return this.razaoSocial.toLowerCase(); }

    getNomeFantasiaUpper() { return this.nomeFantasia.toUpperCase(); }
    getNomeFantasiaLower() { return this.nomeFantasia.toLowerCase(); }

}