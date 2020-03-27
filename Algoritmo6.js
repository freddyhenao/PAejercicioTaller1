
/*
6)  Realizar un algoritmo que lea un número por teclado. En caso de 
que ese número sea 0 o menor que 0, se saldrá del programa imprimiendo 
antes un mensaje de error. Si es mayor que 0, se deberá calcular su 
cuadrado y la raiz cuadrada del mismo, visualizando el numero que ha 
tecleado el usuario y su resultado (“Del numero X, su potencia es X y su raiz X” ).
 Para calcular la raiz cuadrada se puede usar la función interna RAIZ(X)  
 o con una potencia de 0,5. 

*/
let A=0;
let P=0;
let R=0;

alert("Algoritmo 6-- Ingrese un numero 0 o menor que 0  se saldrá del programa imprimiendo error y si no calcule cuadrado");

 A =parseInt(prompt("ingrese el  numero"));    
 
if (A>0) {
     P = A*A;
     R= Math.sqrt(A);
         alert( "DEL NUMERO  :"+A+"   EL PRODUCTO : "+P+"   LA RAIZ : "+R);
        } 
else {

     alert("ERROR  ");   
     
    }
      
 