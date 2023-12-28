function poner(num)
{
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado.length < 10) {
    document.getElementById('resultado').innerHTML = resultado + num;
    }
}
function limpiar() {
    document.getElementById('resultado').innerHTML = "";
}
function quitar()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}

document.addEventListener('keydown', function (event) {
    var teclapresionada = event.key;
    
if (/[0-9+\-*/.]/.test(teclapresionada)) {
    poner(teclapresionada);
} else if(teclapresionada === 'enter' || teclapresionada === '=') {
    calcular();
} else if (teclapresionada === 'backspace') {
    quitar();
} else if (teclapresionada === 'escape') {
    limpiar();
}

});

