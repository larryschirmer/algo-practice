const ecludianDistance = (point1: number[], point2: number[]) => {
  const pointDimensions = new Array(point1.length).fill(0);

  return Math.sqrt(
    pointDimensions.reduce<number>((acc, _, idx) => {
      return acc + Math.pow(point2[idx] - point1[idx], 2);
    }, 0),
  );
};

const findCentroid = (points: number[][]) => {
  const centroid = new Array(points[0].length).fill(0);
  points.forEach((point) => {
    point.forEach((value, idx) => {
      centroid[idx] += value;
    });
  });

  return centroid.map((value) => value / points.length);
};

const closestCentroid = (centroids: number[][], point: number[]) => {
  const distances = centroids.map((centroid) => ecludianDistance(centroid, point));
  return distances.indexOf(Math.min(...distances));
};

const createClusters = (points: number[][], centroids: number[][], k: number) => {
  return points.reduce<number[][]>((clusterArr, point, pointIdx) => {
    const centroidIdx = closestCentroid(centroids, point);

    return clusterArr.map((cluster, clusterIdx) => {
      if (clusterIdx === centroidIdx) return [...cluster, pointIdx];
      return cluster;
    });
  }, new Array(k).fill([]));
};

const updateCentroids = (dataset: number[][], clusters: number[][], centroids: number[][]) => {
  return centroids.map((_, centroidIdx) => {
    const cluster = clusters[centroidIdx].map((pointIdx) => dataset[pointIdx]);
    return findCentroid(cluster);
  });
};

const totalCentroidDistance = (centroids: number[][], newCentroids: number[][]) => {
  return newCentroids.reduce<number>((acc, centroid, idx) => {
    return acc + ecludianDistance(centroid, centroids[idx]);
  }, 0);
};

const pointVariance = (clusters: number[][], centroids: number[][]) => {
  return clusters.reduce<number>((acc, cluster, clusterIdx) => {
    return (
      acc +
      cluster.reduce<number>((acc, pointIdx) => {
        return acc + ecludianDistance(centroids[clusterIdx], dataset[pointIdx]);
      }, 0)
    );
  }, 0);
};

const kMeans = (dataset: number[][], k: number, epochs: number = 10) => {
  // if k > dataset.length, throw error
  if (k > dataset.length) {
    throw new Error('k cannot be greater than the dataset length');
  }

  // Make random centroids
  let initalCentroids = new Set<number[]>();
  // ensure each is unique
  while (initalCentroids.size < k) {
    const randomPoint = dataset[Math.floor(Math.random() * dataset.length)];
    if (initalCentroids.has(randomPoint)) continue;
    initalCentroids.add(randomPoint);
  }

  let centroids = Array.from(initalCentroids);
  let clusters: number[][];

  for (let i = 0; i < epochs; i++) {
    // Ask each point which centroid is closest to it
    // Store point in each cluster
    clusters = createClusters(dataset, centroids, k);

    // Find new centroids
    let prevCentroids = centroids;
    centroids = updateCentroids(dataset, clusters, centroids);

    // Check if centroids have moved
    const totalDistance = totalCentroidDistance(prevCentroids, centroids);

    // If no centroids have moved, stop
    if (totalDistance < 1e-5) break;
  }

  return pointVariance(clusters, centroids);
};

// Have list of points
const dataset = [
  [1, 2, 1],
  [2, 3, 2],
  [3, 1, 3],
  [4, 2, 4],
  [5, 4, 5],
  [6, 5, 6],
  [7, 6, 7],
  [8, 7, 8],
];

kMeans(dataset, 1); //?
kMeans(dataset, 2); //?
kMeans(dataset, 3); //?
kMeans(dataset, 4); //?
kMeans(dataset, 5); //?
kMeans(dataset, 6); //?
kMeans(dataset, 7); //?
kMeans(dataset, 8); //?
kMeans(dataset, 9); //?
