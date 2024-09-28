export default function Fcfs(processos) {
    if (!Array.isArray(processos)) {
        console.error('Esperado um array de processos.');
        return { processosOrdenados: [], tempoMedioDeEspera: NaN };
    }

    const processosValidos = processos.filter(processo => {
        const duracaoValida = !isNaN(processo.duracao) && typeof processo.duracao === 'number';
        const chegadaValida = !isNaN(processo.chegada) && typeof processo.chegada === 'number';
        return duracaoValida && chegadaValida;
    });

    // Ordena os processos pela hora de chegada
    processosValidos.sort((a, b) => a.chegada - b.chegada);

    let tempoAtual = 0;
    let tempoTotalDeEspera = 0;

    processosValidos.forEach(processo => {
        if (tempoAtual < processo.chegada) {
            tempoAtual = processo.chegada; // Atualiza o tempo atual para a chegada do processo
        }

        // Calcula o tempo de espera
        processo.tempoDeEspera = tempoAtual - processo.chegada;
        tempoTotalDeEspera += processo.tempoDeEspera;

        // Atualiza o tempo atual após a execução do processo
        tempoAtual += processo.duracao; // Avança o tempo pela duração do processo
    });

    const resultados = processosValidos.map(processo => ({
        ...processo,
        duracao: processo.duracao, // Mantém a duração original
    }));

    const tempoMedioDeEspera = tempoTotalDeEspera / (processosValidos.length || 1);

    return {
        processosOrdenados: resultados,
        tempoMedioDeEspera,
    };
}
