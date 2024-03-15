function contar() {
    var inicio = window.document.getElementById('inicio');
    var fim = window.document.getElementById('fim');
    var passo = window.document.getElementById('passo');
    var msg = window.document.getElementById('msg');
    if (inicio.value.length == 0 || fim.value.length == 0 ) {
        msg.innerHTML = 'Impossível contar! ';
    } else {
        msg.innerHTML = 'Contando: <br>';
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value); 
        if (passo.value.length == 0 || p <= 0) {
            window.alert('Passo inválido! Considere PASSO 1');
            p = 1;
        }
    }
    if (i < f) {
        for(var c = i; c <= f; c += p) {
            msg.innerHTML += `${c} \u{27A1} `;
        }
    } else {
        for(var c = i; c >= f; c -= p) {
            msg.innerHTML += `${c} \u{27A1} `;
        }
    } 
    msg.innerHTML += `\u{1F3C1}`;
} 