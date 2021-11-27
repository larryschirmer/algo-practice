import Node from './node';

const depthFirstValuesIter = (root: Node) => {
  if (!(root instanceof Node)) return [];

  let result = [];
  const stack = [root];

  while (stack.length) {
    let current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

depthFirstValuesIter(a); //?
depthFirstValuesIter(null); //?
