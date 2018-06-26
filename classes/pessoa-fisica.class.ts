export class PessoaFisica {
    constructor(
        private cpf: String,
        private nome: String,
        private email: String,
        private tFixo: String = "Indefinido",
        private tCel: String = "Indefinido") {
    }

    //Getters e Setters
    get CPF() { return this.cpf }
    set CPF(nCpf: String) {
        if (nCpf.length !== 11) { throw new Error("O CPF informado tem tamanho menor do que o esperado."); }
        else { this.cpf = nCpf }
    }

    get NOME() { return this.nome }
    set NOME(nNome: String) { this.nome = nNome }

    get EMAIL() { return this.email }
    //set EMAIL(nEmail: String) { if (nEmail.search('@') >= 0) { this.email = nEmail } else { throw new Error("O email informado é inválido (não possui domínio especificado)") } }
    set EMAIL(nEmail: String) { this.email = nEmail }
}