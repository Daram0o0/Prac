function solution(n, k) {
    var answer = [];
    for(let i = k; i<=n; i+=k){
        i%k===0 && answer.push(i)
    }
    return answer;
}