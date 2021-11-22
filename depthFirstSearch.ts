const depthFirstSearch = (graph: { [key: string]: string[] }, start: string) => {
  let stack: string[] = [start];

  while (stack.length) {
    const node = stack.pop();
    console.log(node);

    for (let neighbor of graph[node]) {
      stack.push(neighbor);
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

depthFirstSearch(adjecencyList, 'a'); //?
