import { log } from "console";
import { DatabaseModel } from "./DatabaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

/**
 * Classe que representa um empréstimo.
 */
export class Emprestimo {

    /* Atributos */
    /* Identificador do empréstimo */
    private idEmprestimo: number = 0;
    /* Identificador do aluno */
    private idAluno: number;
    /* Identificador do livro */
    private idLivro: number;
    /* Data do empréstimo */
    private dataEmprestimo: Date;
    /* Data de devolução */
    private dataDevolucao: Date;
    /* Status do empréstimo */
    private statusEmprestimo: string;

    /**
     * Construtor da classe Emprestimo
     * 
     * @param idAluno Identificador do aluno
     * @param idLivro Identificador do livro
     * @param dataEmprestimo Data de empréstimo
     * @param dataDevolucao Data de devolução
     * @param statusEmprestimo Status do empréstimo
     */
    constructor(
        idAluno: number,
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolucao: Date,
        statusEmprestimo: string
    ) {
        this.idAluno = idAluno;
        this.idLivro = idLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.statusEmprestimo = statusEmprestimo;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do empréstimo
     * @returns o identificador do empréstimo
     */
    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }

    /**
     * Atribui um valor ao identificador do empréstimo
     * @param idEmprestimo novo identificador do empréstimo
     */
    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
    }

    /**
     * Retorna o identificador do aluno.
     * 
     * @returns o identificador do aluno.
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Define o identificador do aluno.
     * 
     * @param idAluno - novo identificador do aluno.
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    /**
     * Retorna o identificador do livro.
     * 
     * @returns o identificador do livro.
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * Define o identificador do livro.
     * 
     * @param idLivro - novo identificador do livro.
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * Retorna a data do empréstimo.
     * 
     * @returns A data do empréstimo.
     */
    public getDataEmprestimo(): Date {
        return this.dataEmprestimo;
    }

    /**
     * Define a data do empréstimo.
     * 
     * @param dataEmprestimo - A data do empréstimo.
     */
    public setDataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo;
    }

    /**
     * Retorna a data de devolução.
     * 
     * @returns A data de devolução.
     */
    public getDataDevolucao(): Date {
        return this.dataDevolucao;
    }

    /**
     * Define a data de devolução.
     * 
     * @param dataDevolucao - A data de devolução.
     */
    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao;
    }

    /**
     * Retorna o status do empréstimo.
     * 
     * @returns O status do empréstimo.
     */
    public getStatusEmprestimo(): string {
        return this.statusEmprestimo;
    }

    /**
     * Define o status do empréstimo.
     * 
     * @param statusEmprestimo - Novo status do empréstimo.
     */
    public setStatusEmprestimo(statusEmprestimo: string): void {
        this.statusEmprestimo = statusEmprestimo;
    }

    /**
   * Busca e retorna uma lista de emprestimos do banco de dados.
   * @returns Um array de objetos do tipo `Emprestimo` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
   * 
   * - A função realiza uma consulta SQL para obter todas as informações da tabela "emprestimo".
   * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `Emprestimo`.
   * - Cada emprestimo é adicionado a uma lista que será retornada ao final da execução.
   * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
   */
    static async listarEmprestimos(): Promise<Array<Emprestimo> | null> {
        // objeto para armazenar a lista de emprestimos
        const listaDeEmprestimos: Array<Emprestimo> = [];

        try {
            // query de consulta ao banco de dados
            const querySelectEmprestimo = `SELECT * FROM emprestimo;`;

            // fazendo a consulta e guardando a resposta
            const respostaBD = await database.query(querySelectEmprestimo);

            // usando a resposta para instanciar um objeto do tipo emprestimo
            respostaBD.rows.forEach((linha: any) => {
                // instancia (cria) objeto emprestimo
                const novoEmprestimo = new Emprestimo(
                    linha.id_aluno,
                    linha.id_livro,
                    linha.data_emprestimo,
                    linha.data_devolucao,
                    linha.status_emprestimo
                );

                // atribui o ID objeto
                novoEmprestimo.setIdEmprestimo(linha.id_emprestimo);

                // adiciona o objeto na lista
                listaDeEmprestimos.push(novoEmprestimo);
            });

            // retorna a lista de emprestimos
            return listaDeEmprestimos;
        } catch (error) {
            console.log('Erro ao buscar lista de emprestimos. Verifique os logs para mais detalhes.');
            console.log(error);
            return null;
        }
    }
    // static async cadastrarEmprestimo(Emprestimo: Emprestimo): Promise<boolean> {
    //     try {
    //         // query para fazer insert de um livro no banco de dados
    //         const queryInsertEmprestimo = `INSERT INTO Emprestimo (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado)
    //                                 VALUES
    //                                 ('${livro.getTitulo()}', 
    //                                 '${livro.getAutor()}', 
    //                                 '${livro.getEditora()}', 
    //                                 '${livro.getAnoPublicacao()}',
    //                                 '${livro.getIsbn()}',
    //                                 '${livro.getQuantTotal()}',
    //                                 '${livro.getQuantDisponivel()}',
    //                                 '${livro.getValorAquisicao()}',
    //                                 '${livro.getStatusLivroEmprestado()}')
    //                                 RETURNING id_livro;`;

    //         //executa a query no banco e armazena a resposta
    //         const respostaBD = await database.query(queryInsertEmprestimo);

    //         // verifica se a quantidade de linhas modificadas é diferente de 0
    //         if (respostaBD.rowCount != 0) {
    //             console.log(`Emprestimo cadastrado com sucesso! ID do livro: ${respostaBD.rows[0].id_Emprestimo}`);
    //             // true significa que o cadastro foi feito
    //             return true;
    //         }

    //         // false significa que o cadastro NÃO foi feito.
    //         return false;
    //         // tratando o erro
    //     } catch (error) {
    //         // imprime outra mensagem junto com o erro
    //         console.log('Erro ao cadastrar o Emprestimo. Verifique os logs para mais detalhes.');
    //         // imprime o erro no console
    //         console.log(error);
    //         // retorno um valor falso
    //         return false;
    //     }
    // }
    static async removerEmprestimo(idEmprestimo: Number): Promise<boolean> {
        try {
            const queryDeleteEmprestimo = `DELETE FROM Emprestimo WHERE id_emprestimo = ${idEmprestimo}`;

            const respostaBD = await database.query(queryDeleteEmprestimo);

            if (respostaBD.rowCount != 0) {
                console.log(`Emprestimo removido com sucesso! ID removido: ${idEmprestimo}`);
                return true;
            }

            return false;

        } catch (error) {
            console.log(`Erro ao remover o Emprestimo. Verifique os logs para mais detalhes.`);
            console.log(error);
            return false;
        }
    }
    static async atualizarEmprestimo(emprestimo: Emprestimo): Promise<boolean> {
        try {
            // Query para fazer o update de um aluno no banco de dados
            const queryUpdateEmprestimo = `
                    UPDATE Emprestimo SET
                    id_aluno = ${emprestimo.getIdAluno},
                    id_livro = ${emprestimo.getIdLivro},
                    data_emprestimo = ${emprestimo.getDataEmprestimo},
                    data_devolucao = ${emprestimo.getDataDevolucao},
                    status_emprestimo = '${emprestimo.getStatusEmprestimo}'
                    WHERE id_emprestimo = ${emprestimo.getIdEmprestimo};
            `;
    
            console.log(queryUpdateEmprestimo);
            // Executa a query no banco e armazena a resposta
            const respostaBD = await database.query(queryUpdateEmprestimo);
    
            // verifica se a quantidade de linhas modificadas é diferente de 0
            if (respostaBD.rowCount != 0) {
                console.log(`Emprestimo atualizado com sucesso! ID do Pedido: ${emprestimo.getIdEmprestimo()}`);
                // true significa que a atualização foi bem sucedida
                return true;
            }
            // false significa que a atualização NÃO foi bem sucedida.
            return false;
    
            // tratando o erro
        } catch (error) {
            // imprime outra mensagem junto com o erro
            console.log('Erro ao atualizar o Emprestimo. Verifique os logs para mais detalhes.');
            // imprime o erro no console
            console.log(error);
            // retorno um valor falso
            return false;
        }
    }
}