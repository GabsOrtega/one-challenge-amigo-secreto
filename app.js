//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let inputNome = document.getElementById('amigo');
let listaAmigosAdicionados = [];
let labelListaAmigos = document.getElementById('listaAmigos');

function adicionarAmigo() {
    if (inputNome.value == '') {
        alert('Nome Inválido! Por favor, insira um nome válido.');
    }
    else {
        listaAmigosAdicionados.push(inputNome.value);
        labelListaAmigos.innerHTML = '';
        for(let i = 0; i < listaAmigosAdicionados.length; i++) {
            labelListaAmigos.innerHTML += '<li>' + listaAmigosAdicionados[i] + '</li>';
        }
        inputNome.value = '';
        resultado.innerHTML = '';
    }
}

function sortearAmigo() {
    if (listaAmigosAdicionados.length == 0) {
        alert('Não é possível sortear uma pessoa, pois não há pessoas adicionadas na lista!');
        resultado.innerHTML = '';
    }
    else {
        let numeroSorteado = Math.floor(Math.random() * listaAmigosAdicionados.length);
        resultado.innerHTML = 'O amigo secreto sorteado é: ' + listaAmigosAdicionados[numeroSorteado];
        listaAmigosAdicionados.length = 0;
        labelListaAmigos.innerHTML = '';
        inputNome.value = '';
    }
}