<!--

REQUISITOS


Descrição: Para auxiliar os estudantes na escolha de disciplinas, você ficou encarregado
de elaborar um sistema onde estudantes podem avaliar professores e disciplinas. Essa é
uma oportunidade para você colocar em prática seus conhecimentos obtidos na disciplina
de Bancos de Dados. O programa vai permitir que estudantes se cadastrem e postem
avaliações de professores e turmas de diferentes semestres. Comentários ofensivos podem
ser denunciados por usuários, que então são avaliados por administradores. Os
administradores podem ignorar a denúncia, aceitá-la e remover o comentário ofensivo e até
mesmo excluir uma conta de algum estudante. Os estudantes também podem editar e
excluir seus próprios comentários.
Produtos (o que o aluno deve entregar): (1) relatório, (2) scripts SQL para criação do
esquema do banco de dados e (3) o código que implementa a regra de negócio.
Arquivos fornecidos: A oferta dos semestres 2022.1, 2022.2 e 2023.1 estão no arquivo
compactado ofertas_sigaa.zip e devem ser usadas para alimentar o banco de dados do
programa.
Entidades:
 Estudantes (usuários);
 Professores;
 Disciplinas;
 Turmas;
 Departamentos;
 Avaliações;
 Denúncias;
 Outras, se quiser.
Regras de negócio:
 Os usuários e administradores do sistema são estudantes da UnB (com e-mail,
matrícula, curso, senha etc.);
 Professores e disciplinas estão relacionados com departamentos;
 Disciplinas estão relacionadas e departamentos;
 Turmas estão relacionadas com professores e disciplinas;
 Avaliações só podem ser feitas por estudantes;
 Denúncias de avaliações são feitas por estudantes e são avaliadas por
administradores.
Requisitos:
 É preciso montar o Modelo Conceitual (MER) e Modelo Lógico (Relacional);
 Deve ser feito um programa de interface com o usuário para que ele possa fazer o
CRUD (create, read, update, and delete);
 O CRUD deve ser feito para pelo menos 3 entidades;
 É necessário construir uma camada de persistência, com escrita de código SQL;
 Deve ser fornecido código para inserção de pelo menos 3 linhas em cada uma das
tabelas criadas;
 Construção de pelo menos uma View;
 Construção de pelo menos uma Procedure;
 Inserção de dado binário (BLOB) no banco de dados
(exemplo:https://docs.oracle.com/javadb/10.8.3.0/ref/rrefblob.html);
 Fazer um vídeo de até 5 minutos apresentando o programa e subi-lo no YouTube
(precisa colocar o link no relatório).
O relatório final deve conter:
 Introdução;
 Diagrama de Entidade Relacionamento;
 Modelo Relacional;
 Avaliação das formas normais em pelo menos 3 tabelas;
 Conclusão.
Os alunos devem subir num repositório público (GitHub/Gitlab):
 O script SQL que gerou o banco de dados;
 Arquivos de inserção básica de dados no banco;
 Código do programa de interface com o usuário.
 O códígo deve ser reprodutível (capriche na documentação do código e da
configuração do ambiente)



-->


# avalia.ai - Trabalho Bancos de Dados UnB

## Descrição do Projeto

Projeto desenvolvido para a disciplina de Bancos de Dados da Universidade de Brasília (UnB) no semestre 1/2023.
O projeto consiste em um sistema de avaliação de disciplinas e professores da UnB. O sistema permite que os alunos avaliem as disciplinas e professores que já cursaram, escrevendo um comentário e dando uma nota.

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
- SGBD: PostgreSQL
- Backend: Javascript com NestJS
- Frontend: Javascript com ReactJS

## Como rodar o projeto

### Pré-requisitos

Para rodar o projeto, é preciso ter instalado as seguintes ferramentas:
- [PostgreSQL](https://www.postgresql.org/download/) (versão utilizada: 12.9)
- [Node.js](https://nodejs.org/en/download/) (versão utilizada: 18.16.1)
- [yarn](https://yarnpkg.com/getting-started/install) (versão utilizada: 1.22.5)

O projeto foi desenvolvido no sistema operacional Linux (Ubuntu 20.04.1).

### Rodando o projeto

#### 1. Clone o projeto

#### 2. Crie o banco de dados

Crie um banco de dados no PostgreSQL.

```bash
$ sudo -u postgres psql
postgres=# CREATE DATABASE avaliaai;
```
#### 3. Crie as tabelas e importe os dados

Acesse o arquivo populate.sql da pasta `data` e mude a variável `data_path` para o caminho absoluto da pasta `data` do projeto. Em seguida, execute o script no banco de dados criado anteriormente.

```bash
$ cd data
$ sudo -u postgres psql avaliaai < populate.sql
```


#### 4. Configure as variáveis de ambiente

Acesse a pasta `server` e renomeie o arquivo `.env.example` para `.env`. Em seguida, preencha as variáveis de ambiente com as informações do banco de dados criado anteriormente.

#### 5. Instale as dependências

Acesse a pasta `server` e instale as dependências do backend.

```bash
$ cd server
$ yarn install
```

Acesse a pasta `client` e instale as dependências do frontend.

```bash
$ cd client
$ yarn install
```

#### 6. Rode o projeto

Acesse a pasta `server` e rode o backend.

```bash
$ cd server
$ yarn start
```

Acesse a pasta `client` e rode o frontend.

```bash
$ cd client
$ yarn dev
```

Deve ser aberta uma janela no navegador com o projeto rodando. Caso isso não ocorra, acesse o endereço mostrado no terminal.


#### 7. Acesse o sistema

Na criação do banco de dados, foram criados dois usuários para testar o sistema. Os dados de acesso são:

Usuário padrão:
- Matrícula: `210000000`
- Senha: `12345678`

Administrador:
- Matrícula: `200000000`
- Senha: `12345678`
