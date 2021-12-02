import Node from './Node';

const middleValue = (root: Node) => {
  if (!(root instanceof Node)) return null;
  if (root.next === null) return root.val;
  let slow = root;
  let fast = root;

  while (fast instanceof Node) {
    slow = slow.next;
    fast = fast.next;
    fast = fast?.next;
  }

  return slow.val;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f
middleValue(a); //?
