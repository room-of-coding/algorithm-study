function solution(hp) {
    return [5, 3, 1].reduce((acc, cur) => {
        acc += Math.trunc(hp / cur); 
        hp = hp % cur; 
        return acc;
    } , 0);
}
