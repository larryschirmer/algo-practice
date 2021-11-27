class Node {
  val: string;
  left: Node;
  right: Node;

  constructor(val: string) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export default Node;
