function solution(n) {
    return Array.from(Array(n), (_,i) => i + 1).filter(x => n % x === 0).length;
}
