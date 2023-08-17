function solution(age) {
    const offset = 'a'.charCodeAt();
    return [...age.toString()].reduce((acc, cur) => (acc + String.fromCharCode(offset + Number(cur))) , "");
}

// 다른 사람 풀이
function solution2(age) {
  let char = 'abcdefghij'
  return Array.from(age.toString()).map(t => char[+t]).join('');
}
