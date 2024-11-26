-- CREATE ALUNO - TRIGGER - FUNCTION

CREATE SEQUENCE seq_ra START 1;

CREATE TABLE Aluno (
    id_aluno SERIAL PRIMARY KEY,
    ra VARCHAR (7) UNIQUE NOT NULL,
    nome VARCHAR (80) NOT NULL,
    sobrenome VARCHAR (80) NOT NULL,
    data_nascimento DATE,
    endereco VARCHAR (200),
    email VARCHAR (80),
    celular VARCHAR (20) NOT NULL
);

CREATE OR REPLACE FUNCTION gerar_ra() RETURNS TRIGGER AS $$
BEGIN
    NEW.ra := 'AAA' || TO_CHAR(nextval('seq_ra'), 'FM0000');
    RETURN NEW;
END;-- CREATE LIVRO

CREATE TABLE Livro (
    id_livro SERIAL PRIMARY KEY,
    titulo VARCHAR (200) NOT NULL,
    autor VARCHAR (150) NOT NULL,
    editora VARCHAR (100) NOT NULL,
    ano_publicacao VARCHAR (5),
    isbn VARCHAR (20),
    quant_total INTEGER NOT NULL,
    quant_disponivel INTEGER NOT NULL,
    valor_aquisicao DECIMAL (10,2),
    status_livro_emprestado VARCHAR (20)
);

$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_gerar_ra
BEFORE INSERT ON Aluno
FOR EACH ROW EXECUTE FUNCTION gerar_ra();

-- CREATE EMPRESTIMO
CREATE TABLE Emprestimo (
    id_emprestimo SERIAL PRIMARY KEY,
    id_aluno INT REFERENCES Aluno(id_aluno),
    id_livro INT REFERENCES Livro(id_livro),
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,
    status_emprestimo VARCHAR (20)
);

-- ALUNO
INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Conor', 'McGregor', '2005-01-15', 'Rua UFC, 123', 'mcgregor@ufc.com', '16998959876'),
('Amanda', 'Nunes', '2004-03-22', 'Rua UFC, 456', 'amanda.nunes@ufc.com', '16995992305'),
('Angelina', 'Jolie', '2003-07-10', 'Rua Hollywood, 789', 'jolie@cinema.com', '16991915502'),
('Natalie', 'Portman', '2002-11-05', 'Rua Hollywood, 101', 'natalie.portman@cinema.com', '16993930703'),
('Shaquille', 'ONeal', '2004-09-18', 'Rua NBA, 202', 'shaquille@gmail.com', '16993937030'),
('Harry', 'Kane', '2000-05-18', 'Rua Futebol, 2024', 'kane@futi.com', '16998951983'),
('Jaqueline', 'Carvalho', '2001-12-10', 'Rua Volei, 456', 'jack@volei.com', '16991993575'),
('Sheilla', 'Castro', '2003-04-25', 'Rua Volei, 2028', 'sheilla.castro@volei.com', '16981974547'),
('Gabriela', 'Guimarães', '2007-08-19', 'Rua Volei, 2028', 'gaby@volei.com', '16983932215'),
('Magic', 'Johnson', '2003-07-08', 'Rua NBA, 1999', 'magic@gmail.com', '16993932020');

