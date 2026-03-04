import Empresa from './models/Empresa.js';
import Cliente from './models/Cliente.js';
import Endereco from './models/Endereco.js';
import Telefone from './models/Telefone.js';

// Criar a Empresa
const enderecoEmpresa = new Endereco('SP', 'São José dos Campos', 'Av. Cassiano Ricardo', '1500');
const minhaEmpresa = new Empresa('Tech Solutions LTDA', 'Tech Sol', '12.345.678/0001-90', enderecoEmpresa);

// Atribuir pelo menos dois telefones à empresa
minhaEmpresa.telefones.add(new Telefone('12', '3941-0000'));
minhaEmpresa.telefones.add(new Telefone('12', '99123-4567'));

// Criar cinco clientes, cada um com seu endereço e dois telefones
const dadosClientes = [
    { nome: 'João Silva', cpf: '111', rua: 'Rua A', num: '10' },
    { nome: 'Maria Oliveira', cpf: '222', rua: 'Rua B', num: '20' },
    { nome: 'Pedro Santos', cpf: '333', rua: 'Rua C', num: '30' },
    { nome: 'Ana Costa', cpf: '444', rua: 'Rua D', num: '40' },
    { nome: 'Lucas Souza', cpf: '555', rua: 'Rua E', num: '50' }
];

dadosClientes.forEach((dado, index) => {
    const endereco = new Endereco('SP', 'São José dos Campos', dado.rua, dado.num);
    const cliente = new Cliente(dado.nome, dado.cpf, endereco);
    
    // Adicionar dois telefones para cada cliente
    cliente.telefones.add(new Telefone('12', `98800-000${index}`));
    cliente.telefones.add(new Telefone('11', `97700-000${index}`));

    // Colocar os clientes dentro do conjunto de clientes da empresa
    minhaEmpresa.clientes.add(cliente);
});

// --- Validação no Console ---
console.log(minhaEmpresa.detalhe());