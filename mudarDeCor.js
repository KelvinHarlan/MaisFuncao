function mudarDeCor(){
let planoDeFundo = document.querySelector('body');
let dadosPessoais = document.querySelector('.dadosPessoais');
let caixaFormulario = document.querySelector('.caixa-formulario');
let caixaResultados = document.querySelector('.caixa-resultados');
let enviar = document.querySelector('.enviar');
let btnConfig = document.querySelectorAll('.btn-config');
let icon = document.querySelectorAll('.caixa-formulario i')


planoDeFundo.style.backgroundColor = 'black';
planoDeFundo.style.backgroundImage = 'linear-gradient(rgb(0, 0, 0), rgb(32, 32, 32), rgb(0, 0, 0))';
planoDeFundo.style.color = 'white';
dadosPessoais.style.backgroundColor = 'rgba(50, 50, 50, 0.671)';
caixaFormulario.style.backgroundColor = 'rgba(50, 50, 50, 0.671)';
caixaResultados.style.backgroundColor = 'rgba(50, 50, 50, 0.671)';
enviar.style.backgroundColor = 'rgb(255,255,255)';
function mudarBotoes(){
    for(i = 0; i < btnConfig.length; i++){
        btnConfig[i].style.backgroundColor = 'rgb(255,255,255)';
    }
}
mudarBotoes();

function mudarIcones(){
    for(i = 0; i < icon.length; i++){
        icon[i].style.color = 'rgb(255,255,255)';
    }
}
mudarIcones();
console.log(icon)

}