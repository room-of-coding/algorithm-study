from collections import Counter
def solution(a, b, c, d):
    count = Counter([a,b,c,d])
    values = list(count.values())
    keys = list(count.keys())
    
    if 4 in values:
        return 1111 * keys[0]
    elif 3 in values:
        for k, v in count.items():
            if v == 1:
                q = k
            elif v == 3:
                p = k
        return (10 * p + q) ** 2
    elif 2 in values and len(keys) == 2:
        p = keys[0]
        q = keys[1]
        return (p + q) * abs(p - q)
    elif 2 in values and len(keys) == 3:
        result = []
        for k, v in count.items():
            if v != 2:
                result.append(k)
        return result[0] * result[1]
    else:
        return min(keys)
