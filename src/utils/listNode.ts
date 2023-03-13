export class ListNode<T> {
  val: T | null
  next: ListNode<T> | null;
  constructor(val: T, next: ListNode<T> | null) {
    this.val = val;
    this.next = next === null ? null : next;
  }
}

export const removeSelectedPoint = (head: ListNode<number[]> | null, val: number[]) => {
  while (head && head.val === val) {
    head = head.next;
  }
  let cur = head;
  while (cur && cur.next !== null) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    }
    cur = cur.next;
  }
  return head;
};

export const removeLastPoint = (head: ListNode<number[]>) => {
  if (!head) return head;
  let cur = head;
  while (cur) {
    if (cur.next?.next == null) {
      cur.next = null;
      return cur.val;
    } else {
      cur = cur.next;
    }
  }
};