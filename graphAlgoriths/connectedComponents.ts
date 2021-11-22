const island = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1],
];

const miniIsland = [
  [1, 1],
  [0, 1],
];

const connectedComponents = (island: number[][]) => {
  let visited = island;
  let count = 0;

  const stack: number[][] = [];

  const exploreStack = () => {
    while(stack.length) {
      const [x, y] = stack.pop();
      if (visited?.[x]?.[y] === 1) {
        visited[x][y] = 0;
        stack.push([x - 1, y]);
        stack.push([x, y + 1]);
        stack.push([x + 1, y]);
        stack.push([x, y - 1]);
      }
    }
  }

  for (let rowIdx = 0; rowIdx < island.length; rowIdx++) {
    for (let colIdx = 0; colIdx < island[rowIdx].length; colIdx++) {
      // if not visited and not a wall
      if (island[rowIdx][colIdx] === 1) {
        // mark as visited
        visited[rowIdx][colIdx] = 0;
        // push all neghbours to stack
        stack.push([rowIdx - 1, colIdx]);
        stack.push([rowIdx, colIdx + 1]);
        stack.push([rowIdx + 1, colIdx]);
        stack.push([rowIdx, colIdx - 1]);
        exploreStack();
        count++;
      }
    }
  }

  return count;
};

connectedComponents(island); //?
