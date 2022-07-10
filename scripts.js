function stopDefAction(evt) { // removendo evento de atualizacao de pagina ao clicar no enviar
    evt.preventDefault();
}

document.querySelector('html').addEventListener(// removendo evento de atualizacao de pagina ao clicar no enviar
    'click', stopDefAction, false);

function resultadoFinal() {
    nome = document.querySelector('.input-nome').value
    idade = document.querySelector('.input-idade').value
    sexo = document.querySelector('#sexo').value

    resultado = document.querySelector('.texto-resultado')
    caixaResultado = document.querySelector('.caixa-resultados')

    console.log(typeof(sexo))
    function verificandoSexo(){
        if (sexo === '1'){
            sexo = 'Masculino'
        }
        else if (sexo === '2'){
            sexo = 'Feminino'
        }

        else{
            alert('Sexo digitado é inválido')
            
        }
    }
    verificandoSexo()

    caixaResultado.style.display = 'flex'
    resultado.innerHTML = `<p> O nome é : ${nome} sua idade é : ${idade} o sexo é = ${sexo}</p>`
}

