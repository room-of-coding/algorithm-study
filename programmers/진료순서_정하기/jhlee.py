def solution(emergency):
    sorted_dict = {value: idx + 1 for idx, value in enumerate(sorted(emergency, reverse=True))}
    return [sorted_dict[value] for value in emergency]