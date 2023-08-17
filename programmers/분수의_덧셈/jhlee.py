from fractions import Fraction

def solution(numer1, denom1, numer2, denom2):
    """
    python 분수 Fraction 클래스를 사용
    """
    result = Fraction(numer1, denom1) + Fraction(numer2, denom2)
    return [result.numerator, result.denominator]

def solution_2(numer1, denom1, numer2, denom2):
    """
    유클리드 호제법 재귀를 사용
    """
    numer = numer1 * denom2 + numer2 * denom1
    denom = denom1 * denom2
    gcd = getGcd(denom, numer)
    return [numer / gcd, denom / gcd]

def getGcd(a, b):
    return getGcd(b, a % b) if a % b != 0 else b
