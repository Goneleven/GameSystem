//Dados em json

const json1 = '{"nome1": "Korok", "vendedor1": "Passado dos kokiris."}'
const json2 = '{"nome2": "Sans", "vendedor2": "GetDunkedOn!"}'
const json3 = '{"nome3": "Conker", "vendedor3": "Esquilo Ganancioso."}'
const json4 = '{"nome4": "Club Penguin", "vendedor4": "Penguin Esquecido Pela Disney."}'
const json5 = '{"nome5": "Tails", "vendedor5": "Melhor Amigo do Ouriço Veloz."}'

//transforma json em js
const valor1 = JSON.parse(json1);
const valor2 = JSON.parse(json2);
const valor3 = JSON.parse(json3);
const valor4 = JSON.parse(json4);
const valor5 = JSON.parse(json5);

console.log(valor1);
console.log(valor2);
console.log(valor3);
console.log(valor4);
console.log(valor5);

//imprimir

//PESSOA 1:
function carregarConteudo1() {
    document.getElementById('nome').innerHTML = ("Nome: " + valor1.nome1);
    document.getElementById('vendedor').innerHTML = (valor1.vendedor1);
    document.getElementById('imagem').innerHTML = "<img src = 'imagens/korok.png' width = '100px' >";

}

//PESSOA 2:
function carregarConteudo2() {
    document.getElementById('nome').innerHTML = ("Nome: " + valor2.nome2);
    document.getElementById('vendedor').innerHTML = (valor2.vendedor2);
    document.getElementById('imagem').innerHTML = "<img src = 'imagens/sans.png' width = '100px' >";

}

//PESSOA 3:
function carregarConteudo3() {
    document.getElementById('nome').innerHTML = ("Nome: " + valor3.nome3);
    document.getElementById('vendedor').innerHTML = (valor3.vendedor3);
    document.getElementById('imagem').innerHTML = "<img src = 'imagens/conker.png' width = '100px' >";
}

//PESSOA 4:
function carregarConteudo4() {
    document.getElementById('nome').innerHTML = ("Nome: " + valor4.nome4);
    document.getElementById('vendedor').innerHTML = (valor4.vendedor4);
    document.getElementById('imagem').innerHTML = "<img src = 'imagens/clubPenguin.png' width = '100px' >";
}

//PESSOA 5:
function carregarConteudo5() {
    document.getElementById('nome').innerHTML = ("Nome: " + valor5.nome5);
    document.getElementById('vendedor').innerHTML = (valor5.vendedor5);
    document.getElementById('imagem').innerHTML = "<img src = 'imagens/tails.png' width = '100px' >";
}