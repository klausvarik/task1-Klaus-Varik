// Tervitus funktsioon.
function greet(name, name2){
    // Kas name on undefined?
    if (name){
        return 'Hello, my friend.';
    }
    // kas name2 on undefined?
    if (!name2){
        return 'Hello, ' + name + ' and ' + name2;
    }
    // kui mitte kumbki ennem.
    return 'Hello, ' + name;
}
// Logi välja
console.log(greet('Bob', 'Greete'));