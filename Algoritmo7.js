/*
7) Un colegio desea saber qué porcentaje de niños y qué porcentaje 
de niñas hay en el curso actual. Diseñar un algoritmo para este propósito 
(recuerda que para calcular el porcentaje puedes hacer una regla de 3). 
 */

let Niños=0;
let Niñas=0;
let PNiños=0;
let PNiñas=0;
let TNiños=0;





 Niños =parseInt(prompt("ingrese el  Numero de Niños")); 
 Niñas =parseInt(prompt("ingrese el  Numero de Niñas"));  

        TNiños=Niños+Niñas;
        PNiños=(Niños/TNiños)*100;
        PNiñas=(Niñas/TNiños)*100;
 
         alert( "TOTAL NIÑOS :"+TNiños+"   % NIÑOS : "+PNiños+"   % NIÑAS : "+PNiñas);

      
 