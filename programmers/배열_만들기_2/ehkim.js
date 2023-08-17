function solution(l, r) {
    // l 이상 ~ r 이하의 정수를 담은 array
    const ranges = Array(r - l + 1).fill().map((x, i) => l + i );
    // 0, 5로 이루어지지 않은 숫자 제거 
    const filtered = ranges.filter(x=> /^[0,5]*$/g.test(x));
    // 0, 5로 이루어진 숫자가 없다면 [-1] 반환, 있다면 필터링한 배열 반환
    return filtered.length > 0 ? filtered : [-1];
}
