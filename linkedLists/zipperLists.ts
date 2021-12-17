export {};

class Node {
  val: string;
  next: Node | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

const zipperLists = (head1: Node, head2: Node) => {
  let tail = head1;
  let current1: Node | null = head1.next;
  let current2: Node | null = head2;
  let idx = 0;

  while (current1 !== null && current2 !== null) {
    if (idx % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    idx++;
  }

  if (current1 !== null) tail.next = current1
  if (current2 !== null) tail.next = current2

  return head1;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node('x');
const y = new Node('y');
const z = new Node('z');
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x); //?
// a -> x -> b -> y -> c -> z
