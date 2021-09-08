//Hello! kordaja
function korda(n){
    if(n === undefined || n >= 10){
        console.log( 'Hi!');
        
    } 
    else if (n != undefined){
        for(let i = 0; i < n; i++){
            console.log( 'Hello!');
        } 
          
    }

}

console.log(korda(5));