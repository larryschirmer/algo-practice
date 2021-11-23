type Graph = { [key: number]: number[] };

/**
 * Expore the graph from the given unvisited node and return the size of the connected component
 * 
 * ** Side Effects ** : Traverses the graph and adds each visited property to set
 * 
 * @param graph - the graph to explore
 * @param node - the node to start from
 * @param visited - the set of visited nodes
 * @returns number - the size of the connected component
 */
const explore = (graph: Graph, node: number, visited: Set<number>): number => {
  let size = 1;
  visited.add(node);
  let stack = [node];

  while (stack.length) {
    let current = stack.shift();
    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
        size++;
      }
    }
  }

  return size;
};

const largestComponent = (graph: Graph): number => {
  const visited = new Set<number>();
  let largest = 0;

  for (let node of Object.keys(graph)) {
    let current = +node;

    if (!visited.has(current)) {
      let size = explore(graph, current, visited);
      if (size > largest) largest = size
    }
  }
  return largest;
};

const adjacencyList = {
  0: [1, 8],
  1: [0],
  2: [3, 4],
  3: [2, 4],
  4: [2, 3],
  5: [0, 8],
  6: [],
  7: [],
  8: [0, 5],
} as Graph;

largestComponent(adjacencyList); //?