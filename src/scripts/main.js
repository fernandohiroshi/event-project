AOS.init();

const dataDoEvento = new Date('Aug 22, 2023 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date(); // pegar data atual
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000*60*60*24;
    const horasEmMs = 1000*60*60;
    const minutosEmMs = 1000*60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((diasAteOEvento % horasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((diasAteOEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((diasAteOEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = ` Comeca em: ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Evento expirado`
    }
}, 1000);