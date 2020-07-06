class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const linkedListCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

module.exports = { linkedListCycle, Node };