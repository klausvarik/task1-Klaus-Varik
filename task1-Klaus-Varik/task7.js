function getRandom(min, max){
    return Math.random(0) * (max - min) + min;
}
function suvaline(){
    return Math.round(getRandom(1, 100))
}
function suurim(n){
    return Math.max.apply(null, n)
}
function lower(n){
    return Math.min.apply(null, n)
}
function even(n){
    return n.filter(number => number % 2 == 0);
}
const j = [ 55, 90, 89, 52, 36]
console.log(suvaline())
console.log(suurim(j))
console.log(lower(j))
console.log(even(j))


