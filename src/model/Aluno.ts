import { DatabaseModel } from "./DatabaseModel";

// Armazena o pool de conexões para o banco de dados
const database = new DatabaseModel().pool;

/**
 * Classe que representa um aluno.
 */
export class Aluno {

    /* Atributos */
    private idAluno: number = 0;          // Identificador do aluno
    private raAluno: string = '';          // RA do aluno
    private nome: string;                  // Nome do aluno
    private sobrenome: string;             // Sobrenome do aluno
    private dataNascimento: Date;          // Data de nascimento do aluno
    private endereco: string;              // Endereço do aluno
    private email: string;                 // Email do aluno
    private celular: string;               // Número de celular do aluno

    /**
     * Construtor da classe Aluno.
     * @param ra RA do aluno
     * @param nome Nome do aluno 
     * @param sobrenome Sobrenome do aluno
     * @param dataNascimento Data de nascimento do aluno
     * @param endereco Endereço do aluno
     * @param email Email do aluno
     * @param celular Celular do aluno
     */
    constructor(
        raAluno: string,
        nome: string,
        sobrenome: string,
        dataNascimento: Date,
        endereco: string,
        email: string,
        celular: string
    ) {
        this.raAluno = raAluno;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.email = email;
        this.celular = celular;
    }

    /* Métodos get e set para cada atributo */
    public getIdAluno(): number {
        return this.idAluno;
    }

    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    public getRaAluno(): string {
        return this.raAluno;
    }

    public setRaAluno(raAluno: string): void {
        this.raAluno = raAluno;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getSobrenome(): string {
        return this.sobrenome;
    }

    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }

    public getEndereco(): string {
        return this.endereco;
    }

    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getCelular(): string {
        return this.celular;
    }

    public setCelular(celular: string): void {
        this.celular = celular;
    }

    /**
     * Método para listar todos os alunos do banco de dados.
     * @returns Um array de objetos do tipo `Aluno` em caso de sucesso ou `null` em caso de erro.
     */
    static async listarAlunos(): Promise<Array<Aluno> | null> {
        const listaDeAlunos: Array<Aluno> = [];

        try {
            // Consulta SQL para listar todos os alunos
            const querySelectAluno = `SELECT * FROM aluno;`;

            // Executa a consulta no banco de dados e armazena o resultado
            const respostaBD = await database.query(querySelectAluno);

            // Processa cada linha de resposta, criando objetos Aluno
            respostaBD.rows.forEach((linha: any) => {
                const novoAluno = new Aluno(
                    linha.ra,
                    linha.nome,
                    linha.sobrenome,
                    linha.data_nascimento,
                    linha.endereco,
                    linha.email,
                    linha.celular
                );
                novoAluno.setIdAluno(linha.id_aluno);
                listaDeAlunos.push(novoAluno);

                console.log(novoAluno);
            });

            return listaDeAlunos;
        } catch (error) {
            console.log('Erro ao buscar lista de alunos. Verifique os logs para mais detalhes.');
            console.log(error);
            return null;
        }
    }

    /**
     * Método para cadastrar um novo aluno no banco de dados.
     * 
     * @param aluno - Objeto do tipo `Aluno` contendo os dados a serem cadastrados.
     * @returns `true` se o aluno foi cadastrado com sucesso e `false` caso contrário.
     */
    static async cadastrarAluno(aluno: Aluno): Promise<boolean> {
        try {
            // Consulta SQL para inserir um novo aluno
            const queryInsertAluno = `INSERT INTO aluno (nome, sobrenome, data_nascimento, endereco, email, celular)
                                      VALUES

                                      ('
                                       ${aluno.getNome()}', 
                                       '${aluno.getSobrenome()}', 
                                       '${aluno.getDataNascimento()}', 
                                       '${aluno.getEndereco()}',
                                       '${aluno.getEmail()}',
                                       '${aluno.getCelular()}')
                                      RETURNING id_aluno;`;


                                      console.log(queryInsertAluno)
            // Executa a consulta de inserção e armazena a resposta
            const respostaBD = await database.query(queryInsertAluno);

            

            // Verifica se houve inserção bem-sucedida
            if (respostaBD.rowCount !== 0) {
                console.log(`Aluno cadastrado com sucesso! ID do aluno: ${respostaBD.rows[0].id_aluno}`);
                return true;
            }

            return false;
        } catch (error) {
            console.log('Erro ao cadastrar o aluno. Verifique os logs para mais detalhes.');
            console.log(error);
            return false;
        }
    }
}
