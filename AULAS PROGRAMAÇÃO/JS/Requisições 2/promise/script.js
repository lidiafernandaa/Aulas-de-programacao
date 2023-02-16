 function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log('Pegando temperatura...');

        setTimeout(function(){
            resolve('40 na sombra');
        }, 2000); 
    }); 
 }