function solution(l, r) {
    const ranges = Array(r - l + 1).fill().map((x, i) => l + i);
    const filtered = ranges.filter(x=> /^[5]+[0,5]*$/g.test(x));
    return filtered.length > 0 ? filtered : [-1];
}
