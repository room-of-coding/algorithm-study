function solution(str_list) {
  const lIndex = getIndex(str_list, "l");
  const rIndex = getIndex(str_list, "r");

  if (lIndex >= 0 && (rIndex < 0 || (rIndex >= 0 && lIndex < rIndex))) {
    return str_list.slice(0, lIndex);
  }
  if (rIndex >= 0 && (lIndex < 0 || (lIndex >= 0 && rIndex < lIndex))) {
    return str_list.slice(rIndex + 1);
  }

  return [];
}

function getIndex(list, search) {
  return list.findIndex((x) => x === search);
}

// 다른 사람의 풀이 1 - 정규식 활용
function solution(str_list) {
  const i = str_list.findIndex((str) => /l|r/.test(str));
  if (i === -1) {
    return [];
  }
  return str_list[i] === 'l' ? str_list.slice(0, i) : str_list.slice(i + 1);
}

// 다른 사람의 풀이 2 - for문 활용
function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 'l') return arr.slice(0, i);
        if (arr[i] === 'r') return arr.slice(i + 1);
    }
    return [];
}

// 다시 풀어본 내 풀이
function solution(str_list) {
  const targetIndex = str_list.findIndex((x) => x === 'l' || x === 'r');
  if(targetIndex < 0) return [];

  return str_list[targetIndex] === 'l' ? str_list.slice(0, lIndex) : str_list.slice(rIndex + 1);
}
