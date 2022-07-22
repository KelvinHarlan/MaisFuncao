function stopDefAction(evt) { // removendo evento de atualizacao de pagina ao clicar no enviar
    evt.preventDefault();
}

document.querySelector('html').addEventListener(// removendo evento de atualizacao de pagina ao clicar no enviar
    'click', stopDefAction, false);

function resultadoFinal() {
    let nome = document.querySelector('.input-nome')
    let idade = document.querySelector('.input-idade').value
    let sexo = document.querySelector('#sexo')
    let cadeirante = document.querySelector('#cadeirante').value
    let ativarBotões = document.querySelectorAll('.btn-config')
    /*Autocuidado*/
    let alimentacao = document.querySelector('#alimentacao')
    let higiene = document.querySelector('#higiene')
    let banho = document.querySelector('#banho')
    let vestirSuperior = document.querySelector('#vestir-superior')
    let vestirInferior = document.querySelector('#vestir-inferior')
    let vasoSanitario = document.querySelector('#vaso-sanitario')
    let controleUrina = document.querySelector('#urina')
    let controleFezes = document.querySelector('#fezes')

    /*Mobilidade*/
    transferenciaLeito = document.querySelector('#transferencia-cadeira')
    transferenciaVaso = document.querySelector('#transferencia-vaso')
    transferenciaBanheira = document.querySelector('#transferencia-banheira')

    /*Locomoção*/
    marchaCadeira = document.querySelector('#marcha-cadeira')
    escadas = document.querySelector('#escadas')

    /*Comunicação*/
    compreensao = document.querySelector('#compreensao')
    expressao = document.querySelector('#expressao')


    /*Conhecimento social*/
    interacao = document.querySelector('#interacao-social')
    resolucao = document.querySelector('#resolucao-de-problemas')
    memoria = document.querySelector('#memoria')

    /*Fim dos inputs*/


    resultado = document.querySelector('.texto-resultado')
    caixaResultado = document.querySelector('.caixa-resultados')



    caixaResultado.style.display = 'flex'



    function verificarEspacoEmBranco() { /*Verificando se existem campos em branco*/
        let seletores = document.querySelectorAll('select')
        for (i = 0; i < seletores.length; i++) {
            if (seletores[i].value === '0') {
                seletores[i].style.backgroundColor = 'rgb(240, 108, 108)'
        

            }
            else {
                seletores[i].style.backgroundColor = 'rgb(255,255,255)'
                manipulandoInputs()
                imprimindoResultado()



            }
            
        }
        if (nome.value === '') {
            nome.style.backgroundColor = 'rgb(255,255,255)'
        }
    }
    verificarEspacoEmBranco()


    function manipulandoInputs() {
        if (alimentacao.value === '1') { /*Alimentsção*/
            alimentacao = '<b>Alimentação:</b> Assistência total - A pessoa executa menos de 25% das tarefas.'
        }

        else if (alimentacao.value === '2') {
            alimentacao = '<b>Alimentação:</b> Assistência máxima - A pessoa executa 25 a 49% das tarefas de alimentação.'
        }

        else if (alimentacao.value === '3') {
            alimentacao = '<b>Alimentação:</b> Assistência moderada - A pessoa executa 50 a 74% das tarefas de alimentação.'
        }

        else if (alimentacao.value === '4') {
            alimentacao = '<b>Alimentação:</b> Assistência com contato mínimo - é preciso apenas tocar a pessoa em auxílio para realização das tarefas. A pessoa executa 75% ou mais das tarefas.'
        }

        else if (alimentacao.value === '5') {
            alimentacao = '<b>Alimentação:</b> Supervisão - Necessita de supervisão ou de preparação para realização da atividade, sem contato físico.'
        }

        else if (alimentacao.value === '6') {
            alimentacao = '<b>Alimentação:</b> Independência modificada - necessita de um dispositivo de adaptação ou exige cuidados de segurança no ato de comer.'
        }

        else if (alimentacao.value === '7') {
            alimentacao = '<b>Alimentação:</b> Independência completa - A pessoa realiza todas as tarefas de forma independente, com segurança.'
        }

        else if (alimentacao.value === '0') {
            alimentacao = 'Dado ( <b class = "red">Alimentação:</b> ) está em branco!'
        }

        if (higiene.value === '1') { /*Higiene Pessoal*/
            higiene = '<b>Higiene Pessoal:</b> Assistência Total - A pessoa executa menos de 25% das tarefas.'
        }

        else if (higiene.value === '2') {
            higiene = '<b>Higiene Pessoal:</b> Assistência Máxima - A pessoa executa 25 a 49% das tarefas.'

        }
        else if (higiene.value === '3') {
            higiene = '<b>Higiene Pessoal:</b> Assistência Moderada - A pessoa executa 50 a 74% das tarefas.'

        }
        else if (higiene.value === '4') {
            higiene = '<b>Higiene Pessoal:</b> Assistência com contato mínimo - é preciso apenas tocar a pessoa em auxílio para realização das tarefas. A pessoa executa 75% ou mais das tarefas.'

        }
        else if (higiene.value === '5') {
            higiene = '<b>Higiene Pessoal:</b> Supervisão ou Preparação - Exige supervisão ou preparação para realização da atividade, sem contato físico.'

        }
        else if (higiene.value === '6') {
            higiene = '<b>Higiene Pessoal:</b> Independência Modificada - Precisa de equipamento especializado, demanda mais tempo que razoável ou exige cuidados de segurança.'

        }
        else if (higiene.value === '7') {
            higiene = '<b>Higiene Pessoal:</b> Independência Completa - Limpa os dentes ou dentadura, pentea o cabelo, lava as mãos e rosto, barbeia-se ou maquia-se incluindo os preparativos,\ncom segurança.'

        }
        else if (higiene.value === '0') {
            higiene = 'Dado ( <b class = "red">Higiene pessoal: apresentação e aparência:</b> ) está em branco!'

        }

        if (banho.value === '1') { /*Banho: lavar o corpo*/
            banho = '<b>Banho: Lavar o corpo:</b> Assistência Total - A pessoa executa menos de 25% das tarefas.'

        }

        else if (banho.value === '2') {
            banho = '<b>Banho: Lavar o corpo:</b> Assistência Máxima - A pessoa executa 25 a 49% das tarefas.'

        }

        else if (banho.value === '3') {
            banho = '<b>Banho: Lavar o corpo:</b> Assistência Moderada - A pessoa executa 50 a 74% das tarefas.'

        }

        else if (banho.value === '4') {
            banho = '<b>Banho: Lavar o corpo:</b> Assistência com contato mínimo - é preciso apenas tocar a pessoa em auxílio para realização das tarefas. A pessoa executa 75% ou mais das tarefas.'

        }

        else if (banho.value === '5') {
            banho = '<b>Banho: Lavar o corpo:</b> Supervisão ou Preparação - Exige supervisão ou preparação para realização da atividade, sem contato físico.'

        }

        else if (banho.value === '6') {
            banho = '<b>Banho: Lavar o corpo:</b> Independência Modificada - Precisa de equipamento especializado, demanda mais tempo que razoável ou exige cuidados de segurança.'

        }

        else if (banho.value === '7') {
            banho = '<b>Banho: Lavar o corpo:</b> Independência Completa - Lava e seca o corpo com segurança.'

        }

        else if (banho.value === '0') {
            banho = 'Dado ( <b class = "red">Banho: Lavar o corpo:</b> ) está em branco!'

        }

        if (vestirSuperior.value === '1') { /*Vestir metade superior do corpo*/
            vestirSuperior = '<b>Vestir: metade superior do corpo:</b> Assistência Total - A pessoa executa menos de 25% das tarefas.'

        }

        else if (vestirSuperior.value === '2') {
            vestirSuperior = '<b>Vestir: metade superior do corpo:</b> Assistência Máxima - A pessoa executa 25 a 49% das tarefas.'

        }

        else if (vestirSuperior.value === '3') {
            vestirSuperior = '<b>Vestir: metade superior do corpo:</b> Assistência Moderada - A pessoa executa 50 a 74% das tarefas.'

        }

        else if (vestirSuperior.value === '4') {
            vestirSuperior = '<b>Vestir: metade superior do corpo:</b> Assistência com contato mínimo - é preciso apenas tocar a pessoa em auxílio para realização das tarefas. A pessoa executa 75% ou mais das tarefas.'

        }

        else if (vestirSuperior.value === '5') {
            vestirSuperior = '<b>Vestir: metade superior do corpo:</b> Supervisão ou Preparação - Exige supervisão ou preparação para realização da atividade, sem contato físico.'

        }

        else if (vestirSuperior.value === '6') {
            vestirSuperior = '<b>Vestir: metade superior do corpo:</b> Independência Modificada - Exige adaptações (como velcro ou dispositivo de ajuda), ou Assistência (incluindo órtese e prótese), ou demanda mais tempo que razoável.'

        }

        else if (vestirSuperior.value === '7') {
            vestirSuperior = '<b>Vestir: metade superior do corpo:</b> Independência Completa - realiza o vestir e o despir de forma independente, com desempenho seguro.'

        }

        else if (vestirSuperior.value === '0') {
            vestirSuperior = 'Dado ( <b class = "red">Vestir: metade superior do corpo:</b> ) está em branco!'

        }


        if (vestirInferior.value === '1') { /*Vestir metade inferior do corpo*/
            vestirInferior = '<b>Vestir: metade inferior do corpo:</b> Assistência Total - A pessoa executa menos de 25% das tarefas.'
        }

        else if (vestirInferior.value === '2') {
            vestirInferior = '<b>Vestir: metade inferior do corpo:</b> Assistência Máxima - A pessoa executa 25 a 49% das tarefas.'

        }

        else if (vestirInferior.value === '3') {
            vestirInferior = '<b>Vestir: metade inferior do corpo:</b> Assistência Moderada - A pessoa executa 50 a 74% das tarefas.'

        }

        else if (vestirInferior.value === '4') {
            vestirInferior = '<b>Vestir: metade inferior do corpo:</b> Assistência com contato mínimo - é preciso apenas tocar a pessoa em auxílio para realização das tarefas. A pessoa executa 75% ou mais das tarefas.'

        }

        else if (vestirInferior.value === '5') {
            vestirInferior = '<b>Vestir: metade inferior do corpo:</b> Supervisão ou Preparação - Exige supervisão ou preparação para realização da atividade, sem contato físico.'

        }

        else if (vestirInferior.value === '6') {
            vestirInferior = '<b>Vestir: metade inferior do corpo:</b> Independência Modificada - Exige adaptações (como velcro ou dispositivo de ajuda), ou Assistência (incluindo órtese e prótese), ou demanda mais tempo que razoável.'

        }

        else if (vestirInferior.value === '7') {
            vestirInferior = '<b>Vestir: metade inferior do corpo:</b> Independência Completa - realiza o vestir e o despir de forma independente, com desempenho seguro.'

        }

        else if (vestirInferior.value === '0') {
            vestirInferior = 'Dado ( <b class = "red">Vestir: metade inferior do corpo:</b> ) está em branco!'

        }

        if (vasoSanitario.value === '1') { /*Utilização do vaso sanitário*/
            vasoSanitario = '<b>Utilização do vaso sanitário:</b> Assistência Total - A pessoa executa menos de 25% das tarefas.'

        }

        else if (vasoSanitario.value === '2') {
            vasoSanitario = '<b>Utilização do vaso sanitário:</b> Assistência Máxima - A pessoa executa 25 a 49% das tarefas.'

        }

        else if (vasoSanitario.value === '3') {
            vasoSanitario = '<b>Utilização do vaso sanitário:</b> Assistência Moderada - A pessoa executa 50 a 74% das tarefas.'

        }

        else if (vasoSanitario.value === '4') {
            vasoSanitario = '<b>Utilização do vaso sanitário:</b> Assistência com contato mínimo - é preciso apenas tocar a pessoa em auxílio para realização das tarefas. A pessoa executa 75% ou mais das tarefas.'

        }

        else if (vasoSanitario.value === '5') {
            vasoSanitario = '<b>Utilização do vaso sanitário:</b> Supervisão ou Preparação - Exige supervisão ou preparação para realização da atividade, sem contato físico.'

        }

        else if (vasoSanitario.value === '6') {
            vasoSanitario = '<b>Utilização do vaso sanitário:</b> Independência Modificada - Precisa de equipamento especializado, demanda mais tempo que razoável ou há comprometimento de segurança.'

        }

        else if (vasoSanitario.value === '7') {
            vasoSanitario = '<b>Utilização do vaso sanitário:</b> Independência Completa - Lima-se após o uso do vaso sanitário, maneja papel higiênico, retira e coloca a roupa para ir ao banheiro de fomra\nindependente, com desempenho seguro.'

        }

        else if (vasoSanitario.value === '0') {
            vasoSanitario = 'Dado ( <b class = "red">Utilização do vaso sanitário:</b> ) está em branco!'

        }


        if (controleUrina.value === '1') { /*Controle da urina: frequência de incontinência*/
            controleUrina = '<b>Controle da urina: frequência de incontinência:</b> Assistência Total - A pessoa se molha quase todos os dias;  necessita usar absorventes quer esteja ou não usando dispositivos. a pessoa executa menos de 25% das tarefas.'

        }

        else if (controleUrina.value === '2') {
            controleUrina = '<b>Controle da urina: frequência de incontinência:</b> Assistência Máxima - A pessoa se molha quase todos os dias;  necessita usar absorventes quer esteja ou não usando dispositivos A pessoa executa 25 a 49% das tarefas.'

        }

        else if (controleUrina.value === '3') {
            controleUrina = '<b>Controle da urina: frequência de incontinência:</b> Assitência moderada - Requer Assistência moderada para manter algum dispositivo externo. A pessoa executa 50 a 74% da tarefas e pode ter acidentes ocasionais menos de uma vez por dia.'

        }

        else if (controleUrina.value === '4') {
            controleUrina = '<b>Controle da urina: frequência de incontinência:</b> Assistência com contato mínimo - Requer Assistência moderada para manter algum dispositivo externo. A pessoa executa 75% ou mais das tarefas e apresenta acidentes ocasionais menos de uma vez por semana.'

        }

        else if (controleUrina.value === '5') {
            controleUrina = '<b>Controle da urina: frequência de incontinência:</b> Supervisão ou preparo - Necessita de supervisão ou de preparação do equipamento para manter um padrão satisfatório ou um dispositivo externo.'

        }

        else if (controleUrina.value === '6') {
            controleUrina = '<b>Controle da urina: frequência de incontinência:</b> Independência Modificada - Requer uma sonda, coletor urinário, urinol, fralda, comadre, absorvente, toalha, algum utencílio para coleta ou medicamento para controle da urina. Sem acidentes.'

        }

        else if (controleUrina.value === '7') {
            controleUrina = '<b>Controle da urina: frequência de incontinência:</b> Independência Completa - Controla intencional e completamente o ato de urinar e este nunca é incontinente.'

        }

        else if (controleUrina.value === '0') {
            controleUrina = 'Dado ( <b class = "red">Controle da urina: frequência de incontinência:</b> ) está em branco!'

        }

        if (controleFezes.value === '1') { /*Controle das fezes*/
            controleFezes = '<b>Controle das fezes:</b> Assistência Total - A pessoa suja-se quase que diariamente, requerendo o uso de absorventes. A pessoa executa menos de 25% das tarefas.'

        }

        else if (controleFezes.value === '2') {
            controleFezes = '<b>Controle das fezes:</b> Assistência Máxima - A pessoa suja-se quase que diariamente, requerendo o uso de absorventes. A pessoa executa 25 a 49% das tarefas.'

        }

        else if (controleFezes.value === '3') {
            controleFezes = '<b>Controle das fezes:</b> Assitência moderada - Requer Assistência moderada para manter um padrão satisfatório de defecação através de dispositivos. A pessoa executa 50 a 74% da tarefas. Pode haver acidentes ocasionais menos de uma vez por dia.'

        }

        else if (controleFezes.value === '4') {
            controleFezes = '<b>Controle das fezes:</b> Assistência com contato mínimo - Requer assistência com contato mínimo para manter um padrão satisfatório através de dispositivos. A pessoa executa 75% ou mais das tarefas. Pode haver acidentes ocasionais menos de uma vez por semana.'

        }

        else if (controleFezes.value === '5') {
            controleFezes = '<b>Controle das fezes:</b> Supervisão ou preparo - Necessita de supervisão ou de preparação do equipamento mecessário para manter um padrão satisfatório de defecação. Pode haver acidentes ocasionais menos de uma vez por mês.'

        }

        else if (controleFezes.value === '6') {
            controleFezes = '<b>Controle das fezes:</b> Independência Modificada - Requer uso de comadre, mesa de apoio, estimulo manual, supositórios, laxantes,lavagens de forma regular ou uso de medicações. Sem acidentes.'

        }

        else if (controleFezes.value === '7') {
            controleFezes = '<b>Controle das fezes:</b> Independência Completa - Controla intencional e completamente o ato de defecar e este nunca é incontinente.'

        }

        else if (controleFezes.value === '0') {
            controleFezes = 'Dado ( <b class = "red">Controle das fezes:</b> ) está em branco!'

        }

        if (transferenciaLeito.value === '1') { /*Transferências: leito, cadeira, cadeira de rodas*/
            transferenciaLeito = '<b>Transferências: leito, cadeira, cadeira de rodas:</b> Assistência Total - A pessoa executa menos de 25% das tarefas.'

        }

        else if (transferenciaLeito.value === '2') {
            transferenciaLeito = '<b>Transferências: leito, cadeira, cadeira de rodas:</b> Assistência Máxima - A pessoa executa 25 a 49% das tarefas.'

        }

        else if (transferenciaLeito.value === '3') {
            transferenciaLeito = '<b>Transferências: leito, cadeira, cadeira de rodas:</b> Assistência Moderada - A pessoa executa 50 a 74% das tarefas.'

        }

        else if (transferenciaLeito.value === '4') {
            transferenciaLeito = '<b>Transferências: leito, cadeira, cadeira de rodas:</b> Assistência com contato mínimol - É preciso apenas tocar na pessoa para realização das tarefas. A pessoa executa 75% ou mais das tarefas.'

        }

        else if (transferenciaLeito.value === '5') {
            transferenciaLeito = '<b>Transferências: leito, cadeira, cadeira de rodas:</b> Supervisão ou preparação - Necessário supervisão ou preparação para realização das tarefas.'

        }

        else if (transferenciaLeito.value === '6') {
            transferenciaLeito = '<b>Transferências: leito, cadeira, cadeira de rodas:</b> Independência Modificada - Requer dispositivos de ajuda ou adaptações. Leva um tempo acima do razoável ou existem riscos de segurança.'

        }

        else if (transferenciaLeito.value === '7' && cadeirante === 'Não') {
            transferenciaLeito = '<b>Transferências: leito, cadeira, cadeira de rodas:</b> Independência Total - Aproxíma-se, senta-se e levanta-se de uma cadeira normal e fica em uma posição ereta; transfere-se da cama para uma cadeira. Executa com segurança.'

        }
        else if (transferenciaLeito.value === '7' && cadeirante === 'Sim') {
            transferenciaLeito = '<b>Transferências: leito, cadeira, cadeira de rodas:</b> Independência Total - Aproxíma-se da cama ou da cadeira, aciona o freio, ajusta os pedais e remove o apoio dos braços caso necessário; transfere-se e retorna. Executa com segurança.'

        }

        else if (transferenciaLeito.value === '7' && cadeirante === '0') {
            transferenciaLeito = 'Dado ( <b class = "red">Cadeirante:</b> ) está em branco!'

        }

        else if (transferenciaLeito.value === '0') {
            transferenciaLeito = 'Dado ( <b class = "red">Transferências: leito, cadeira, cadeira de rodas:</b> ) está em branco!'

        }

        if (transferenciaVaso.value === '1') { /*Transferências: Vaso sanitário*/
            transferenciaVaso = '<b>Transferências: Vaso sanitário:</b> Assistência Total - A pessoa executa menos de 25% das tarefas.'
        }

        else if (transferenciaVaso.value === '2') {
            transferenciaVaso = '<b>Transferências: Vaso sanitário:</b> Assistência Máxima - A pessoa executa 25 a 49% das tarefas.'

        }

        else if (transferenciaVaso.value === '3') {
            transferenciaVaso = '<b>Transferências: Vaso sanitário:</b> Assistência Moderada - A pessoa executa 50 a 74% das tarefas.'

        }

        else if (transferenciaVaso.value === '4') {
            transferenciaVaso = '<b>Transferências: Vaso sanitário:</b> Assistência com contato mínimo - É preciso apenas tocar na pessoa para realização das tarefas. A pessoa executa 75% ou mais das tarefas.'

        }

        else if (transferenciaVaso.value === '5') {
            transferenciaVaso = '<b>Transferências: Vaso sanitário:</b> Supervisão ou preparação - Necessário supervisão ou preparação para realização das tarefas.'

        }

        else if (transferenciaVaso.value === '6') {
            transferenciaVaso = '<b>Transferências: Vaso sanitário:</b> Independência Modificada - Requer dispositivos de ajuda ou adaptações. Leva um tempo acima do razoável ou existem riscos de segurança.'

        }

        else if (transferenciaVaso.value === '7' && cadeirante === 'Não') {
            transferenciaVaso = '<b>Transferências: Vaso sanitário:</b> Aproxíma-se, senta-se e levanta-se de um vaso padrão. Executa com segurança.'

        }

        else if (transferenciaVaso.value === '7' && cadeirante === 'Sim') {
            transferenciaVaso = '<b>Transferências: Vaso sanitário:</b> Aproxíma-se do vaso, aciona o freio, ajusta os pedais e remove o apoio dos braços caso necessário; transfere-se e retorna. Executa com segurança.'

        }

        else if (transferenciaVaso.value === '7' && cadeirante === '0') {
            transferenciaVaso = 'Dado ( <b class = "red">Cadeirante:</b> ) está em branco!'
        }

        else if (transferenciaVaso.value === '0') {
            transferenciaVaso = 'Dado ( <b class = "red">Transferências: Vaso sanitário:</b> ) está em branco!'

        }

        if (transferenciaBanheira.value === '1') { /*Transferências: Banheira ou chuveiro*/
            transferenciaBanheira = '<b>Transferências: Banheira ou chuveiro:</b> Assistência Total - A pessoa executa menos de 25% das tarefas.'

        }

        else if (transferenciaBanheira.value === '2') {
            transferenciaBanheira = '<b>Transferências: Banheira ou chuveiro:</b> Assistência Máxima - A pessoa executa 25 a 49% das tarefas.'

        }

        else if (transferenciaBanheira.value === '3') {
            transferenciaBanheira = '<b>Transferências: Banheira ou chuveiro:</b> Assistência Moderada - A pessoa executa 50 a 74% das tarefas.'

        }

        else if (transferenciaBanheira.value === '4') {
            transferenciaBanheira = '<b>Transferências: Banheira ou chuveiro:</b> Assistência com contato mínimo - É preciso apenas tocar na pessoa para realização das tarefas. A pessoa executa 75% ou mais das tarefas.'

        }

        else if (transferenciaBanheira.value === '5') {
            transferenciaBanheira = '<b>Transferências: Banheira ou chuveiro:</b> Supervisão ou preparação - Necessário supervisão ou preparação para realização das tarefas.'

        }

        else if (transferenciaBanheira.value === '6') {
            transferenciaBanheira = '<b>Transferências: Banheira ou chuveiro:</b> Independência Modificada - Requer dispositivos de ajuda ou adaptações. Leva um tempo acima do razoável ou existem riscos de segurança.'

        }

        else if (transferenciaBanheira.value === '7' && cadeirante === 'Não') {
            transferenciaBanheira = '<b>Transferências: Banheira ou chuveiro:</b> Independência Completa - Aproxíma-se, entra e sai do boxe. Executa com segurança.'

        }

        else if (transferenciaBanheira.value === '7' && cadeirante === 'Sim') {
            transferenciaBanheira = '<b>Transferências: Banheira ou chuveiro:</b> Independência Completa - Aproxíma-se do boxe, aciona o freio, ajusta os pedais e remove o apoio dos braços caso necessário; transfere-se e retorna. Executa com segurança.'

        }

        else if (transferenciaBanheira.value === '7' && cadeirante === '0') {
            transferenciaBanheira = 'Dado ( <b class = "red">Cadeirante:</b> ) está em branco!'
        }


        else if (transferenciaBanheira.value === '0') {
            transferenciaBanheira = 'Dado ( <b class = "red">Transferências: Banheira ou chuveiro:</b> ) está em branco!'

        }

        if (marchaCadeira.value === '1') { /*Marcha/ Cadeira de rodas*/
            marchaCadeira = '<b>Marcha/ Cadeira de rodas:</b> Assistência Total - A pessoa executa menos de 25% do esforço ou requer assistência de duas pessoas ou não anda o mínimo de 17 metros.'

        }

        else if (marchaCadeira.value === '2') {
            marchaCadeira = '<b>Marcha/ Cadeira de rodas:</b> Assistência Máxima - A pessoa executa 25 a 49% do esforço de locomoção para andar um mínimo de 15 metros. Requer a assisência de uma pessoa.'

        }

        else if (marchaCadeira.value === '3') {
            marchaCadeira = '<b>Marcha/ Cadeira de rodas:</b> Assistência Moderada - A pessoa executa 50 a 74% do esforço de locomoção para andar um mínimo de 50 metros.'

        }

        else if (marchaCadeira.value === '4') {
            marchaCadeira = '<b>Marcha/ Cadeira de rodas:</b> Assistência com contato mínimo - É preciso apenas tocar na pessoa para realização das tarefas. A pessoa executa 75% ou mais de esforço de locomoção para andar um mínimo de 50 metros.'

        }

        else if (marchaCadeira.value === '5') {
            marchaCadeira = '<b>Marcha/ Cadeira de rodas:</b>'

        }

        else if (marchaCadeira.value === '6') {
            marchaCadeira = '<b>Marcha/ Cadeira de rodas:</b>'

        }

        else if (marchaCadeira.value === '7') {
            marchaCadeira = '<b>Marcha/ Cadeira de rodas:</b>'

        }

        else if (marchaCadeira.value === '0') {
            marchaCadeira = '<b>Marcha/ Cadeira de rodas:</b>'

        }








    }



    function imprimindoResultado() {
        resultado.innerHTML =
            `<p class = "resultadoFinal">
        <b>Nome: </b> ${nome.value}<br>
        <b>Idade: </b>${idade} anos<br>
        <b>Sexo: </b>${sexo.value}<br>
        <b>Cadeirante: </b>${cadeirante}<br><br>
        ${alimentacao}<br>
        ${higiene}<br>
        ${banho}<br>
        ${vestirSuperior}<br>
        ${vestirInferior}<br>
        ${vasoSanitario}<br>
        ${controleUrina}<br>
        ${controleFezes}<br>
        ${transferenciaLeito}<br>
        ${transferenciaVaso}<br>
        ${transferenciaBanheira}<br>
        ${marchaCadeira}<br>

        
        </p>`
    }



    if (window.innerWidth > 768) { /*Verificando tamanho da tela para aplicar o scroll*/
        window.scrollTo(x = 0, y = 0);
    }
    for (i = 0; i < ativarBotões.length; i++) {
        ativarBotões[i].style.display = 'inline-block'// Ativando os botões de imprimir, salvar, copiar apenas quando clicado clicado em enviar
    }
}

