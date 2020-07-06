const { linkedListCycle, Node } = require('./linkedListCycle');

let head;
beforeAll(() => {
  head = new Node(1);

  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);

  return head;
});

describe(`${linkedListCycle.name} passes example tests`, () => {
  test('returns false when a Linked List has no cycle', () => {
    const hasCycle = linkedListCycle(head);

    expect(hasCycle).toEqual(false);
  });

  test('returns true when a Linked List has a cycle', () => {
    head.next.next.next.next.next.next = head.next.next;
    const hasCycle = linkedListCycle(head);

    expect(hasCycle).toEqual(true);
  });
});