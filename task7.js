function getRandom(min, max){
    return Math.random(0) * (max - min) + min;
}
function randomNum(){
    return Math.round(getRandom(1, 100))
}
function maximum(n){
    return Math.max.apply(null, n)
}
function lower(n){
    return Math.min.apply(null, n)
}
const p=[]
function even(n1){
    
    for(let i = 0; i < 5; i++)
    {
     if (n1[i] % 2 == 0){
        p.push("true")
     }   
     else{
         p.push("false")
     }
    }
    var s = 0
    for(let i=0;i<5;i++){
        if(p[i] == "true"){s++}
    }
    return s
}

const j = []
for(let i = 0; i < 5; i++){
    j.push(randomNum())
}
console.log(j)
console.log(maximum(j))
console.log(lower(j))
console.log(even(j))




