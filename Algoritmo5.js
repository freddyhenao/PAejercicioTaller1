/*
5) Diseñar un algoritmo que pida por teclado tres números;
 si el primero es negativo, debe imprimir el producto de los 
tres y si no lo es, imprimirá la suma. 
*/
let A=0;
let B=0;
let C=0;
let PRODUCTO=0;
let SUMA=0;

alert("Algoritmo 5--Digite 3 numeros siel primero es negativo  debe imprimir el producto de los los tres y si no lo es imprimiera la suma ");

 A =parseInt(prompt("ingrese el primer numero"));    
 B =parseInt(prompt("ingrese el segundo numero"));
 C =parseInt(prompt("ingrese el tercer numero"));

if (A<0) {
     PRODUCTO = A*B*C;
         alert("EL PRODUCTO DE LOS 3 NUMEROS ES  : "+PRODUCTO);
} else {
        SUMA = A+B+C
         alert("LA SUMA DE LOS 3 NUMEROS ES  :  "+SUMA);   
}
      
 


