let num = document.getElementById('txtnum');
let lista = document.getElementById('lista');
let res = document.getElementById('res');
let array = [];

function add() {
    let n = Number(num.value);
    if(num.value.length == 0 || n <= 0 || n > 100 || array.indexOf(n) != -1) {
        window.alert('Valor inválido ou já encontado na lista!');
        num.value = '';
        num.focus();
        return false;
    }
    array.push(n)
    let item = document.createElement('option');
    item.text = `Valor ${n} adicionado`;
    lista.appendChild(item);
    num.value = '';
    num.focus();
    res.innerHTML = '';
}

function fim() {
    if(array.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
        return false
    }
    let tudo = array.length
    let maior = Math.max(...array);
    let menor = Math.min(...array);
    let soma = 0
    for(i in array) { 
        soma += array[i];
    }
    let media = soma / tudo;
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo temos ${tudo} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
 } 
