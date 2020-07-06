const { linkedListCycleLength, Node } = require('./linkedListCycleLength');

describe(`${linkedListCycleLength.name} passes example tests`, () => {
  test('returns length of cycle in a Linked List', () => {
    let head = new Node(1);

    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    head.next.next.next.next = new Node(5);
    head.next.next.next.next.next = new Node(6);

    head.next.next.next.next.next.next = head.next.next;

    const cycleLength = linkedListCycleLength(head);

    expect(cycleLength).toEqual(4);
  });
});