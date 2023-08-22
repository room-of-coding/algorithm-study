const getFactorial = (cur) => cur > 1 ? BigInt(cur) * getFactorial(cur - 1) : BigInt(1);

function solution(balls, share) {
  return getFactorial(balls) / getFactorial(balls - share) / getFactorial(share);
}
