export {};

const minimumIsland = (grid: number[][]): number => {
  // grid is empty, return
  if (!grid.length || !grid[0].length) return 0;

  // Create a set to store the visited nodes
  const visited = new Set<string>();
  const isVisited = (x: number, y: number) => visited.has(`${x},${y}`);

  // Create a queue to store the nodes to be visited
  const queue: [number, number][] = [];

  // Create a variable to store the smallest number of nodes
  let min = Infinity;

  const explore = () => {
    // initialize island size
    let size = 0;

    // explore queue
    while (queue.length) {
      // get next item
      let [x, y] = queue.shift();

      // if item is a new piece of land then
      if (!isVisited(x, y) && grid?.[x]?.[y] === 1) {
        visited.add(`${x},${y}`);
        // add neighbors
        queue.push([x + 1, y]);
        queue.push([x, y + 1]);
        queue.push([x - 1, y]);
        queue.push([x, y - 1]);
        // increment island size
        size += 1;
      }
    }

    if (size < min) min = size;
  };

  // Loop through the grid
  for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
    for (let colIdx = 0; colIdx < grid[0].length; colIdx++) {
      // If the node is not visited and is an island
      if (!isVisited(rowIdx, colIdx) && grid[rowIdx][colIdx] === 1) {
        // Add the node to the queue
        queue.push([rowIdx, colIdx]);
        explore();
      }
    }
  }

  return min;
};

const islands = [
  [0, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 0],
];

minimumIsland(islands);
