// @ts-ignore
export function* filter(f, iter) {
  for (const elem of iter) {
    if (f(elem)) yield elem;
  }
}

// @ts-ignore
export function takeLast(iter) {
  if (iter.length > 0) return iter[iter.length - 1];
  return null;
}
