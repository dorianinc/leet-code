class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const convertToLinkedList = (arr) => {
  const dummyHead = new ListNode();
  let current = dummyHead;

  for (let i = 0; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    current.next = node;
    current = current.next;
  }

  return dummyHead.next;
};

const logList = (list) => {
  const res = [];

  while (list) {
    res.push(list.val);
    list = list.next;
  }
  console.log(res);
};

export { ListNode, convertToLinkedList, logList };
