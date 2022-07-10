

function comando1() {
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    const dados = (` Olá, ${nome}, vimos que você tem ${idade} anos, não é mesmo?`)
    const texto = document.getElementById('texto')
    texto.innerHTML = dados;
};

function stopDefAction(evt) {
    evt.preventDefault();
}

document.querySelector('html').addEventListener(
    'click', stopDefAction, false);

function selecionando (){
    compreensao = document.querySelector('#compreensao').value
    resultado = document.querySelector('.texto-resultado')
    resultado.innerHTML = `<p>${compreensao} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`
}

