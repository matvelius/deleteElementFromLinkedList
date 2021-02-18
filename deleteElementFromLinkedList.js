class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

function solution(node, idx) {

  if (idx == 0) {
    return node.next
  }

  let currentNode = node
  let currentIndex = idx
  let previousNode = node

  // find node to delete
  while (currentIndex > 0 && currentNode != null) {
    previousNode = currentNode
    currentNode = currentNode.next
    currentIndex -= 1
  }

  previousNode.next = currentNode.next

  return node

}