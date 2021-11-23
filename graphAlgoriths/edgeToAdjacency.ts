export type Graph = { [key: string]: string[] };
export type Edge = [string, string];

const edgeToAdjacency = (edges: Edge[]) => {
  let graph = {} as Graph;

  for (let [a, b] of edges) {
    if (graph[a] === undefined) graph[a] = [b];
    else graph[a].push(b);
    if (graph[b] === undefined) graph[b] = [a];
    else graph[b].push(a);
  }

  return graph;
};

export default edgeToAdjacency;

const edgeList: Edge[] = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

edgeToAdjacency(edgeList); //?
