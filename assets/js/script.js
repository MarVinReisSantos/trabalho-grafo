// Função para salvar os dados do grafos e direcionar para a próxima tela
function submitGraph() {
    const vertices = document.getElementById('vertices').value.split(',').map(v => v.trim().toUpperCase());
    const edges = document.getElementById('edges').value.split(',').map(e => e.trim().toUpperCase());
    
    const graph = {
        vertices: vertices,
        edges: edges
    };

    // Salvar grafo e redirecionar para a página de visualização
    localStorage.setItem('graph', JSON.stringify(graph));
    window.location.href = 'visualizacao.html'; // Redireciona para a página de visualização
}

//Criar o Grafo e escolher o menor caminho usando o algoritmo de Dijkstra
const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');

// Função para desenhar o grafo usando o canvas
function drawGraph(vertices, edges) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const vertexPositions = {};
    const radius = 20;

    console.log(vertices)
    // Define posições para os vértices
    const angleStep = (2 * Math.PI) / vertices.length;
    vertices.forEach((vertex, i) => {
        const x = canvas.width / 2 + Math.cos(angleStep * i) * 150;
        const y = canvas.height / 2 + Math.sin(angleStep * i) * 150;
        
        console.log(vertex)
        vertexPositions[vertex] = { x, y };
        // Desenha os vértices
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#007bff';
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = 'black';
        ctx.fillText(vertex, x - 5, y + 5);
    });

    // Desenha as arestas
    edges.forEach(edge => {
        const [start, end, distance] = edge.split('-');
        const startPos = vertexPositions[start];
        const endPos = vertexPositions[end];
        ctx.beginPath();
        ctx.moveTo(startPos.x, startPos.y);
        ctx.lineTo(endPos.x, endPos.y);
        ctx.strokeStyle = '#000';
        ctx.stroke();
        // Desenha o peso da aresta
        const midX = (startPos.x + endPos.x) / 2;
        const midY = (startPos.y + endPos.y) / 2;
        ctx.fillText(distance, midX, midY);
    });
}

// Algoritmo de Dijkstra para encontrar o menor caminho
function dijkstra(vertices, edges, start) {
    let distances = {};
    let previousVertices = {};
    let unvisited = new Set(vertices);

    vertices.forEach(vertex => {
        distances[vertex] = Infinity;
        previousVertices[vertex] = null;
    });
    distances[start] = 0;

    while (unvisited.size > 0) {
        let currentVertex = null;
        let minDistance = Infinity;
        unvisited.forEach(vertex => {
            if (distances[vertex] < minDistance) {
                currentVertex = vertex;
                minDistance = distances[vertex];
            }
        });

        unvisited.delete(currentVertex);

        edges.forEach(edge => {
            const [u, v, weight] = edge.split('-');
            if (u === currentVertex || v === currentVertex) {
                const neighbor = u === currentVertex ? v : u;
                const alt = distances[currentVertex] + parseInt(weight);
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previousVertices[neighbor] = currentVertex;
                }
            }
        });
    }

    return { distances, previousVertices };
}

function runDijkstra() {
    const graph = JSON.parse(localStorage.getItem('graph'));
    const vertices = graph.vertices;
    const edges = graph.edges;

    // Calcular o menor caminho a partir do ponto A
    const { distances, previousVertices } = dijkstra(vertices, edges, vertices[0]);

    // Exibir o menor caminho
    const element = document.getElementsByClassName('result-dijkstra')[0];
    element.innerText = `Menor caminho de A: ${JSON.stringify(distances)}`;
}

// Carregar o grafo da memória e desenhar
const graph = JSON.parse(localStorage.getItem('graph'));
const vertices = graph.vertices;
const edges = graph.edges;
drawGraph(vertices, edges);