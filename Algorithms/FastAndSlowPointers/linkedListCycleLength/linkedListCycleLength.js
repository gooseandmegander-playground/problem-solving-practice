/**
 * Fast & Slow Pointers Pattern: LinkedList Cycle Length
 * 
 * Problem Statement: Given the head of a LinkedList with a cycle, find the length of the cycle.
 * 
 * Example 1:
 * LinkedList: (head) 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 3
 * Input: head
 * Output: 4
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function linkedListCycleLength(head) {
  let slow = head;
  let fast = head;

  while (fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return calculateCycleLength(slow);
    }
  }
  return 0;
}

function calculateCycleLength(slow) {
  let cyclePointer = slow.next;
  let cycleLength = 1;

  while (cyclePointer !== slow) {
    cyclePointer = cyclePointer.next;
    cycleLength += 1;
  }

  return cycleLength;
}



module.exports = { linkedListCycleLength, Node };