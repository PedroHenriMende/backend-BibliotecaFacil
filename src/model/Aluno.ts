import { DatabaseModel } from "./DatabaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

/**
 * Classe que representa um aluno.
 */
export class Aluno {

    /* Atributos */
    /* Identificador do aluno */
    private idAluno: number = 0;
    /* ra do aluno */
    private raAluno: string = "";
    /* nome do aluno */
    private nome: string;
    /* sobrenome do aluno */
    private sobrenome: string;
    /* data de nascimento do aluno */
    private dataNascimento: Date;
    /* endereço do aluno */
    private endereco: string;
    /* email do aluno */
    private email: string;
    /* celular do aluno */
    private celular: string;

    /**
     * Construtor da classe Aluno
     * 
     * @param nome Nome do aluno 
     * @param sobrenome Sobrenome do aluno
     * @param dataNascimento data de nascimento do aluno
     * @param endereco Endereço do aluno
     * @param email Email do aluno
     * @param celular Celular do aluno
     */
    constructor(
        nome: string,
        sobrenome: string,
        dataNascimento: Date,
        endereco: string,
        email: string,
        celular: string
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.email = email;
        this.celular = celular;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do aluno
     * @returns o identificador do aluno
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Atribui um valor ao identificador do aluno
     * @param idAluno novo identificador do aluno
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

     /**
     * Recupera o ra do aluno
     * @returns o ra do aluno
     */
     public getRaAluno(): string {
        return this.raAluno;
    }

    /**
     * Atribui um valor ao ra do aluno
     * @param raAluno novo ra do aluno
     */
    public setRaAluno(raAluno: string): void {
        this.raAluno = raAluno;
    }


    /**
     * Retorna o nome do aluno.
     *
     * @returns O nome do aluno.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do aluno.
     * 
     * @param nome - O nome do aluno a ser definido.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna o sobrenome do aluno.
     *
     * @returns O sobrenome do aluno.
     */
    public getSobrenome(): string {
        return this.sobrenome;
    }

    /**
     * Define o sobrenome do aluno.
     *
     * @param sobrenome - O sobrenome do aluno.
     */
    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    /**
  * Retorna a data de nascimento do aluno.
  *
  * @returns A data de nascimento do aluno.
  */
    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    /**
     * Define a data de nascimento do aluno.
     *
     * @param dataNascimento - A data de nascimento do aluno.
     */
    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }

    /**
     * Retorna o endereço.
     *
     * @returns O endereço.
     */
    public getEndereco(): string {
        return this.endereco;
    }

    /**
     * Define o endereço.
     *
     * @param endereco - O endereço.
     */
    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    /**
     * Retorna o email.
     *
     * @returns O email.
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Define o email.
     *
     * @param email - O email.
     */
    public setEmail(email: string): void {
        this.email = email;
    }

    /**
     * Retorna o número de celular.
     *
     * @returns O número de celular.
     */
    public getCelular(): string {
        return this.celular;
    }

    /**
     * Define o número de celular.
     *
     * @param celular - O número de celular.
     */
    public setCelular(celular: string): void {
        this.celular = celular;
    }

 /**
   * Busca e retorna uma lista de alunos do banco de dados.
   * @returns Um array de objetos do tipo `Aluno` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
   * 
   * - A função realiza uma consulta SQL para obter todas as informações da tabela "aluno".
   * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `aluno`.
   * - Cada aluno é adicionado a uma lista que será retornada ao final da execução.
   * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
   */
 static async listarAlunos(): Promise<Array<Aluno> | null> {
    // objeto para armazenar a lista de alunos
    const listaDeAlunos: Array<Aluno> = [];

    try {
        // query de consulta ao banco de dados
        const querySelectAluno = `SELECT * FROM aluno;`;

        // fazendo a consulta e guardando a resposta
        const respostaBD = await database.query(querySelectAluno);

        // usando a resposta para instanciar um objeto do tipo aluno
        respostaBD.rows.forEach((linha: any) => {
            // instancia (cria) objeto aluno
            const novoAluno = new Aluno(
                linha.nome,
                linha.sobrenome,
                linha.dataNascimento,
                linha.endereco,
                linha.email,
                linha.celular
            );

            // atribui o ID objeto
            novoAluno.setIdAluno(linha.id_aluno);

            // adiciona o objeto na lista
            listaDeAlunos.push(novoAluno);
        });

        // retorna a lista de alunos
        return listaDeAlunos;
    } catch (error) {
        console.log('Erro ao buscar lista de alunos. Verifique os logs para mais detalhes.');
        console.log(error);
        return null;
    }
}

/**
 * Realiza o cadastro de um aluno no banco de dados.
 * 
 * Esta função recebe um objeto do tipo `Aluno` e insere seus dados ( nome, sobrenome, dataNascimento, endereco, email, celular)
 * na tabela `aluno` do banco de dados. O método retorna um valor booleano indicando se o cadastro 
 * foi realizado com sucesso.
 * 
 * @param {Aluno} Aluno - Objeto contendo os dados do aluno que será cadastrado. O objeto `Aluno`
 *                        deve conter os métodos `getNome()`, `getSobrenome()`, `getDataNascimento()`, `getEndereco()`, `getEmail()`, `getCelular()`  
 *                        que retornam os respectivos valores do aluno.
 * @returns {Promise<boolean>} - Retorna `true` se o aluno foi cadastrado com sucesso e `false` caso contrário.
 *                               Em caso de erro durante o processo, a função trata o erro e retorna `false`.
 * 
 * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
 *                   no console junto com os detalhes do erro.
 */
static async cadastrarAluno(aluno: Aluno): Promise<boolean> {
    try {
        // query para fazer insert de um aluno no banco de dados
        const queryInsertAluno = `INSERT INTO aluno (nome, sobrenome, data_nascimento, endereco, email, celular)
                                VALUES
                                ('${aluno.getNome()}', 
                                '${aluno.getSobrenome()}', 
                                '${aluno.getDataNascimento()}', 
                                '${aluno.getEndereco()}',
                                '${aluno.getEmail()}',
                                '${aluno.getCelular()}')
                                RETURNING id_aluno;`;

        //executa a query no banco e armazena a resposta
        const respostaBD = await database.query(queryInsertAluno);

        // verifica se a quantidade de linhas modificadas é diferente de 0
        if (respostaBD.rowCount != 0) {
            console.log(`Aluno cadastrado com sucesso! ID do aluno: ${respostaBD.rows[0].id_aluno}`);
            // true significa que o cadastro foi feito
            return true;
        }

        // false significa que o cadastro NÃO foi feito.
        return false;
        // tratando o erro
    } catch (error) {
        // imprime outra mensagem junto com o erro
        console.log('Erro ao cadastrar o aluno. Verifique os logs para mais detalhes.');
        // imprime o erro no console
        console.log(error);
        // retorno um valor falso
        return false;
    }
}


}