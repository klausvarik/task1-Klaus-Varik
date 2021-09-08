//kas sisend on tühi
function checkString(p1){
    if(p1 === undefined){
        return true;
    }
    return false;
}
//Suuretähe funktsioon
function suurtaht(p1){
    return p1.charAt(0).toUpperCase() + p1.slice(1);
}
console.log(checkString(''));
console.log(checkString('tere'));
console.log(checkString('minu nimi on John'));
console.log(suurtaht(''));
console.log(suurtaht('tere'));
console.log(suurtaht('minu nimi on John'));