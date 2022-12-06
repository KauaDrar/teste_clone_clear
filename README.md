# Teste simples ReactJs

# Ao fazer clone do projeto

- Para instalar as dependencias

### `npm install`

- Para iniciar o projeto

### `npm run start`

## Caso 2

- Gostariamos de fazer uma tabela de funcionarios onde podemos inserir os dados nela e mostra em tempo real, a idea e que os dados viria do backend mas como nao temos backend faremos um push em um arquivo "JSON";

- Temos 3 Input que precisamos pegar o valor para inserir os funcionarios;

- Temos algumas validacao para fazer, nao podemos enviar campos vazios;

- A tabela deve renderizar na hora que for inserido os dados;

- voce deverar renderizar os arquivos "JSON" que esta na pasta Mocks;

- Voce deverar adicionar alguns novos funcionarios na tabela;

- Cada "FUNCIONARIO" deverar ter um "ID" que sera auto incremente;

- Ao adiconar o funcionario ele deverar volta a pagina de lista e mostra um alert dizendo que o funcionario foi adicionado;

## Dicas

- Para enviar os dados para o arquivos "mockup" tem que ser um objeto;

- campo "wage" deve ter o valor "number";

- Crie os "STATE" como objeto para facilitar;

## Primeiros passos

- Voce deve analisar o codigo que estao dentro do component "Case2" e verificar oque esta faltando para ele funcionar. (O codigo so esta comentando para nao crashar aplicacao);

- Voce deverar passar o arquivo "JSON" via "PROPS", como aprendido na mini aula que o pedro ensinou!;

- O arquivo index contem o "COMPONENTE" principal que o "Case2";

- Temos um modal Para insercao dos dados para adicionar o "FUNCIONARIO" voce precisa "COMPLETAR" a logica que esta dentro do component "Case2",
  voce deverar criar um "STATE" com um valor "BOOLEAN" baseado na logica que ja esta feita no codigo;

- O Component "Case2" recebe 1 "PROPS"

- Component "MODAL" Recebe 2 "PROPS"

- No component "Case2" deverar conter uma renderizacao da lista de funcionario que esta vindo pelo arquivo "JSON"

- Component "Modal" deverar receber os valores do "JSON" passado pelo component "Case2"
