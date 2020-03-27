/*
1) Dadas dos variables numéricas A y B, que el usuario debe teclear, se pide realizar un
algoritmo que intercambie los valores de ambas variables y muestre cuanto valen al final
 las dos variables (recuerda la asignación). 
 */



 
let A=0;
let B=0;
let N=0;

var z=0;

alert("Algoritmo 1 -- Ingrese 2 numeros que se cambiaran de posicion");

A=parseInt(prompt("Ingrese A"));
B=parseInt(prompt("Ingrese B"));

N = A;
A = B;
B = N;

alert("DATOS INGRESADOS A = " + B + "B =" + A + "RESUTADO FINAL  A = " + A + "B =" + B );
