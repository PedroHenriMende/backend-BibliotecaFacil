// Definição da classe Aluno para representar um aluno no sistema de biblioteca
class Aluno {
    // Atributos privados da classe que armazenam os detalhes do aluno
    private ra: string;           // Registro Acadêmico (RA) do aluno
    private idAluno: number = 0;  // Identificador único do aluno, inicializado como 0
    private nome: string;         // Nome do aluno
    private sobrenome: string;    // Sobrenome do aluno
    private dataNascimento: Date; // Data de nascimento do aluno
    private endereco: string;     // Endereço do aluno
    private email: string;        // E-mail do aluno
    private celular: string;      // Número de celular do aluno

    // Construtor da classe que inicializa os atributos quando uma nova instância de Aluno é criada
    constructor(idAluno: number, ra: string, nome: string, sobrenome: string, dataNascimento: Date, endereco: string, email: string, celular: string) {
        this.nome = nome;                           // Atribui o nome do aluno
        this.sobrenome = sobrenome;                 // Atribui o sobrenome do aluno
        this.dataNascimento = dataNascimento;       // Atribui a data de nascimento do aluno
        this.endereco = endereco;                   // Atribui o endereço do aluno
        this.email = email;                         // Atribui o e-mail do aluno
        this.celular = celular;                     // Atribui o número de celular do aluno
    }

    // Métodos getters e setters para acessar e modificar os atributos da classe
    
    // Retorna o identificador único do aluno
    public getIdAluno(): number {
        return this.idAluno;
    }

    // Define o identificador único do aluno
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    // Retorna o registro acadêmico (RA) do aluno
    public getRa(): string {
        return this.ra;
    }

    // Define o registro acadêmico (RA) do aluno
    public setRa(ra: string): void {
        this.ra = ra;
    }

    // Retorna o nome do aluno
    public getNome(): string {
        return this.nome;
    }

    // Define o nome do aluno
    public setNome(nome: string): void {
        this.nome = nome;
    }

    // Retorna o sobrenome do aluno
    public getSobrenome(): string {
        return this.sobrenome;
    }

    // Define o sobrenome do aluno
    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    // Retorna a data de nascimento do aluno
    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    // Define a data de nascimento do aluno
    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }

    // Retorna o endereço do aluno
    public getEndereco(): string {
        return this.endereco;
    }

    // Define o endereço do aluno
    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    // Retorna o e-mail do aluno
    public getEmail(): string {
        return this.email;
    }

    // Define o e-mail do aluno
    public setEmail(email: string): void {
        this.email = email;
    }

    // Retorna o número de celular do aluno
    public getCelular(): string {
        return this.celular;
    }

    // Define o número de celular do aluno
    public setCelular(celular: string): void {
        this.celular = celular;
    }
}
