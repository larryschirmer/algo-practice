import edgeToAdjacency, { Edge, Graph } from './edgeToAdjacency';

const shortestPath = (graph: Graph, start: string, end: string) => {
  const stack: [string, number][] = [[start, 0]];
  const visited = new Set<string>();

  while (stack.length) {
    const [current, distance] = stack.shift();
    if (current === end) return distance;
    if (visited.has(current)) continue;

    visited.add(current);

    for (let neighbor of graph[current]) {
      stack.push([neighbor, distance + 1]);
    }
  }
  return -1;
};

const edges: Edge[] = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

const noPath: Edge[] = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f'],
];

const adjacencyList: Graph = edgeToAdjacency(noPath);
shortestPath(adjacencyList, 'b', 'g'); //?
 