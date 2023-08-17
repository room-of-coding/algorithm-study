from collections import Counter

# 내 풀이
def solution(array):
    if len(array) == 1: # early return 
        return array[0]

    element_count = {}

    for element in array:
        element_count[element] = element_count.get(element, 0) + 1 # dict에 해당 값을 key로 해서 +1씩 해준다.

    sorted_elements = sorted(element_count.items(), key=lambda item: item[1], reverse=True) # value를 기준으로 내림차순 정렬

    if len(sorted_elements) > 1 and sorted_elements[0][1] == sorted_elements[1][1]: # 가장 첫번째 value와 두번째 value가 같으면 -1 return 
        return -1

    return sorted_elements[0][0] # 첫번째 요소 value return

# 다른 사람 풀이
def solution_2(array):
    while len(array) != 0:
        for i, a in enumerate(set(array)):
            array.remove(a)
        if i == 0: return a
    return -1

def solution_3(array):
    a = Counter(array).most_common(2)
    if len(a) == 1:
        return a[0][0]
    if a[0][1] == a[1][1]:
        return -1
    return a[0][0]


def solution_4(array):
    answer = 0
    idx = [0] * 1001
    for i in array:
        idx[i] +=1
    if idx.count(max(idx)) >1:
        return -1
    return idx.index(max(idx))