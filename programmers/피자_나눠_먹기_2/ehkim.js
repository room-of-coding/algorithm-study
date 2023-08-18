function solution(n) {
    return getLCM(n * 6, getGCD(n, 6)) / 6;
}

const getGCD = (n1, n2) => n1 % n2 === 0 ? n2 : getGCD(n2, n1%n2);
const getLCM = (multiply, gcd) => multiply / gcd;
