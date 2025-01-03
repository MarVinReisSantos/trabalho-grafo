## Trabalho de Algoritmos de Grafos - Algoritmo de Dijkstra para Menor Caminho

### Disciplina: Grafos  
### Curso: Sistemas de Informação  
### Universidade: PUC Betim  

---

## Descrição

Este projeto foi desenvolvido para a disciplina de **Algoritmos de Grafos** do curso de **Sistemas de Informação** da **PUC Betim**. O objetivo do trabalho é implementar o **algoritmo de Dijkstra**, utilizado para encontrar o **menor caminho** entre um vértice inicial e todos os outros vértices em um grafo ponderado.

O sistema possui duas telas principais:
1. **Tela de Entrada de Dados**: Onde o usuário insere o grafo com os vértices e as distâncias entre eles.
2. **Tela de Visualização do Grafo**: Exibe o grafo em uma representação gráfica utilizando o `canvas` HTML e permite calcular o menor caminho usando o algoritmo de Dijkstra.

Ao clicar no botão **"Calcular Menor Caminho"**, o algoritmo é executado e o menor caminho entre os vértices é calculado e exibido na tela. <a href="https://trabalho-grafo.netlify.app">Acessar o sistema</a> 

---

## Funcionalidades

### 1. Tela de Entrada de Dados
Na primeira tela, o usuário deve inserir as informações do grafo:
- **Vértices**: Um conjunto de pontos (exemplo: A, B, C, D).
- **Arestas**: As conexões entre os vértices, com os respectivos pesos (exemplo: A-B-10, B-C-5).

Esses dados serão usados como entrada para o algoritmo de Dijkstra.

### 2. Tela de Visualização do Grafo
Na segunda tela, o grafo é desenhado no `canvas` HTML. Cada vértice é representado como um ponto, e as arestas (conexões) são desenhadas como linhas entre os pontos. Além disso, ao clicar no botão **"Calcular Menor Caminho"**, o algoritmo de Dijkstra será executado, e o menor caminho entre os vértices será exibido.

---

## Algoritmo de Dijkstra

O **algoritmo de Dijkstra** é um algoritmo utilizado para encontrar o menor caminho de um vértice inicial até todos os outros vértices de um grafo ponderado. O algoritmo segue os seguintes passos:

1. Inicializa as distâncias de todos os vértices para infinito, exceto para o vértice inicial, que tem distância 0.
2. Marca todos os vértices como não visitados.
3. Escolhe o vértice com a menor distância conhecida e visita seus vizinhos, atualizando as distâncias.
4. Repete o processo até que todos os vértices tenham sido visitados.

---

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos principais:

- **index.html**: A página principal que contém o formulário de entrada de dados e o `canvas` para desenhar o grafo.
- **style.css**: Arquivo de estilos para formatar a página e o `canvas`.
- **script.js**: O código JavaScript que implementa o algoritmo de Dijkstra, a lógica para desenhar o grafo no `canvas` e a manipulação do DOM para exibir o resultado.

---

## Como Usar

1. Abra o arquivo `index.html` em seu navegador.
2. Na primeira tela, insira os **vértices** no campo de texto `Pontos de Entrega` (exemplo: `A, B, C, D`).
3. Em seguida, insira as **arestas** no formato `Vértice1-Vértice2-Peso` no campo `Distâncias entre os pontos` (exemplo: `A-B-10, B-C-5`).
4. Clique no botão **"Analisar o Grafo"** para gerar o grafo na tela de visualização.
5. Clique no botão **"Calcular Menor Caminho"** para calcular o menor caminho a partir do vértice inicial (geralmente o primeiro vértice da lista).
6. O resultado será exibido na tela, mostrando as distâncias mínimas de cada vértice a partir do ponto inicial.

---

## Entrada Analisada no desenvolvimento do trabalho

### Vértices:
* A, B, C, D, E, F, G

### Arestas:
* A-B-3,A-C-2,B-D-4,B-E-6,C-D-1,D-E-3,D-F-2,E-F-5,E-G-1,F-G-2

Ao calcular o menor caminho, o algoritmo irá determinar a distância mínima de cada vértice a partir do vértice inicial (A).

---

## Exemplos de Saída Analisada no desenvolvimento do trabalho

Ao clicar no botão **"Calcular Menor Caminho"**, o resultado será exibido no elemento com a classe `result-dijkstra`. O algoritmo irá calcular o menor caminho entre o ponto inicial e todos os outros vértices e exibir os resultados na tela.

Exemplo de saída para o exemplo usado no trabalho:
* Menor caminho de A: {"A": 0, "B": 10, "C": 15, "D": 22}

---

## Tecnologias Utilizadas

- **HTML5**: Para estruturação da página e criação do formulário.
- **CSS3**: Para estilização da interface do usuário.
- **JavaScript**: Para implementar o algoritmo de Dijkstra, manipulação do DOM e desenho do grafo no `canvas`.
- **Canvas HTML5**: Para desenhar o grafo de forma visual.

---

## Contribuindo

Se você gostaria de contribuir para o projeto, fique à vontade para fazer um **fork** do repositório, adicionar melhorias ou corrigir bugs. Após isso, crie um **pull request** com suas alterações.

---

## Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Agradecimentos

- **PUC Betim**, pela oportunidade de aprender e aplicar o algoritmo de Dijkstra.
- Documentação e exemplos de Dijkstra em sites como [Wikipedia](https://pt.wikipedia.org/wiki/Algoritmo_de_Dijkstra).

---

