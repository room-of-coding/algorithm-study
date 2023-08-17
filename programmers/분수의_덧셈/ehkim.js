function solution(numer1, denom1, numer2, denom2) {
    const numer = (numer1 * denom2) + (numer2 * denom1);
    const denom = denom1 * denom2;
    const gcd = getGcd(numer, denom);
    return [numer/gcd, denom/gcd];
}

function getGcd(num1, num2){
  return num2 === 0 ? num1: getGcd(num2, num1% num2);
}
