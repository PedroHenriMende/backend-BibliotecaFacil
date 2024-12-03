import { Request, Response, Router } from "express";
import { LivroController } from "./controller/LivroController";
import { AlunoController } from "./controller/AlunoController";
import { EmprestimoController } from "./controller/EmprestimoController";

//Cria um roteador
const router = Router();

//Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response)=> {
    res.json({ mensagem: "Olá, Mundo!"});
});

/* 
* ROTAS PARA LIVROS
*/ 
// Rota para listar os livros
router.get("/lista/livros", LivroController.lista);
// Rota para cadastrar um novo carro
router.post("/novo/livro", LivroController.cadastro);
//
router.delete("/deletar/livro/:idLivro", LivroController.remover);
//
router.put("/atualizar/livro/:idLivro", LivroController.atualizar);
/* 
* ROTAS PARA ALUNOS
*/ 
// Rota para listar os alunos
router.get("/lista/alunos", AlunoController.lista);
// Rota para cadastrar um novo aluno
router.post("/novo/aluno", AlunoController.cadastro);
//
router.delete("/deletar/aluno/:idAluno", AlunoController.remover);
//
router.put("/atualizar/aluno/:idAluno", AlunoController.atualizar);
/* 
* ROTAS PARA EMPRÉSTIMOS
*/ 
// Rota para listar os empréstimos
router.get("/lista/emprestimo", EmprestimoController.lista);
//
router.delete("/deletar/emprestimo/:idEmprestimo", EmprestimoController.remover);
//
router.put("/atualizar/emprestimo/:idEmprestimo", EmprestimoController.atualizar);

//

//

//Exportando as rotas
export { router };