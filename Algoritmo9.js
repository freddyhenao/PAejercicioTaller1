/*
9) Realizar un algoritmo que dado un número entero, visualice en 
pantalla si es par o impar. En el caso de ser 0, debe visualizar
 “el número no es par ni impar” 
 (para que un numero sea par, se debe dividir entre dos y que su resto sea 0) 
 */

        let numero;
      

      
        numero = parseInt(prompt("Introduzca un número entero: ")); 
        if (numero !=0 ) {
                 if ( numero % 2 == 0 )
                 {
           
            alert("ES PAR" );
                 }
                else
                {
          
            alert("ES IMPAR" );
                }
        } else {
            alert("El numero no es par ni impar");
            
        }

       
