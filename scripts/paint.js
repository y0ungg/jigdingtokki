class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const removeSelectedPoint = (head, val) => {
  while (head && head.val === val) {
    head = head.next;
  }
  let cur = head;
  while (cur && cur.next !== null) {
    if (cur.next === val) {
      cur.next = cur.next.next;
    }
    cur = cur.next;
  }
  return head;
};

const removeLastPoint = (head) => {
  if (!head) return head;
  let cur = head;
  while (cur) {
    if (cur.next.next == null) {
      cur.next = null;
      return cur.val;
    } else {
      cur = cur.next;
    }
  }
};

let pointHead = new ListNode();
const paintPoint = Array(30)
  .fill(null)
  .map(() => Array(30).fill(null));
let headCursor = pointHead;

const doPaint = (event) => {
  const x = Math.floor(event.offsetX / 15) * 15;
  const y = Math.floor(event.offsetY / 15) * 15;
  if (context && isEraserMode) {
    context.clearRect(x, y, 15, 15);
    paintPoint[Number(x / 15)][Number(y / 15)] = null;
    pointHead = removeSelectedPoint(pointHead, [
      Number(x / 15),
      Number(y / 15),
    ]);
  } else if (context) {
    context.fillStyle = selectedColor;
    context.fillRect(x, y, 15, 15);
    paintPoint[Number(x / 15)][Number(y / 15)] = selectedColor;
    headCursor.val = [Number(x / 15), Number(y / 15)];
    headCursor.next = new ListNode();
    headCursor = headCursor.next;
  }
};

canvas.addEventListener("mousedown", doPaint);

undo.addEventListener("click", () => {
  const xy = removeLastPoint(pointHead);
  console.log(pointHead);
  if (!xy) return;
  context.clearRect(xy[0] * 15, xy[1] * 15, 15, 15);
  paintPoint[Number(xy[0])][Number(xy[1])] = null;
  pointHead = removeSelectedPoint(pointHead, xy);
});

remove.addEventListener("click", () => {
  context.clearRect(0, 0, 450, 450);
  paintPoint = Array(30)
    .fill(null)
    .map(() => Array(30).fill(null));
});
