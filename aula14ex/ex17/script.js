function gerar() {
    var num = document.getElementById('num');
    var msg = document.getElementById('seltab');
    if (num.value.length == 0) {
        window.alert('ERRO! Por favor, digite um número');
    } else {
        n = Number(num.value);
        msg.innerHTML = ''
        for(c = 1; c <= 10; c++) {
            var item = document.createElement('option');
            item.text = `${n} X ${c} = ${n * c}`;
            item.value = `tab${c}`;
            msg.appendChild(item);
        }
    }
} 