import { Request, Response } from "express";
import { Emprestimo } from "../model/Emprestimo";

// Definição de uma interface para os dados necessários para um empréstimo.
interface EmprestimoDTO {
    idAluno: number,           // ID do aluno que está realizando o empréstimo.
    idLivro: number,           // ID do livro emprestado.
    dataEmprestimo: Date,      // Data do início do empréstimo.
    dataDevolucao: Date,       // Data prevista para a devolução do livro.
    statusEmprestimo: string   // Status atual do empréstimo (ex: "ativo", "finalizado").
}

/**
 * A classe `EmprestimoController` extende a classe `Emprestimo` e é responsável por controlar as requisições relacionadas aos empréstimos.
 * 
 * - Esta classe atua como um controlador dentro de uma API REST, gerenciando as operações relacionadas ao recurso "empréstimo".
 * - Herdando de `Emprestimo`, ela pode acessar métodos e propriedades da classe base.
 */
export class EmprestimoController extends Emprestimo {

    /**
     * Método para listar todos os empréstimos.
     * 
     * @param req Objeto de requisição HTTP.
     * @param res Objeto de resposta HTTP.
     * @returns Lista de empréstimos em formato JSON com status 200 em caso de sucesso.
     * @throws Retorna um status 400 com uma mensagem de erro caso ocorra uma falha ao acessar a listagem de empréstimos.
     */
    static async lista(req: Request, res: Response): Promise<any> {
        try {
            // Chama o método que lista todos os empréstimos e armazena o resultado.
            const listaDeEmprestimos = await Emprestimo.listarEmprestimos();

            // Retorna a lista de empréstimos em formato JSON para o cliente.
            return res.status(200).json(listaDeEmprestimos);
        } catch (error) {
            // Exibe uma mensagem de erro no console caso a listagem falhe.
            console.log('Erro ao acessar a listagem de empréstimos');

            // Retorna uma mensagem de erro em formato JSON ao cliente.
            return res.status(400).json({ mensagem: "Não foi possível acessar a listagem de empréstimos" });
        }
    }
}
