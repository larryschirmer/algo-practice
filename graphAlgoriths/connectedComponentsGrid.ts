const connectedComponents = (grid: number[][]) => {
  let visited = new Set<string>();
  const isVisited = (x: number, y: number) => visited.has(`${x},${y}`);
  let count = 0;

  if (grid.length === 0 || grid[0].length === 0) return count;
  const stack: [number, number][] = [];

  for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
    for (let colIdx = 0; colIdx < grid[0].length; colIdx++) {
      // if not visited and not 0
      if (!isVisited(rowIdx, colIdx) && grid[rowIdx]?.[colIdx] === 1) {
        // mark as visited
        visited.add(`${rowIdx} ${colIdx}`);

        // push to stack
        stack.push([rowIdx - 1, colIdx]);
        stack.push([rowIdx, colIdx + 1]);
        stack.push([rowIdx + 1, colIdx]);
        stack.push([rowIdx, colIdx - 1]);

        // while stack is not empty explore neighbors
        while (stack.length) {
          const [x, y] = stack.pop();
          if (!visited.has(`${x},${y}`) && grid[x]?.[y] === 1) {
            visited.add(`${x},${y}`);
            stack.push([x - 1, y]);
            stack.push([x, y + 1]);
            stack.push([x + 1, y]);
            stack.push([x, y - 1]);
          }
        }
        count++;
      }
    }
  }

  return count;
};

const grid = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1],
];

connectedComponents(grid); //?
