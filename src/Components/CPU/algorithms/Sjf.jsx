export default function Sjf(processos) {
    if (!Array.isArray(processos)) {
        console.error('Esperado um array de processos.');
        return { processosOrdenados: [], tempoMedioDeEspera: NaN };
    }

    const processosValidos = processos.filter((processo) => {
        const duracaoValida = !isNaN(processo.duracao) && typeof processo.duracao === 'number';
        const chegadaValida = !isNaN(processo.chegada) && typeof processo.chegada === 'number';
        if (!duracaoValida || !chegadaValida) {
            console.error('Dados inválidos:', processo);
        }
        return duracaoValida && chegadaValida;
    });

    processosValidos.sort((a, b) => a.duracao - b.duracao || a.chegada - b.chegada);

    if (processosValidos.length === 0) {
        return { processosOrdenados: [], tempoMedioDeEspera: NaN };
    }

    let tempoAtual = 0;
    let tempoTotalDeEspera = 0;

    processosValidos.forEach((processo) => {
        processo.tempoDeEspera = Math.max(0, tempoAtual - processo.chegada);
        tempoTotalDeEspera += processo.tempoDeEspera;
        tempoAtual += processo.duracao;
    });

    const tempoMedioDeEspera = tempoTotalDeEspera / processosValidos.length;

    return {
        processosOrdenados: processosValidos,
        tempoMedioDeEspera: tempoMedioDeEspera,
    };
}
