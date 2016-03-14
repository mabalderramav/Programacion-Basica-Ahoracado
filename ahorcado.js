//elegir palabra de manera aleatorio
var palabras = ["Amoxicilina", "Cirugia", "Pistola", "Sistemas", "Telecomunicaíon", "redes"];
var palabra = palabras[aleatorio(0,palabras.length - 1)];
var hombre;
var l, espacio;
function aleatorio(minimo,maximo)
{
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}
var Ahoracado = function(con)
{
    this.contexto = con;
    this.maximo = 5;
    this.intentos = 0;
    this.vivo = true;

    this.dibujar();
}
Ahoracado.prototype.dibujar = function()
{
    var dibujo = this.contexto;
    console.log(dibujo);
    dibujo.beginPath();
    dibujo.moveTo(150,100);
    dibujo.lineTo(150,50);
    dibujo.lineTo(400,50);
    dibujo.lineTo(400,350);
    dibujo.lineWidth = 15;
    dibujo.strokeStyle = "#000";
    dibujo.stroke();
    dibujo.closePath();

    if(this.intentos > 0)
    {
        //intentos = 1 --> rostro
        dibujo.beginPath();
        dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
        dibujo.strokeStyle = "#f00";
        dibujo.lineWidth = 5;
        dibujo.stroke();
        dibujo.closePath();
        if(this.intentos > 1)
        {
            dibujo.beginPath();
            dibujo.moveTo(150, 180);
            dibujo.lineTo(150, 250);
            dibujo.strokeStyle = "#f00";
            dibujo.lineWidth = 5;
            dibujo.stroke();
            dibujo.closePath();
            if(this.intentos > 2)
            {
                dibujo.beginPath();
                dibujo.moveTo(120, 220);
                dibujo.lineTo(150, 180);
                dibujo.lineTo(180, 220);
                dibujo.strokeStyle = "#f00";
                dibujo.lineWidth = 5;
                dibujo.stroke();
                dibujo.closePath();
                if(this.intentos > 3)
                {
                    dibujo.beginPath();
                    dibujo.moveTo(120, 290);
                    dibujo.lineTo(150, 250);
                    dibujo.lineTo(180, 290);
                    dibujo.strokeStyle = "#f00";
                    dibujo.lineWidth = 5;
                    dibujo.stroke();
                    dibujo.closePath();
                    if(this.intentos > 4)
                    {
                        dibujo.beginPath();
                        dibujo.moveTo(125, 120);
                        dibujo.lineTo(145, 145);
                        dibujo.moveTo(145, 120);
                        dibujo.lineTo(125, 145);

                        dibujo.moveTo(155, 120);
                        dibujo.lineTo(175, 145);
                        dibujo.moveTo(175, 120);
                        dibujo.lineTo(155, 145);

                        dibujo.strokeStyle = "blue";
                        dibujo.lineWidth = 5;
                        dibujo.stroke();
                        dibujo.closePath();
                    }
                }
            }
        }
    }
}
Ahoracado.prototype.trazar = function()
{
    this.intentos++;
    if(this.intentos >= this.maximo)
    {
        this.vivo = false;
        alert("Estas muerto");
    }
    this.dibujar();
}
function inicio()
{
    l = document.getElementById("letra");
    var b = document.getElementById("boton");
    var canvas = document.getElementById("c");
    canvas.width = 500;
    canvas.height = 400;
    var contexto = canvas.getContext("2d");
    hombre = new Ahoracado(contexto);

    b.addEventListener("click", agregarLetra);
    palabra = palabra.toUpperCase();
    espacio = new Array(palabra.length);
    mostrarPista(palabra);
}
function agregarLetra()
{
    var letra = l.value;
    mostrarPalabra(palabra, hombre, letra);
}
function mostrarPalabra(palabra, ahoracado, letra)
{
    var encontrado = false;
    letra = letra.toUpperCase();
    for(var p in palabra)
    {
        if(letra == palabra[p])
        {
            espacio[p] = letra;
            encontrado = true;
        }
    }
    mostrarPista(espacio);

    if(!encontrado)
    {
        ahoracado.trazar();
    }
    if(!ahoracado.vivo)
    {
        //Mostrar la palabra entera al morir
        var pista = document.getElementById("pista");
        var texto = "";
        for(p in palabra)
        {
            texto = texto + palabra[p] + " ";   
        }
        pista.innerText = texto;
    }
}
function mostrarPista(palabra)
{
    var pista = document.getElementById("pista");
    var texto = "";
    for(var i = 0; i<espacio.length; i++)
    {
        if(espacio[i] != undefined)
        {
            texto = texto + espacio[i] + " ";
        }
        else
        {
            texto += "_ ";
        }
    }
    pista.innerText = texto;
}