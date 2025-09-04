let numeroActual = "";
let numeroAnterior = "";

function mostrar(valor)
{
    document.getElementById("resultado")
}

function enviarValores(valor)
{
    if (valor === "=")
    {
        calcular();
    }
    numeroActual += valor
    mostrar(numeroActual);
}
function enviarOperacion(operador)
{
    
}
function calcular () {}