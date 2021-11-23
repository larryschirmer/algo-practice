import edgeToAdjacency, { Edge, Graph } from './edgeToAdjacency';

/**
 * Take a graph node and return true if node has not been visited
 *
 * ** Side Effects ** : Traverses the graph and adds each visited property to set
 *
 * @param graph - Graph to traverse
 * @param node - Node to check
 * @param visited - Set of visited nodes
 * @returns boolean - True if node has not been visited
 */
const explore = (graph: Graph, node: string, visited: Set<string>) => {
  // exit if node is already visited
  if (visited.has(node)) return false;
  // mark node as visited
  visited.add(node);

  const stack = [node];

  while (stack.length) {
    const current = stack.pop();
    visited.add(current);

    graph[current].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    });
  }

  return true;
};

const connectedComponents = (graph: { [key: string]: string[] }) => {
  const visited = new Set<string>();
  let components = 0;

  Object.keys(graph).forEach((node) => {
    if (explore(graph, node, visited)) {
      components++;
    }
  });

  return components;
};

const edgeList: Edge[] = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

const adjacencyList = edgeToAdjacency(edgeList);

connectedComponents(adjacencyList); //?
