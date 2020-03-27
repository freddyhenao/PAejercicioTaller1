/*
4) Algoritmo que lea tres números distintos y nos diga cual de ellos 
es el mayor (recuerda usar la estructura condicional Si y los operadores lógicos). 
*/
let A=0;
let B=0;
let C=0;

alert("Algoritmo 4-- De Tres números  nos entrega  cual de ellos es mayor");

 A =parseInt(prompt("ingrese el primer numero"));    
 B =parseInt(prompt("ingrese el segundo numero"));
 C =parseInt(prompt("ingrese el tercer numero"));
if(A>B)
    if(A>C)
         alert("el numero mayor es : "+A);
    else
         alert("el numero mayor es : "+C);   
if(B>C)
         alert("el numero mayor es : "+B);
    else 
         alert("el numero mayor es : "+C);


