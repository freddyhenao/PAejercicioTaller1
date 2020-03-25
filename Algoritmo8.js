/*
8) Una tienda ofrece un descuento del 15% sobre el total de la compra 
durante el mes de octubre. Dado un mes y un importe, calcular cuál 
es la cantidad que se debe cobrar al cliente. 
 */

let TCompra=0;
let PDescuento= 0;
let TotalP=0;


 TCompra =parseInt(prompt("ingrese el  total de la compra")); 
 

        PDescuento=TCompra*0.15;
        TotalP=TCompra-PDescuento;

 
         alert( "TOTAL COMPRA  :"+TCompra+"   15% DESCUNTO : "+PDescuento+"  TOTAL A PAGAR  : "+TotalP);