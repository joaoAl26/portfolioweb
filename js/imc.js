title.innerHTML = "SITEMA FIT 2023"

var botVer = document.getElementById('verificar');
var botlimpa = document.getElementById('limpar');
var botVolta = document.getElementById('voltar');

var nome = document.getElementById('nome');
var campoData = document.getElementById('data_nascimento');
var campoAltura = document.getElementById('altura');
var campoPeso = document.getElementById('peso');
var sexos = document.querySelectorAll('input[name="sexo]');

botVer.addEventListener('click', function (){
    var nome = campoNome.value;
    var peso = campoPeso.value;
    var altura = campoAltura.value;
 
    var sexoSelecionado;
    for (var i = 0; i < sexos.length; i++) {
        if (sexos[i].checked) {
            sexoSelecionado = sexos[i].value;
            break;
        }
    }
})
function calculate(){
    var altura = document.getElementById("altura").value / 100; 
    var peso = document.getElementById("peso").value;

    var imc = peso / altura ** 2;
    var text=""
    if (imc < 18.5) {
      text="Você está magro" 
    } else if (imc < 24.9) {
      text="Você está com o peso ideal" 
    } else if (imc < 29.9) {
      text="Você está com sobrepeso"
    } else if (imc < 39.9) {
      text="Você está com obesidade"
    } else if (imc > 39.9) {
      text="Você está com obesidade mórbida"
    }
    document.getElementById("areatext").innerText=text;
  }   
