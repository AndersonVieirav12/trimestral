const limpar = function(){
    document.getElementById('altura').value = ""
    document.getElementById('peso').value = ""
}

let resultado = result;

function calcular(2peso, 2altura){
    var peso = document.getElementById('2peso').value;
    var 2altura = document.getElementById('2altura').value;
    var imc = peso / (2altura * 2altura);

    document.getElementById('IMC').innerHTML = imc.toFixed(2);
    if(imc < 18.5){
        document.getElementById('magreza').classList.add('');
    } else if(imc <= 24.9){
        document.getElementById('normal').classList.add('');
    } else if(imc <= 29.9){
        document.getElementById('sobrepeso1').classList.add('');
    } else if(imc <= 39.9){
        document.getElementById('obesidade2').classList.add('');
    } else if(imc > 40){
        document.getElementById('obesidade3').classList.add('');
    } else{



}
