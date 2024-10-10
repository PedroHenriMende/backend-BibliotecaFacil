// Definição da classe Livro para representar um livro no sistema de biblioteca
class Livro {
    // Atributos privados da classe que armazenam os detalhes do livro
    private idLivro: number = 0;  // Identificador único do livro, inicializado como 0
    private titulo: string;       // Título do livro
    private autor: string;        // Nome do autor do livro
    private editora: string;      // Nome da editora do livro
    private anoPublicacao: string;  // Ano de publicação do livro
    private isbn: string;         // Código ISBN do livro, que identifica internacionalmente
    private quantTotal: number;   // Quantidade total de exemplares do livro
    private quantDisponivel: number;  // Quantidade de exemplares disponíveis para empréstimo
    private valorAquisicao: number;  // Valor de aquisição do livro
    private statusLivroEmprestado: string;  // Status do livro (ex: disponível, emprestado, etc.)

    // Construtor da classe que inicializa os atributos quando uma nova instância de Livro é criada
    constructor(idLivro: number, titulo: string, autor: string, editora: string, anoPublicacao: string, isbn: string, quantTotal: number, quantDisponivel: number, valorAquisicao: number, statusLivroEmprestado: string) {
        this.titulo = titulo;                         // Atribui o título do livro
        this.autor = autor;                           // Atribui o autor do livro
        this.editora = editora;                       // Atribui a editora do livro
        this.anoPublicacao = anoPublicacao;           // Atribui o ano de publicação
        this.isbn = isbn;                             // Atribui o código ISBN
        this.quantTotal = quantTotal;                 // Atribui a quantidade total de exemplares
        this.quantDisponivel = quantDisponivel;       // Atribui a quantidade disponível de exemplares
        this.valorAquisicao = valorAquisicao;         // Atribui o valor de aquisição do livro
        this.statusLivroEmprestado = statusLivroEmprestado;  // Atribui o status do livro (se está emprestado ou disponível)
    }

    // Métodos getters e setters para acessar e modificar os atributos da classe
    
    // Retorna o identificador do livro
    public getIdLivro(): number {
        return this.idLivro;
    }

    // Define o identificador do livro
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    // Retorna o título do livro
    public getTitulo(): string {
        return this.titulo;
    }

    // Define o título do livro
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    // Retorna o nome do autor do livro
    public getAutor(): string {
        return this.autor;
    }

    // Define o nome do autor do livro
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    // Retorna o nome da editora do livro
    public getEditora(): string {
        return this.editora;
    }

    // Define o nome da editora do livro
    public setEditora(editora: string): void {
        this.editora = editora;
    }

    // Retorna o ano de publicação do livro
    public getAnoPublicacao(): string {
        return this.anoPublicacao;
    }

    // Define o ano de publicação do livro
    public setAnoPublicacao(anoPublicacao: string): void {
        this.anoPublicacao = anoPublicacao;
    }

    // Retorna o código ISBN do livro
    public getIsbn(): string {
        return this.isbn;
    }

    // Define o código ISBN do livro
    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

    // Retorna a quantidade total de exemplares do livro
    public getQuantTotal(): number {
        return this.quantTotal;
    }

    // Define a quantidade total de exemplares do livro
    public setQuantTotal(quantTotal: number): void {
        this.quantTotal = quantTotal;
    }

    // Retorna a quantidade de exemplares disponíveis para empréstimo
    public getQuantDisponivel(): number {
        return this.quantDisponivel;
    }

    // Define a quantidade de exemplares disponíveis para empréstimo
    public setQuantDisponivel(quantDisponivel: number): void {
        this.quantDisponivel = quantDisponivel;
    }

    // Retorna o valor de aquisição do livro
    public getValorAquisicao(): number {
        return this.valorAquisicao;
    }

    // Define o valor de aquisição do livro
    public setValorAquisicao(valorAquisicao: number): void {
        this.valorAquisicao = valorAquisicao;
    }

    // Retorna o status do livro (se está disponível ou emprestado)
    public getStatusLivroEmprestado(): string {
        return this.statusLivroEmprestado;
    }

    // Define o status do livro (se está disponível ou emprestado)
    public setStatusLivroEmprestado(statusLivroEmprestado: string): void {
        this.statusLivroEmprestado = statusLivroEmprestado;
    }
}
