const bredthFirstSearch = (graph: { [key: string]: string[] }, start: string) => {
  const queue: string[] = [start];

  while (queue.length) {
    const node = queue.shift();
    console.log(node);

    for (let neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }
};

const adjecencyList = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

bredthFirstSearch(adjecencyList, 'a');
