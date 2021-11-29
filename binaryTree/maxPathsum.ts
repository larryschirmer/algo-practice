import Node from './node';

const maxPathSum = (root: Node) => {
  let max = -Infinity;
  if (!(root instanceof Node)) return max;
  if (typeof root.val == 'string') return max;
  if (!(root.left instanceof Node) && !(root.right instanceof Node)) return root.val;

  const left = root.val + maxPathSum(root.left);
  const right = root.val + maxPathSum(root.right);

  const maxSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  return maxSum + root.val;
};

const five = new Node(5);
const eleven = new Node(11);
const three = new Node(3);

five.left = eleven;
five.right = three;

const four = new Node(4);
const two = new Node(2);

eleven.left = four;
eleven.right = two;

const one = new Node(1);

three.right = one;

maxPathSum(five); //?
