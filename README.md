## build

Responsável por realizar a construção (build) do projeto usando o TypeScript Compiler (tsc). Ao executar esse comando, o TypeScript compila todos os arquivos `.ts` presentes no projeto e gera os respectivos arquivos `.js` na pasta de saída (normalmente definida no arquivo de configuração tsconfig.json). Esses arquivos JavaScript transpilados são usados para executar o projeto.

## start

Responsável por iniciar a execução do projeto. Ele utiliza o `Node.js` para executar o arquivo `index.js` presente na pasta dist. A pasta dist geralmente é a pasta de saída onde os arquivos JavaScript transpilados pelo TypeScript são armazenados após a construção do projeto. O comando `node dist/index.js` inicia a execução do arquivo `index.js`, que é o ponto de entrada do projeto transpilado.

## dev

Este script é usado durante o desenvolvimento do projeto e utiliza o pacote `nodemon` para monitorar as alterações nos arquivos `.ts`. O `nodemon` é uma ferramenta que ajuda a reiniciar automaticamente o servidor sempre que houver mudanças nos arquivos do projeto. O comando `npm run build` é executado para garantir que o projeto seja recompilado pelo TypeScript antes de cada reinício do servidor. Após a recompilação, o comando `node dist/server.js` é usado para iniciar o servidor atualizado.

# Arquivos de Erro

Neste projeto, foram desenvolvidas algumas classes especiais para lidar com diferentes tipos de erros no servidor. Cada classe oferece um tratamento específico para os erros, permitindo personalizar mensagens e códigos de status HTTP associados, proporcionando uma experiência mais robusta e controlada em todo o sistema.

## Erro Base

ErroBase é uma classe, que estende a classe nativa `Error`. Essa classe é usada para criar objetos de erro personalizados que possuem uma mensagem e um status HTTP associado. Alem disso, a classe também possui um método chamado enviarResposta que é usado para enviar uma resposta HTTP com a mensagem e o status de erro.

## Erro 404

Define uma classe chamada `erro404` que herda da classe `ErroBase`. A classe `erro404` é uma classe personalizada para representar um erro 404 (Página não encontrada).

## Erro requisição

Define uma classe chamada `reqError` que herda da classe 'ErroBase'. A classe `reqError` é uma classe personalizada para representar um erro 400 (Requisição inválida).

## Erro Validação

Define uma classe chamada `validatonError` que herda da classe 'reqError'. A classe `validatonError` é uma classe personalizada para representar erros de validação específicos do Mongoose.

# Middlewares

(frase de introdução)

## Manipulador 404

middleware personalizado para lidar com erros do tipo 404 (Página não encontrada) em um aplicativo Express. Vamos explicar o código em detalhes:

## Minipulador de Erros

middleware personalizado para lidar com diferentes tipos de erros em um aplicativo Express. Vamos explicar o código em detalhes:

Dentro da função `manipuladorDeErros`, são feitas verificações para determinar o tipo de erro que ocorreu e tomar a ação apropriada de acordo com o tipo de erro.

A- Se o erro for uma instância de `mongoose.Error.CastError`, isso indica um erro de conversão do Mongoose. Nesse caso, é criada uma instância da classe `reqError` e o método `enviarResposta()` é chamado para enviar uma resposta HTTP com um erro 400 (Requisição inválida).

B- Se o erro for uma instância da classe `erro404`, significa que é um erro 404 (Página não encontrada). Nesse caso, o método `enviarResposta()` da instância da classe `erro404` é chamado para enviar uma resposta HTTP com a mensagem e o status de erro associados.

C- Se o erro for uma instância de `mongoose.Error.ValidationError`, isso indica um erro de validação específico do Mongoose. Nesse caso, é criada uma instância da classe `validatonError`, passando o erro como argumento, e o método `enviarResposta()` é chamado para enviar uma resposta HTTP com as mensagens de erro de validação e o status 400.

D- Se o erro não corresponder a nenhum dos casos anteriores, é criada uma instância da classe `ErroBase`, que é a classe base para erros personalizados. O método `enviarResposta() `é chamado para enviar uma resposta HTTP com uma mensagem de erro genérica e o status 500 (Erro interno do servidor).
