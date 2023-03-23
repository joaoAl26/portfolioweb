function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
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
function cos(){
    a = parseInt(document.f1.val1.value) * (MathPi/180);
    form.display.value = Math.cos(form.display.value);
}
function sin(){
    a = parseInt(document.f1.val1.value) * (MathPi/180);
    document.f1.val2.value=Math.sin(a);
}
function tan(){
    a = parseInt(document.f1.val1.value) * (MathPi/180);
    document.f1.val2.value=Math.tan(a);
}0
function sqrt(){
    a = document.f1.val1.value; 
    document.f1.val2.value=Math.sqrt(parseInt(a));
}
function log(){
    a = document.f1.val1.value;
    document.f1.val2.value=Math.log(parseInt(a));
}
function exp(){
    a = document.f1.val1.value;
    document.f1.val2.value=Math.exp(parseInt(a));
}