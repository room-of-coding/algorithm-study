def solution(a, b, c, d):
    if a == b == c == d:
        return 1111 * a
    
    dice_list = [a, b, c, d]
    dice_set = set(dice_list)
    
    for number in dice_set:
        dice_list.remove(number)
        
    if len(dice_list) == 1:
        dice_set.remove(dice_list[0])
        return dice_set.pop() * dice_set.pop()

    if len(dice_list) == 2:
        if dice_list[0] == dice_list[1]:
            dice_set.remove(dice_list[0])
            return (10 * dice_list[0] + dice_set.pop()) ** 2
        return (dice_list[0] + dice_list[1]) * abs(dice_list[0] - dice_list[1])

    return min(a, b, c, d)
