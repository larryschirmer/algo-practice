import Node from './node';

const depthFirstValuesRecur = (root: Node) => {
  if (!(root instanceof Node)) return [];

  let result = [root.val];

  result.push(...depthFirstValuesRecur(root.left));
  result.push(...depthFirstValuesRecur(root.right));

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

depthFirstValuesRecur(a); //?
depthFirstValuesRecur(null); //?
