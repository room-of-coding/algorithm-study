function solution(array) {
    const resultArray = Array(1000).fill(0);
    array.forEach((a,i) => resultArray[a] = (resultArray[a] ?? 0) + 1 );
    const maxFrequency = Math.max(...resultArray);
    return resultArray.filter(x => x === maxFrequency)?.length > 1 ? -1 : resultArray.findIndex(x => x === maxFrequency);
}

function solution2(array){
    const countObj = array.reduce((acc, cur, i)=> ({...acc, [cur]: (acc[cur] ?? 0) + 1 }),{});
    const maxFrequency = Math.max(...Object.values(countObj));
    const filtered = Object.entries(countObj).filter(([key,value]) => value === maxFrequency);
    return filtered.length > 1 ? -1 : +filtered[0][0];
}

// 다른 사람 풀이
function solution3(array) {
    let m = new Map();
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    m = [...m].sort((a,b)=>b[1]-a[1]);
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
