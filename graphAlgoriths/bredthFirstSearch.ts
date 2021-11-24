const bredthFirstSearch = (graph: { [key: string]: string[] }, start: string, end?: string) => {
  const queue: string[] = [start];

  while (queue.length) {
    const node = queue.shift();
    console.log(node);

    if (node === end) {
      return true;
    }

    for (let neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }

  return false;
};

const adjList = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

bredthFirstSearch(adjList, 'a', 'g'); //?
