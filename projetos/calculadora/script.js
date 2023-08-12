function insert(num){
var resutado = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = resutado + num
}
function clean(){
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
}
function voltar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = 'Nada...'
    }
}