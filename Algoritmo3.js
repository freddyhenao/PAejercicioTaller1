/* 
3) Algoritmo que lea dos números y nos diga cual de ellos es mayor 
o bien si son iguales (recuerda usar la estructura condicional SI)  */
let A=0;
let B=0;

alert("Algoritmo 3-- De dos números y nos entrega  cual de ellos es mayor");

 A =parseInt(prompt("ingrese el primer numero")); 
 B =parseInt(prompt("ingrese el segundo numero"));
if(A===B)
    alert("son iguales");
if(A>B)
    alert("el numero mayor es : "+A);
if(B>A)
    alert("el numero mayor es : "+B);
