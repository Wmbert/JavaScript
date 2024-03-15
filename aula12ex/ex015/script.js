function verificar() {
    var data = new Date();
    var ano_atual = data.getFullYear();
    var ano_nascimento = window.document.getElementById('nasc');
    var msg = window.document.getElementById('msg');
    if (ano_nascimento.value > ano_atual || ano_nascimento.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var sexo = window.document.getElementsByName('sexo');
        var idade = ano_atual - Number(ano_nascimento.value);
        var genero = '';
        var img = window.document.getElementById('imagem');
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 14) {
                // Criança
                img.src = 'chomem.png';
            } else if (idade < 18) {
                // Jovem
                img.src = 'jhomem.png';
            } else if (idade < 60) {
                // Adulto
                img.src = 'ahomem.png';
            } else {
                // Idoso
                img.src = 'ihomem.png';
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade < 14) {
                // Criança
                img.src = 'cmulher.png';
            } else if (idade < 18) {
                // Jovem
                img.src = 'jmulher.png';
            } else if (idade < 60) {
                // Adulto
                img.src = 'amulher.png';
            } else {
                // Idoso
                img.src = 'imulher.png';
            }
        }
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        msg.style.textAlign = 'center'
    }
}
