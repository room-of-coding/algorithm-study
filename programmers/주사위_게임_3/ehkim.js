function solution(a, b, c, d) {
  const array = [a, b, c, d];
  const obj = array.reduce((acc, cur) => ({ ...acc, [cur]: (acc[cur] ?? 0) + 1 }), {});
  const count = Math.max(...Object.values(obj));

  if (count === 4) {
    return 1111 * a;
  }
  if (count === 1) {
    return Math.min(...array);
  }

  const [p, q, r] = Object.entries(obj).sort((a, b) => b[1] - a[1]).map((x) => +x[0]);

  if (count === 3) {
    return (10 * p + q) ** 2;
  }
  if (r) {
    return q * r;
  }
  return (p + q) * Math.abs(p - q);
}
