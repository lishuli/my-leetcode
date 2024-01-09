/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = null,
    tail = null;
  let sum = 0;
  while (l1 || l2) {
    sum += (l1?.val || 0) + (l2?.val || 0);
    if (!head) {
      head = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    sum = Math.floor(sum / 10);
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  if (sum > 0) {
    tail.next = new ListNode(sum);
  }
  return head;
};
