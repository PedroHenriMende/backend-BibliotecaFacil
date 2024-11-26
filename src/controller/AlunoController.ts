import { Request, Response } from "express";
import { Aluno } from "../model/Aluno";

// Definição de uma interface que descreve os dados necessários para criar um aluno.
interface AlunoDTO {
    ra: string,
    nome: string,
    sobrenome: string,
    dataNascimento: Date,
    endereco: string,
    email: string,
    celular: string
}

/**
 * A classe `AlunoController` extende a classe `Aluno` e é responsável por controlar as requisições relacionadas aos alunos.
 * 
 * - Esta classe atua como um controlador dentro de uma API REST, gerenciando as operações relacionadas ao recurso "aluno".
 * - Herdando de `Aluno`, ela pode acessar métodos e propriedades da classe base.
 */
export class AlunoController extends Aluno {

    /**
     * Método para listar todos os alunos.
     * 
     * @param req Objeto de requisição HTTP.
     * @param res Objeto de resposta HTTP.
     * @returns Lista de alunos em formato JSON com status 200 em caso de sucesso.
     * @throws Retorna um status 400 com uma mensagem de erro caso ocorra uma falha ao acessar a listagem de alunos.
     */
    static async lista(req: Request, res: Response): Promise<any> {
        try {
            // Acessa o método que lista todos os alunos na classe Aluno e armazena o resultado.
            const listaDeAlunos = await Aluno.listarAlunos();

            // Retorna a lista de alunos em formato JSON ao cliente que fez a requisição.
            return res.status(200).json(listaDeAlunos);
        } catch (error) {
            // Exibe um erro no console caso a listagem falhe.
            console.log('Erro ao acessar a listagem de alunos');

            // Retorna uma mensagem de erro em formato JSON ao cliente.
            return res.status(400).json({ mensagem: "Não foi possível acessar a listagem de alunos" });
        }
    }

    /**
     * Método para cadastrar um novo aluno.
     * 
     * @param req Objeto de requisição HTTP contendo os dados do aluno no corpo da requisição.
     * @param res Objeto de resposta HTTP para enviar status e mensagens ao cliente.
     * @returns Resposta HTTP com status 200 em caso de sucesso, ou 400 em caso de erro.
     * 
     * @throws Em caso de erro no cadastro, exibe uma mensagem no console e retorna uma mensagem de erro ao cliente.
     */
    static async cadastro(req: Request, res: Response): Promise<any> {
        try {
            // Recupera as informações do aluno do corpo da requisição e coloca em um objeto conforme a interface AlunoDTO.
            const alunoRecebido: AlunoDTO = req.body;

            // Cria uma nova instância da classe Aluno com os dados recebidos.
            const novoAluno = new Aluno(
                alunoRecebido.ra,
                alunoRecebido.nome,
                alunoRecebido.sobrenome,
                alunoRecebido.dataNascimento,
                alunoRecebido.endereco,
                alunoRecebido.email,
                alunoRecebido.celular
            );

            // Chama o método que cadastra o aluno no banco de dados.
            const respostaClasse = await Aluno.cadastrarAluno(novoAluno);

            // Verifica o resultado da operação de cadastro.
            if (respostaClasse) {
                // Se bem-sucedido, retorna uma mensagem de sucesso ao cliente.
                return res.status(200).json({ mensagem: "Aluno cadastrado com sucesso!" });
            } else {
                // Em caso de falha, retorna uma mensagem de erro ao cliente.
                return res.status(400).json({ mensagem: "Erro ao cadastrar o aluno. Entre em contato com o administrador do sistema." });
            }
        } catch (error) {
            // Exibe um erro no console se o processo de cadastro falhar.
            console.log(`Erro ao cadastrar um aluno. ${error}`);

            // Retorna uma mensagem de erro em formato JSON ao cliente.
            return res.status(400).json({ mensagem: "Não foi possível cadastrar o aluno. Entre em contato com o administrador do sistema." });
        }
    }
}
