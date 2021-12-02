import Node from './Node';

const linkedPalindrome = (root: Node): boolean => {
  if (!(root instanceof Node)) return null;
  if (!(root.next instanceof Node)) return true;

  let list = [];
  let stack = [root];

  while (stack.length) {
    let current = stack.pop();
    list.push(current.val);
    if (current.next instanceof Node) {
      stack.push(current.next);
    }
  }

  return list.join(',') === list.reverse().join(',');
};

const four = new Node('4');
const three = new Node('3');
const two = new Node('2');
const three1 = new Node('3');
const four1 = new Node('4');

four.next = three;
three.next = two;
two.next = three1;
three1.next = four1;

linkedPalindrome(four); //?
