/*
10) Modificar el algoritmo anterior, de forma que si se teclea un cero, 
se vuelva a pedir el número por teclado (así hasta que se teclee un número mayor que cero) 
(recuerda la estructura mientras). 
*/
        let numero=0;
      
        alert("Algoritmo 10-- ingreswe un numero si es cero  se vuelva a pedir el número por teclado");
      
       numero = parseInt(prompt("ingrese el  numero"));  

    while (numero =0) {
       
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
    numero = parseInt(prompt("Introduzca un número entero diferente de cero: "));
   }
     
    }
          
    

        
                 
        
            
        

       