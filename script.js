function atualizaContador() {
    const dataEnem = new Date("2025-11-02T00:00:00").getTime();
    const agora = new Date().getTime();
    const tempoRestante = dataEnem - agora;

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizaContador, 1000);