let numero1 = "";
let numero2 = "";
let operacionActual = "";
let resultado = "";
let finalizado = false;
let resultadoGuardado ="";
function enviarValor(numero)
{
    if (finalizado)
    {
        numero1 = "";
        numero2 = "";
        operacionActual = "";
        resultado = "";
        finalizado = false;
    }
    resultadoInput = document.getElementById("resultado");
    if(operacionActual.length == 0)
    {
        numero1 = numero1 + numero;
        resultadoInput.value = numero1;
        
    }
    else
    {
        numero2 = numero2 + numero;
        resultadoInput.value = numero1 + "" + operacionActual + "" + numero2;
    }
}



function AC() 
{
    let numero1 = "";
    let numero2 =  "";
    let operacionActual =  "";
    let resultado = "";
    resultadoInput.value = "";
}

function GuardarResultado() 
{
  resultadoGuardado = resultado;
}

function enviarOperacion(operacion)
{
    operacionActual = operacion;
    resultadoInput.value = numero1 + "" + operacionActual;
}
function terminarCuenta()
{
    calcular(numero1, numero2, operacionActual)
}
function calcular(num1, num2, operacion)
{
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (operacion)
    {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 != 0) 
                resultado = num1 / num2;
            else 
                resultado = "Error";
            break;
    }
    resultadoInput.value = resultado;
    finalizado = true;
}