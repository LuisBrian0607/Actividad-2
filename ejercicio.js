/*teniendo una iteración anidada incrementa las varaibles i y j del 1 al 3.

si i y j son igual 2 quiero que se retorne un mensaje. y que 
luego del mensaje siga iterando
se tiene que utilizar el continue

[i: 1, j: 1]
[i: 1, j: 2] 
[i: 1, j: 3] 
[i: 2, j: 1]
 el mensaje consola 
 [i: 3, j: 1] 
 [i: 3, j: 2]
[i: 3, j: 3]
*/
//ejemplo: 

top: for (let i = 0; i < 4; i++) { 
    console.log('i es igual a:'+i);
    for (let j = 0; j < 4; j++) { 
        if( i === 2 && j === 2) {
            console.log('son iguales');
            continue;
         } 
        console.log( 'j es igual a :'+j)}
    }