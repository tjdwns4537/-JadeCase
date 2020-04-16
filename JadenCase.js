function solution(s){
    return s.split(' ').map(v=>{
        return v.split('').map((a,i)=>{
            if(!!i){
                return a.toLowerCase()
            }else if(!i){
                return a.toUpperCase()
            }
        }).join('')
    }).join(' ')
}
console.log(solution('i am go'))