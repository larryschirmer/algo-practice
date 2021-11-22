const depthFirstSearch = (graph: { [key: string]: string[] }, start: string, end?: string) => {
  let stack: string[] = [start];

  while (stack.length) {
    const node = stack.pop();
    console.log(node);

    if (node === end) {
      return true;
    }

    for (let neighbor of graph[node]) {
      stack.push(neighbor);
    }
  }

  return false;
};

const adjacencyList = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

depthFirstSearch(adjacencyList, 'a'); //?
