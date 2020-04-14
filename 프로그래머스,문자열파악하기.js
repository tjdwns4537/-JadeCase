function solution(s){
    var answer = true;
    var A = s.split("").filter(n=>['p','P'].includes(n))
    var B = s.split("").filter(n=>['y','Y'].includes(n))
    console.log(A,B)
    if(A.length===B.length){
        answer=true;
    }else{
        answer=false;
    }
    return answer;
}
console.log(solution('pPyY'))