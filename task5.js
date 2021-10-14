//kas sisend on tühi
function checkString(p1){
    if(!p1){
        return true;
    }
    return false;
}
//Suuretähe funktsioon
function capitalletter(p1){
    return p1.charAt(0).toUpperCase() + p1.slice(1);
}
console.log(checkString(''));
console.log(checkString('tere'));
console.log(checkString('minu nimi on John'));
console.log(capitalletter(''));
console.log(capitalletter('tere'));
console.log(capitalletter('minu nimi on John'));