INSERT INTO Aluno (ra, nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('2341','Louise Lívia', 'Fabiana Castro', '1981-06-10', 'Av. Rogério Weber, 104', 'louise_livia_castro@webin.com.br', '69993290511'),
('1232','Manoel Ryan', 'Caldeira', '1962-05-03', 'Av. Amaral Peixoto, 162', 'manoel-caldeira99@gerdau.com.br', '21994747144'),
('2234','Enzo Edson', 'Monteiro', '1946-06-22', 'Rua Nove, 294', 'enzo.edson.monteiro@qualita.srv.br', '41993436455'),
('5353','Diogo Bento', 'Renan da Luz', '1957-05-06', 'Rua 5, 345', 'diogo_bento_daluz@rj.net', '92982421700'),
('757','Sabrina Tatiane', 'da Silva', '2004-03-27', 'Rua Independência, 533', 'sabrina-dasilva80@clcimoveis.com.br', '92987376031'),
('6665','Flávia Elza Cristiane', 'Ferreira', '1949-03-11', 'Quadra P, 792', 'flavia.elza.ferreira@amordeconvite.com.br', '86982497431'),
('23','Bernardo Hugo Jorge', 'da Mata', '1997-08-27', 'Rua Bassea Furmah, 332', 'bernardo-damata74@zignani.com.br', '21983841843'),
('123','Fátima Esther Raquel', 'Fernandes', '1965-02-03', 'Av. Luiz Manoel, 653', 'fatima_fernandes@atrix.com.br', '88983282461'),
('543453','Levi Renato', 'Viana', '1962-02-24', 'Av. Rocha Viana, 732', 'levi-viana85@uniube.br', '68995736674'),
('345436','Isadora Isabelly', 'da Paz', '1990-02-11', 'Passagem Clodomiro, 868', 'isadora_isabelly_dapaz@ortovip.com.br', '91982002334');

-- LIVRO
INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('O Senhor dos Anéis', 'J.R.R. Tolkien', 'HarperCollins', '1954', '978-0007525546', 10, 10, 150.00, 'Disponível'),
('1984', 'George Orwell', 'Companhia das Letras', '1949', '978-8535906770', 8, 8, 90.00, 'Disponível'),
('Dom Quixote', 'Miguel de Cervantes', 'Penguin Classics', '1605', '978-0142437230', 6, 6, 120.00, 'Disponível'),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Agir', '1943', '978-8522008731', 12, 12, 50.00, 'Disponível'),
('A Revolução dos Bichos', 'George Orwell', 'Penguin', '1945', '978-0141036137', 7, 7, 80.00, 'Disponível'),
('O Hobbit', 'J.R.R. Tolkien', 'HarperCollins', '1937', '978-0007458424', 9, 9, 140.00, 'Disponível'),
('O Conde de Monte Cristo', 'Alexandre Dumas', 'Penguin Classics', '1844', '978-0140449266', 5, 5, 110.00, 'Disponível'),
('Orgulho e Preconceito', 'Jane Austen', 'Penguin Classics', '1813', '978-0141439518', 7, 7, 90.00, 'Disponível'),
('Moby Dick', 'Herman Melville', 'Penguin Classics', '1851', '978-0142437247', 4, 4, 100.00, 'Disponível'),
('Guerra e Paz', 'Liev Tolstói', 'Companhia das Letras', '1869', '978-8535922343', 3, 3, 130.00, 'Disponível');

INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('Crime e Castigo', 'Fiódor Dostoiévski', 'Penguin Classics', '1866', '978-0143058144', 6, 6, 120.00, 'Disponível'),
('A Metamorfose', 'Franz Kafka', 'Companhia das Letras', '1915', '978-8535917769', 8, 8, 70.00, 'Disponível'),
('O Processo', 'Franz Kafka', 'Penguin', '1925', '978-0141197287', 5, 5, 80.00, 'Disponível'),
('Ulisses', 'James Joyce', 'Penguin Classics', '1922', '978-0141182801', 4, 4, 150.00, 'Disponível'),
('O Grande Gatsby', 'F. Scott Fitzgerald', 'Penguin Classics', '1925', '978-0141182634', 9, 9, 90.00, 'Disponível'),
('Cem Anos de Solidão', 'Gabriel García Márquez', 'Record', '1967', '978-8501090912', 7, 7, 110.00, 'Disponível'),
('O Morro dos Ventos Uivantes', 'Emily Brontë', 'Penguin Classics', '1847', '978-0141439556', 8, 8, 95.00, 'Disponível'),
('O Estrangeiro', 'Albert Camus', 'Companhia das Letras', '1942', '978-8535917486', 10, 10, 85.00, 'Disponível'),
('As Aventuras de Sherlock Holmes', 'Arthur Conan Doyle', 'HarperCollins', '1892', '978-0007350896', 6, 6, 100.00, 'Disponível'),
('Drácula', 'Bram Stoker', 'Pengu1in Classics', '1897', '978-0141439846', 7, 7, 130.00, 'Disponível');


-- Inserindo Emprestimos
INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(1, 2, '2024-09-01', '2024-09-15', 'Em andamento'),
(2, 1, '2024-09-02', '2024-09-16', 'Em andamento'),
(3, 5, '2024-09-03', '2024-09-17', 'Em andamento'),
(5, 3, '2024-09-04', '2024-09-18', 'Em andamento'),
(4, 6, '2024-09-05', '2024-09-19', 'Em andamento'),
(6, 4, '2024-09-06', '2024-09-20', 'Em andamento'),
(7, 8, '2024-09-07', '2024-09-21', 'Em andamento'),
(8, 7, '2024-09-08', '2024-09-22', 'Em andamento'),
(10, 9, '2024-09-09', '2024-09-23', 'Em andamento'),
(9, 10, '2024-09-10', '2024-09-24', 'Em andamento'),
(1, 10, '2024-09-11', '2024-09-25', 'Em andamento'),
(2, 3, '2024-09-11', '2024-09-25', 'Em andamento'),
(4, 5, '2024-09-11', '2024-09-25', 'Em andamento'),
(6, 2, '2024-09-11', '2024-09-25', 'Em andamento');

INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(3, 4, '2024-09-26', '2024-10-10', 'Em andamento'),
(5, 1, '2024-09-27', '2024-10-11', 'Em andamento'),
(6, 7, '2024-09-28', '2024-10-12', 'Em andamento'),
(7, 2, '2024-09-29', '2024-10-13', 'Em andamento'),
(8, 5, '2024-09-30', '2024-10-14', 'Em andamento'),
(9, 1, '2024-10-01', '2024-10-15', 'Em andamento'),
(10, 4, '2024-10-02', '2024-10-16', 'Em andamento'),
(1, 9, '2024-10-03', '2024-10-17', 'Em andamento'),
(2, 6, '2024-10-04', '2024-10-18', 'Em andamento'),
(4, 8, '2024-10-05', '2024-10-19', 'Em andamento');

SELECT * FROM Livro;
SELECT * FROM Emprestimo;
SELECT * FROM Aluno;
