function bfs(rootNode, vertices, edges){
    rootNode.distance = 0;
    const visited = [rootNode];
    const explored = [];
    while (visited.length) {
        const node = visited.shift();
        const adjNodes = findAdjacent(node.name, vertices, edges);
        markDistanceAndPredecessor(node, adjNodes);
        for (let i = 0; i < adjNodes.length; i++) {
            visited.push(adjNodes[i]);
        }
        explored.push(node);
    }
    return explored;
}

function findAdjacent(name, vertices, edges) {
    let adj = [];
    for (const edge of edges) {
        const [vertex1, vertex2] = edge;
        if (vertex1 === name) {
            const vertex = vertices.find(v => v.name === vertex2);
            if (vertex.distance === null) adj.push(vertex);
        } else if (vertex2 === name) {
            const vertex = vertices.find(v => v.name === vertex1);
            if (vertex.distance === null) adj.push(vertex);
        }
    }
    return adj;
}

function markDistanceAndPredecessor(node, adjacentNodes) {
    for (let i = 0; i < adjacentNodes.length; i++) {
        const adjacentNode = adjacentNodes[i]; 
        adjacentNode.distance = node.distance + 1;
        adjacentNode.predecessor = node;
    }
    return adjacentNodes;
}