var hora = new Date();
var agora = hora.getHours();
console.log(`Agora São ${agora} horas.`);
if (agora > 0 && agora < 4) {
    console.log(`Boa madrugada!`);
} else if (agora < 12) {
    console.log(`Bom dia!`);
} else if (agora < 18) {
    console.log(`Boa tarde!`);
} else {
    console.log(`Boa noite!`);
}
