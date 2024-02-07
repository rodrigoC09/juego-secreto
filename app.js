
let titulo = document.querySelector("h1");
titulo.innerHTML ="Juego del numero secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML="indica un numero del 1 al 10";

let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMax =10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    //let numeroDeUsuario = document.querySelector('input');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(intentos <= 3){
        if(numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p', 'Acertaste ');
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            ///el usuario no acertó
            if(numeroDeUsuario > numeroSecreto ){
                asignarTextoElemento('p', `El numero secreto es menor, intento ${intentos} ${intentos === 1 ? 'vez' : 'veces'} `);
                
            }else{
                asignarTextoElemento('p', `El numero secreto es mayor, intento ${intentos}`);
            }
            intentos++;
            limpiarCaja();
        }
    }else{
        asignarTextoElemento('p', 'Superaste el numero de intentos que es 3');
    }
    
    return;
}
function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        if(listaNumerosSorteados.length ==numeroMax){
            asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
        }else{
            return generarNumeroSecreto();
        }
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

}
function limpiarCaja(){
    //para seleccionar un elemento por ID desde un querySelector debemos agregar el #
    document.querySelector('#valorUsuario').value ='';

}
function nuevoJuego(){
    
    
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    condicionesIniciales();
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMax}`);
    limpiarCaja();
    intentos =1;
    numeroSecreto = generarNumeroSecreto();
}

condicionesIniciales();
/*
///1 IMC
let mensaje1= document.querySelector('p');


let mensaje2= document.querySelector('p');

let altura= 0;
let peso =0;

function IMC(altura, peso){
    //mensaje1.innerHTML="Ingresa tu altura en metros";
    //altura = parseInt(document.getElementById('valorUsuario').value);
    //mensaje2.innerHTML = "Ingresa tu peso en kilogramos";
    let resultado=peso/altura;
    console.log(resultado);
    return;
}
function texto(elemento, texto) {
    
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.mensaje1 = texto
}
IMC(1.70, 64);
//2 factorial

function factorial(n){
    if (n=== 0 || n === 1) {
        return 1;
    }
    for (let index = n - 1; index >= 1; index--) {
        n *= index;
        
    }
    console.log(n);
    return n;
    
    
}
factorial(5);

//3
function verificarIntento() {
    let monto = parseInt(document.getElementById('valorUsuario').value);
    
    //dolares a reales
    let reales = monto*4.80;
    console.log(reales);
}
//4 area y perimetro rectangular

function Area(base, altura){
    let  resultadoA=base*altura;
    console.log(resultadoA);
    return ;
}
function Perimetro(base, altura){
    let resultadoP = base*2 + altura*2;
    console.log(resultadoP);
    return;
}
Area(20, 3);

Perimetro(20, 3);
//5 area y perimetro circular
let Pi =3.14
let radio = 0
function areaCircular(radio){
    let resultadoAC = Pi*(radio**2);
    console.log(resultadoAC);
    return;
}
function perimetroCircular(radio){
    return resultadoPC= 2*Pi*radio;
}
areaCircular(64);
console.log(perimetroCircular(64));

//6 crear tabla de multiplicar de un numero dado

function tablaMult(nn){
    for (let i = 1; i <= 10; i++) {
        console.log(`La tablas del ${nn} es ${nn} * ${i} = ${i*nn}`);
    }
    return;
}
tablaMult(6);
*/
///desafios 2.1
let listaGenerica = [];
//2.2
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
//2.3
console.log(lenguajesDeProgramacion);
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguajesDeProgramacion);
//2.4
function verLista(){
    for (let index = 0; index < lenguajesDeProgramacion.length; index++) {
        console.log(`El elemnto en la pocicion ${index} es ${lenguajesDeProgramacion[index]}`);
        
    }
}
verLista();
//2.5
 function listaInvertida(){
    for (let indexI = lenguajesDeProgramacion.length-1; indexI >= 0; indexI--) {
        console.log(`El orden invertido de los elementos en la pocicion ${indexI} es ${lenguajesDeProgramacion[indexI]}`);
        
    }
 }
listaInvertida();
//2.6
let notaFinal = 0;
function promedio(){
    let notas =[60, 53, 46, 68, 20];
    for (let i = 0; i < notas.length; i++) {
        notaFinal+=notas[i];
    }
    console.log(`tu promedio es ${notaFinal/notas.length}`);
}
promedio();
//2.7

let num =[60, 53, 46, 68, 20]; 

function masGrande(){
    console.log(`El numero mas grande de la lista es ${Math.max(...num)}`);
}
function masPequeño(){
    console.log(`El numero mas pequeño de la lista es ${Math.min(...num)}`);
}
masGrande();
masPequeño();
//2.8
let ss=0;
function suma(){
    //console.log(`la suma de los elemntos es ${num.sum()}`);
    //let s= num.reduce((anterior, actual) => anterior + actual, 0);
    
    for (let h = 0; h < num.length; h++) {
        
        ss+=num[h];
    }
    console.log(`la suma es ${ss}`);
}
suma();
//2.9
function buscar(n1){
    for (let a = 0; a < num.length; a++) {
        console.log(a, num.length);
        if(n1==num[a]){
            console.log(`El numero ${n1} existe en la lista en la pocicion ${a}`);
        }else if(num.length==a+1){
            console.log(`el numero ${n1} no existe en la lista`);
        }
        
    }
}
buscar(15);
///2.10
let l1 = [20, 35, 60];
let l2 = [48, 37, 98];
let l3=[];
let lSu=0;

function sumaListas(ll1, ll2){
    for (let k = 0; k < l1.length; k++) {
        l3[k]= l1[k]+l2[k];
    }
    console.log(l3);
}
sumaListas(l1, l2);
///2.11
let lCuadrado =[];

function cuadrado(lC){
    for (let e = 0; e < lC.length; e++) {
        lCuadrado[e]=l1[e]**2;
        
    }
    console.log(lCuadrado);
}
cuadrado(l1);