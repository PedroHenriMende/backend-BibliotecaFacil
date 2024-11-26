import { Request, Response } from "express";
import { Livro } from "../model/Livro";

// Definição de uma interface para os dados necessários para um livro.
interface LivroDTO {
    idLivro: number,                // ID do livro (usado para identificar o livro no banco de dados)
    titulo: string,                 // Título do livro
    autor: string,                  // Nome do autor do livro
    editora: string,                // Nome da editora do livro
    anoPublicacao: string,          // Ano de publicação do livro
    isbn: string,                   // Código ISBN do livro
    quantTotal: number,             // Quantidade total de exemplares do livro na biblioteca
    quantDisponivel: number,        // Quantidade de exemplares disponíveis para empréstimo
    valorAquisicao: number,         // Valor de aquisição do livro
    statusLivroEmprestado: string   // Status do livro (ex.: "emprestado", "disponível")
}

/**
 * A classe `LivroController` extende a classe `Livro` e é responsável por controlar as requisições relacionadas aos livros.
 * 
 * - Esta classe atua como um controlador dentro de uma API REST, gerenciando as operações relacionadas ao recurso "livro".
 * - Herdando de `Livro`, ela pode acessar métodos e propriedades da classe base.
 */
export class LivroController extends Livro {

    /**
     * Método para listar todos os livros.
     * 
     * @param req Objeto de requisição HTTP.
     * @param res Objeto de resposta HTTP.
     * @returns Lista de livros em formato JSON com status 200 em caso de sucesso.
     * @throws Retorna um status 400 com uma mensagem de erro caso ocorra uma falha ao acessar a listagem de livros.
     */
    static async lista(req: Request, res: Response): Promise<any> {
        try {
            // Chama o método que lista todos os livros na classe Livro e armazena o resultado.
            const listaDeLivros = await Livro.listarLivros();

            // Retorna a lista de livros em formato JSON ao cliente que fez a requisição.
            return res.status(200).json(listaDeLivros);
        } catch (error) {
            // Exibe uma mensagem de erro no console caso a listagem falhe.
            console.log('Erro ao acessar a listagem de livros');

            // Retorna uma mensagem de erro em formato JSON ao cliente.
            return res.status(400).json({ mensagem: "Não foi possível acessar a listagem de livros" });
        }
    }

    /**
     * Método para cadastrar um novo livro.
     * 
     * @param req Objeto de requisição HTTP contendo os dados do livro no corpo da requisição.
     * @param res Objeto de resposta HTTP usado para enviar status e mensagens ao cliente.
     * @returns Resposta HTTP com status 200 em caso de sucesso, ou 400 em caso de erro.
     * 
     * @throws Em caso de erro no cadastro, exibe uma mensagem no console e retorna uma mensagem de erro ao cliente.
     */
    static async cadastro(req: Request, res: Response): Promise<any> {
        try {
            // Recupera as informações do livro do corpo da requisição e coloca em um objeto conforme a interface LivroDTO.
            const livroRecebido: LivroDTO = req.body;
            console.log(livroRecebido);  // Log para depuração, exibindo os dados do livro recebido

            // Cria uma nova instância da classe Livro com os dados recebidos.
            const novoLivro = new Livro(
                livroRecebido.titulo,
                livroRecebido.autor,
                livroRecebido.editora,
                livroRecebido.anoPublicacao,
                livroRecebido.isbn,
                livroRecebido.quantTotal,
                livroRecebido.quantDisponivel,
                livroRecebido.valorAquisicao,
                livroRecebido.statusLivroEmprestado
            );
            
            // Chama o método que cadastra o livro no banco de dados.
            const respostaClasse = await Livro.cadastrarLivro(novoLivro);

            // Verifica o resultado da operação de cadastro.
            if (respostaClasse) {
                // Se bem-sucedido, retorna uma mensagem de sucesso ao cliente.
                return res.status(200).json({ mensagem: "Livro cadastrado com sucesso!" });
            } else {
                // Em caso de falha, retorna uma mensagem de erro ao cliente.
                return res.status(400).json({ mensagem: "Erro ao cadastrar o livro. Entre em contato com o administrador do sistema." });
            }
        } catch (error) {
            // Exibe um erro no console se o processo de cadastro falhar.
            console.log(`Erro ao cadastrar um livro. ${error}`);

            // Retorna uma mensagem de erro em formato JSON ao cliente.
            return res.status(400).json({ mensagem: "Não foi possível cadastrar o livro. Entre em contato com o administrador do sistema." });
        }
    
    }
    
}
