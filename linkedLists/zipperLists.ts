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
  let headCur1: Node | null = head1;
  let headCur2: Node | null = head2;
  let headNxt1: Node | null = head1.next;
  let headNxt2: Node | null = head2.next;
  let head: Node | null = headCur1;
  let tail: Node | null = head;

  while (
    tail !== null &&
    headCur1 !== null &&
    headCur1.next !== null &&
    headCur2 !== null &&
    headCur2.next !== null
  ) {
    tail.next === headCur2;
    tail //?
    tail = tail.next
    if (tail) tail.next === headNxt1;
    tail //?
    if (tail) tail = tail.next
    
    headCur1 = headNxt1;
    headCur2 = headNxt2;
    headNxt1 = headCur1?.next ?? null;
    headNxt2 = headCur2?.next ?? null;
  }
  head //?
  tail //?


  if (headCur1 !== null && headCur1.next === null && headCur2 !== null && headCur2.next === null) {
    headCur1.next === headCur2;
    headCur2.next === headNxt1;
    return head1;
  }
  if (headCur1 !== null && headCur1.next === null && headCur2 !== null && headCur2.next !== null) {
    headCur1.next === headCur2;
    return head1;
  }
  if (headCur1 !== null && headCur1.next !== null && headCur2 !== null && headCur2.next === null) {
    headCur1.next === headCur2;
    headCur2.next === headNxt1;
    return head1;
  }
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

zipperLists(a, x);
// a -> x -> b -> y -> c -> z
