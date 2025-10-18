function operaciones(){
    var a = Number(prompt(" numero 1 "));
    var b = Number(prompt(" numero 2 "));
    var suma = a+b;
    console.log("La suma es: ",suma);
    var resta = a-b;
    console.log("La Resta es: ",resta);
    var Divicion = a/b;
    console.log("La Divicion es: ",Divicion);
    var multiplicacion = a*b;
    console.log("La Multiplicacion es: ",multiplicacion);

}
var nombre = " "
var Edad = 0
function op1(){
    nombre = document.getElementById("nombre").value;
    Edad = document.getElementById("Edad").value;
    console.log("nombre: "+ nombre )
    console.log("Edad: "+ Edad )
    if(Edad > 18){
        console.log("Eres mayor de edad por "+ (Edad - 18)+"años")
    }
    else if(Edad = 18){
        console.log("Felicidades por cumplir los 18 años")
    }
    else{
        console.log("Eres menor de edad por "+ (18 -Edad)+"años")
    }
    let caracter = nombre.length
    console.log("La cantidad de caracteres es"+ caracter)
}
function op2(){
    num = document.getElementById("number").value;
    tabla = document.getElementById("tabla").value;
    for(i=0; i <= tabla; i++){
        console.log(num +"*"+i+":"+num * i)
    }
}
var matrix =[]
function opc3(){
    nX = document.getElementById("NX").value;
    ny = document.getElementById("NY").value;
    for(i=0;i <= nX.length;i++){
        matrix[i]=[];
        for(j=0;j <= ny.length;j++){
            matrix[i][j]=0;
        }
    }
    console.log(matrix)    
}

var Diamante = [];
var n = 0;
function op4() {
    var niveles = [
        ["1s"],
        ["2s", "2p"],
        ["3s", "3p", "3d"],
        ["4s", "4p", "4d", "4f"],
        ["5s", "5p", "5d", "5f"],
        ["6s", "6p", "6d"],
        ["7s", "7p"],
        ["8s"]
    ];

    var orden = [];

    for (var suma = 0; suma < niveles.length * 2; suma++) {
        for (var i = 0; i < niveles.length; i++) {
            var j = suma - i;
            if (j >= 0 && j < niveles[i].length) {
                orden.push(niveles[i][j]);
            }
        }
    }

    Diamante = orden;
    n = orden.length;

    console.log("DIAGRAMA DE MOELLER");
    for (var k = 0; k < Diamante.length; k++) {
        console.log((k + 1) + ". " + Diamante[k]);
    }
}
op4();