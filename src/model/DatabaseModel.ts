import pg from 'pg';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

/**
 * Classe que representa o modelo de banco de dados.
 */
export class DatabaseModel {

    private _config: object;       // Configurações de conexão com o banco de dados
    private _pool: pg.Pool;        // Pool de conexões com o banco de dados
    private _client: pg.Client;    // Cliente de conexão direta com o banco

    /**
     * Construtor da classe DatabaseModel.
     * Inicializa as configurações de conexão, o pool e o cliente.
     */
    constructor() {
        // Configuração de conexão usando variáveis de ambiente
        this._config = {
            user: process.env.DB_USER,         // Nome do usuário do banco
            host: process.env.DB_HOST,         // Host do banco
            database: process.env.DB_NAME,     // Nome do banco de dados
            password: process.env.DB_PASSWORD, // Senha do banco
            port: process.env.DB_PORT,         // Porta do banco
            max: 10,                           // Máximo de conexões no pool
            idleTimeoutMillis: 10000           // Tempo máximo de ociosidade em ms
        };

        // Inicializa o pool de conexões com a configuração
        this._pool = new pg.Pool(this._config);

        // Inicializa o cliente de conexão direta com o banco
        this._client = new pg.Client(this._config);
    }

    /**
     * Testa a conexão com o banco de dados.
     *
     * @returns `true` se a conexão for bem-sucedida, `false` em caso de erro.
     */
    public async testeConexao(): Promise<boolean> {
        try {
            // Conecta ao banco usando o cliente
            await this._client.connect();
            console.log('Database connected!');
            // Encerra a conexão ao final do teste
            await this._client.end();
            return true;
        } catch (error) {
            // Em caso de erro, exibe a mensagem e encerra a conexão
            console.log('Error to connect database X( ');
            console.log(error);
            await this._client.end();
            return false;
        }
    }

    /**
     * Getter para o pool de conexões, permitindo acesso externo ao pool.
     */
    public get pool() {
        return this._pool;
    }
}
