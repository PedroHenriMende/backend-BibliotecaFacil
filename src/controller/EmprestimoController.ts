import { Request, Response } from "express";
import { Emprestimo } from "../model/Emprestimo";

interface EmprestimoDTO {
    idAluno: number,
    idLivro: number,
    dataEmprestimo: Date,
    dataDevolucao: Date,
    statusEmprestimo: string
}

/**
 * A classe `EmprestimoController` extende a classe `Emprestimo` e é responsável por controlar as requisições relacionadas aos emprestimos.
 * 
 * - Esta classe atua como um controlador dentro de uma API REST, gerenciando as operações relacionadas ao recurso "emprestimo".
 * - Herdando de `emprestimo`, ela pode acessar métodos e propriedades da classe base.
 */
export class EmprestimoController extends Emprestimo {

    /**
    * Lista todos os emprestimos.
    * @param req Objeto de requisição HTTP.
    * @param res Objeto de resposta HTTP.
    * @returns Lista de emprestimos em formato JSON com status 200 em caso de sucesso.
    * @throws Retorna um status 400 com uma mensagem de erro caso ocorra uma falha ao acessar a listagem de emprestimos.
    */
    static async lista(req: Request, res: Response): Promise<any> {
        try {
            // acessa a função de listar os emprestimos e armazena o resultado
            const listaDeEmprestimos = await Emprestimo.listarEmprestimos();

            // retorna a lista de emprestimos há quem fez a requisição web
            return res.status(200).json(listaDeEmprestimos);
        } catch (error) {
            // lança uma mensagem de erro no console
            console.log('Erro ao acessar a listagem de emprestimos');

            // retorna uma mensagem de erro há quem chamou a mensagem
            return res.status(400).json({ mensagem: "Não foi possível acessar a listagem de emprestimos" });
        }
    }
}