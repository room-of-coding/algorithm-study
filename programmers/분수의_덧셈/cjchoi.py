def solution(numer1, denom1, numer2, denom2):
    answer = []
    def _get_gcd(num1, num2):
        if num2 == 0:
            return num1
        return _get_gcd(num2, num1 % num2)
                
    
    r_num = numer1 * denom2 + numer2 * denom1
    r_denom = denom1 * denom2
    
    gcd = _get_gcd(r_num, r_denom)
    answer = [r_num / gcd, r_denom / gcd]
    
    return answer
