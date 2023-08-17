// 너무 알아보기 어렵게 풀어서 현타가 왔다.. 
function solution(emergency) {
  const obj = emergency.reduce((acc, cur, index) => ({ ...acc, [cur]: index }), {});
  return Object.entries(obj)
    .sort(([key1], [key2]) => +key2 - +key1)
    .map((x, i) => [...x, i + 1])
    .sort((a, b) => a[1] - b[1])
    .map((x) => x[2]);
}

// indexOf 함수가 있다는 것을 알았다.. 다른 사람들 코드 한번 보고 다시 푼 결과! 
function solution2(emergency){
    const orderby = [...emergency].sort((a, b) => b - a);
    return emergency.map(x => orderby.indexOf(x) + 1);
}


// 또 다른 사람 풀이
function solution3(emergency) {
    let sort = [...emergency].sort((a, b) => b - a);
    return emergency.map(k => {
        const queue = sort.findIndex(v => v === k);

        return queue + 1
    });
}