function downloadpdf() { /* Salvando o texto em PDF*/
    nome = document.querySelector('.input-nome')
    let texto = document.querySelector('.texto-resultado');
    let janela = window.open('', '', 'width = 800, heigth = 600');
    janela.document.write(texto.innerHTML);
    
    
    if (nome.value !== '') {
        janela.document.title = nome.value;
    }
    else {
        janela.document.title = 'Paciente sem nome informado';
    }

    janela.print();
    
    janela.window.close()
}


function copiar() { /* copiando texto*/
    let texto = document.querySelector('.resultadoFinal');
    let palavraCopiar = document.querySelector('.copiar');
    try {
        navigator.clipboard.writeText(texto.innerText);
        palavraCopiar.innerHTML = '<i class="fa-solid fa-copy"></i> Copiado';
        palavraCopiar.style.backgroundColor = 'rgb(162, 245, 37)';

    }
    catch {
        alert('Caixa de texto está vazia, clique em enviar.');
    }



}


function limpar() {
    let texto = document.querySelector('.texto-resultado');
    let caixaTexto = document.querySelector('.caixa-resultados');
    let palavraCopiar = document.querySelector('.copiar');
    let seletores = document.querySelectorAll('select');
    let nome = document.querySelector('.input-nome');
    let idade = document.querySelector('.input-idade');
    let ativarBotões = document.querySelectorAll('.btn-config')

    for (i = 0; i < seletores.length; i++) { // limpando os seletores
        if (seletores[i].value !== '0') {
            seletores[i].value = '0';


        }
        else {
            seletores[i].style.backgroundColor = 'rgb(255, 255, 255)'; // voltando a cor dos seletores pra branco
        }
    }


    texto.innerHTML = 'Aguardando resultado...' // quando limpar, redefinir o texto 

    if (window.innerWidth > 768) { /*Verificando tamanho da tela para aplicar o scroll*/
        palavraCopiar.style.backgroundColor = 'transparent'; // voltar a cor do botão copiar Desktop
    }
    else {
        palavraCopiar.style.backgroundColor = 'rgb(255,255,255';
        caixaTexto.style.display = 'none' // ocultando a barra de resultados no mobile
    }
    palavraCopiar.innerHTML = '<i class="fa-solid fa-copy"></i> copiar'; // caso o copiar tenha sido selecionado, volta ao normal



    if (nome.value && idade.value !== '0') { // Limpando o nome e a idade
        nome.value = '';
        idade.value = '';
    }

    else {
        nome.style.backgroundColor = 'rgb(255, 255, 255)';
    }

    for (i = 0; i < ativarBotões.length; i++) {
        ativarBotões[i].style.display = 'none'// Desativando os botões de imprimir, salvar, copiar apenas quando clicado clicado em enviar
    }


    window.scrollTo(x = 0, y = 0); /*Voltando a tela para o início da página*/
}