class Node {
  val: string | number;
  left: Node;
  right: Node;

  constructor(val: string | number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export default Node;
