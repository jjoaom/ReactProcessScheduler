export default function Sjf(processos) {
    if (!Array.isArray(processos)) {
        console.error('Esperado um array de processos.');
        return { processosOrdenados: [], tempoMedioDeEspera: NaN };
    }

    // Cria uma cópia dos processos para preservar a duração original
    const processosComDuraçãoOriginal = processos.map(processo => ({
        ...processo,
        duracaoOriginal: processo.duracao,
        tempoDeEspera: 0, // Inicializa o tempo de espera
    }));

    const processosValidos = processosComDuraçãoOriginal.filter((processo) => {
        const duracaoValida = !isNaN(processo.duracao) && typeof processo.duracao === 'number';
        const chegadaValida = !isNaN(processo.chegada) && typeof processo.chegada === 'number';
        if (!duracaoValida || !chegadaValida) {
            console.error('Dados inválidos:', processo);
        }
        return duracaoValida && chegadaValida;
    });

    let tempoAtual = 0;
    let tempoTotalDeEspera = 0;
    const fila = [];

    while (fila.length > 0 || processosValidos.length > 0) {
        // Adiciona processos que chegaram até agora à fila
        for (let i = 0; i < processosValidos.length; i++) {
            if (processosValidos[i].chegada <= tempoAtual) {
                fila.push(processosValidos.splice(i, 1)[0]);
                i--;
            }
        }

        if (fila.length === 0) {
            // Se não há processos na fila, avança o tempo
            tempoAtual++;
            continue;
        }

        // Ordena a fila pela duração
        fila.sort((a, b) => a.duracao - b.duracao);

        const processoAtual = fila[0];

        // Atualiza o tempo de espera para todos os processos na fila
        fila.forEach(processo => {
            if (processo !== processoAtual) {
                processo.tempoDeEspera++;
            }
        });

        // Executa o processo atual por 1 unidade de tempo
        processoAtual.duracao--;

        // Se o processo terminar, remove da fila
        if (processoAtual.duracao === 0) {
            fila.shift();
            tempoTotalDeEspera += processoAtual.tempoDeEspera; // Adiciona o tempo de espera acumulado
        }

        tempoAtual++;
    }

    const resultados = processosComDuraçãoOriginal.map(processo => ({
        ...processo,
        duracao: processo.duracaoOriginal,
        tempoDeEspera: processo.tempoDeEspera, // Mantém o tempo de espera correto
    }));

    const tempoMedioDeEspera = tempoTotalDeEspera / (resultados.length || 1);

    return {
        processosOrdenados: resultados,
        tempoMedioDeEspera: tempoMedioDeEspera,
    };
}
