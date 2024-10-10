// Definição da classe Emprestimo para representar um empréstimo de livro em um sistema de biblioteca
class Emprestimo {
    // Atributos privados da classe que armazenam os detalhes do empréstimo
    private idEmprestimo: number = 0;  // Identificador único do empréstimo
    private idAluno: number;       // Identificador único do aluno
    private idLivro: number;       // Identificador único do livro
    private dataEmprestimo: Date;  // Data do início do empréstimo
    private dataDevolucao: Date;   // Data prevista ou efetiva da devolução do livro
    private statusEmprestimo: Date;  // Status do empréstimo (melhor representado como um enum, mas aqui está como Date)

    // Construtor da classe que inicializa os atributos quando uma nova instância de Emprestimo é criada
    constructor(idEmprestimo: number, idAluno: number, idLivro: number, dataEmprestimo: Date, dataDevolucao: Date, statusEmprestimo: Date) {
        this.idLivro = idAluno;  
        this.idAluno = idLivro;
        this.dataEmprestimo = dataEmprestimo;          // Atribui a data do empréstimo
        this.dataDevolucao = dataDevolucao;            // Atribui a data de devolução
        this.statusEmprestimo = statusEmprestimo;      // Atribui o status do empréstimo
    }

    // Métodos getters e setters para acessar e modificar os atributos da classe
    
    // Retorna o identificador do empréstimo
    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }

    // Define o identificador do empréstimo
    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
    }

    // Retorna o identificador do aluno que fez o empréstimo
    public getIdAluno(): number {
        return this.idAluno;
    }

    // Define o identificador do aluno
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    // Retorna o identificador do livro emprestado
    public getIdLivro(): number {
        return this.idLivro;
    }

    // Define o identificador do livro
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    // Retorna a data do empréstimo
    public getDataEmprestimo(): Date {
        return this.dataEmprestimo;
    }

    // Define a data do empréstimo
    public setDataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo;
    }

    // Retorna a data de devolução do livro
    public getDataDevolucao(): Date {
        return this.dataDevolucao;
    }

    // Define a data de devolução do livro
    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao;
    }

    // Retorna o status do empréstimo (representado incorretamente como uma data)
    public getStatusEmprestimo(): Date {
        return this.statusEmprestimo;
    }

    // Define o status do empréstimo (deveria ser um tipo mais apropriado, como boolean ou enum)
    public setStatusEmprestimo(statusEmprestimo: Date): void {
        this.statusEmprestimo = statusEmprestimo;
    }
}
