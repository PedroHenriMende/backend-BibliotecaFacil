// Classe Emprestimo
class Emprestimo {
    private idEmprestimo: number;
    private idAluno: string;
    private idLivro: string;
    private dataEmprestimo: Date;
    private dataDevolucao: Date;
    private statusEmprestimo: Date;

    constructor(idEmprestimo: number, idAluno: string, idLivro: string, dataEmprestimo: Date, dataDevolucao: Date, statusEmprestimo: Date) {
        this.idEmprestimo = idEmprestimo;
        this.idAluno = idAluno;
        this.idLivro = idLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.statusEmprestimo = statusEmprestimo;
    }

    // Getters e Setters
    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }

    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
    }

    public getIdAluno(): string {
        return this.idAluno;
    }

    public setIdAluno(idAluno: string): void {
        this.idAluno = idAluno;
    }

    public getIdLivro(): string {
        return this.idLivro;
    }

    public setIdLivro(idLivro: string): void {
        this.idLivro = idLivro;
    }

    public getDataEmprestimo(): Date {
        return this.dataEmprestimo;
    }

    public setDataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo;
    }

    public getDataDevolucao(): Date {
        return this.dataDevolucao;
    }

    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao;
    }

    public getStatusEmprestimo(): Date {
        return this.statusEmprestimo;
    }

    public setStatusEmprestimo(statusEmprestimo: Date): void {
        this.statusEmprestimo = statusEmprestimo;
    }
}
