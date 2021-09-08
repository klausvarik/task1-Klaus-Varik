function getRandom(min, max){
    return Math.random(0) * (max - min) + min;
}

function suvaline(){
    return Math.round(getRandom(1, 100))
}
function suurim(n){
    return Math.max.apply(null, n)
}
console.log(suvaline())


const j = [ 55, 90, 89, 52, 36]

console.log(suurim(j))

