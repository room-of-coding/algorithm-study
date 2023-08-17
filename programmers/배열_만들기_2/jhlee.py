# 내 풀이
def solution(l, r):
    binary_integers = []

    for i in range(len(str(l)), len(str(r)) + 1):
        for j in range(2 ** i):
            binary_str = format(j, f'0{i}b')
            
            if binary_str[0] != '0':
                binary_int = int(binary_str.replace("1", "5"))
                binary_integers.append(binary_int)

    filtered_integers = [binary for binary in binary_integers if l <= binary <= r]
    
    return filtered_integers if filtered_integers else [-1]

# 다른 사람 풀이
def solution_2(l, r):
    """
    set 차집합
    """
    answer = []
    for num in range(l, r + 1):
        if not set(str(num)) - set(['0', '5']):
            answer.append(num)
    return answer if answer else [-1]
