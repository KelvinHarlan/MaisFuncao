var btnIcon = document.querySelector('.fa-moon');
var logomarca = document.querySelector('.imagem');

function mudarDeCor() {
    let planoDeFundo = document.querySelector('body');
    let dadosPessoais = document.querySelector('.dadosPessoais');
    let caixaFormulario = document.querySelector('.caixa-formulario');
    let caixaResultados = document.querySelector('.caixa-resultados');
    let enviar = document.querySelector('.enviar');
    let btnConfig = document.querySelectorAll('.btn-config');
    let icon = document.querySelectorAll('.caixa-formulario i');
    
    if (btnIcon.className === 'fa-solid fa-moon'){
    corPreta();
    logomarca.src = 'imagem/LogoBranca.svg';
    }

    else if (btnIcon.className === 'fa-solid fa-sun'){
        corClara();
        logomarca.src = 'imagem/Logo.svg';
        }
    

        function corPreta() { // inicio da cor preta

            planoDeFundo.style.backgroundColor = 'black';
            planoDeFundo.style.backgroundImage = 'linear-gradient(rgb(0, 0, 0), rgb(32, 32, 32), rgb(0, 0, 0))';
            planoDeFundo.style.color = 'white';
            dadosPessoais.style.backgroundColor = 'rgba(50, 50, 50, 0.671)';
            caixaFormulario.style.backgroundColor = 'rgba(50, 50, 50, 0.671)';
            caixaResultados.style.backgroundColor = 'rgba(50, 50, 50, 0.671)';
            enviar.style.backgroundColor = 'rgb(255,255,255)';
            function mudarBotoes() {
                for (i = 0; i < btnConfig.length; i++) {
                    btnConfig[i].style.backgroundColor = 'rgb(255,255,255)';
                }
            }
            mudarBotoes();

            function mudarIcones() {
                for (i = 0; i < icon.length; i++) {
                    icon[i].style.color = 'rgb(255,255,255)';
                }
            }
            mudarIcones();
            btnIcon.className = 'fa-solid fa-sun';
            btnIcon.style.color = 'rgb(255, 255, 255)';

        } // fim da cor preta

        function corClara(){ // início da cor clara
            planoDeFundo.style.backgroundColor = 'rgb(0, 255, 255)';
            planoDeFundo.style.backgroundImage = 'linear-gradient(rgb(0, 255, 255), rgb(212, 49, 245), rgb(0, 255, 255))';
            planoDeFundo.style.color = 'rgb(0,0,0)';
            dadosPessoais.style.backgroundColor = 'rgba(70, 253, 253, 0.671)';
            caixaFormulario.style.backgroundColor = 'rgba(70, 253, 253, 0.671)';
            caixaResultados.style.backgroundColor = 'rgba(70, 253, 253, 0.671)';
            enviar.style.backgroundColor = 'rgb(255,255,255)';
           
    

            function mudarIcones() {
                for (i = 0; i < icon.length; i++) {
                    icon[i].style.color = 'rgba(0, 0, 0, 0.700)';
                }
            }
            mudarIcones();
            btnIcon.className = 'fa-solid fa-moon';
            btnIcon.style.color = 'rgb(0, 0, 0)';

        } // fim da cor clara

}