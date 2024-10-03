export default function RoundRobin(processos, quantum) {
    if (!Array.isArray(processos) || processos.length === 0 || quantum <= 0) {
        console.error('Esperado um array de processos não vazio e um quantum válido.', processos, quantum);
        return { processosOrdenados: [], tempoMedioDeEspera: NaN };
    }

    // Mapeia os processos, armazenando a duração original e inicializando o tempo de espera
    const processosComDuracaoOriginal = processos.map(processo => ({
        ...processo,
        duracaoOriginal: processo.duracao,
        tempoDeEspera: 0, // Inicializa o tempo de espera
        tempoRestante: processo.duracao, // Armazena a duração restante do processo
        tempoFinalizacao: 0, // Armazena o tempo em que o processo é finalizado
    }));

    // Filtra processos válidos
    const processosValidos = processosComDuracaoOriginal.filter(processo => {
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
    let indice = 0;

    // Loop principal do algoritmo
    while (indice < processosValidos.length || fila.length > 0) {
        // Adiciona processos que chegaram até agora à fila
        while (indice < processosValidos.length && processosValidos[indice].chegada <= tempoAtual) {
            fila.push(processosValidos[indice]);
            indice++;
        }

        if (fila.length === 0) {
            // Se não há processos na fila, avança o tempo
            tempoAtual++;
            continue;
        }

        const processoAtual = fila.shift(); // Remove o processo da frente da fila
        const tempoExecucao = Math.min(processoAtual.tempoRestante, quantum); // Executa pelo tempo do quantum ou até a duração restante

        // Atualiza o tempo de execução do processo e o tempo total
        tempoAtual += tempoExecucao;
        processoAtual.tempoRestante -= tempoExecucao;

        // Atualiza o tempo de espera para os processos restantes na fila
        fila.forEach(processo => {
            processo.tempoDeEspera += tempoExecucao;
        });

        // Se o processo não terminou, volta para a fila
        if (processoAtual.tempoRestante > 0) {
            fila.push(processoAtual);
        } else {
            // Se o processo terminou, define o tempo de finalização
            processoAtual.tempoFinalizacao = tempoAtual;
            // Calcula o tempo total de espera: (tempo de finalização - chegada - duração original)
            processoAtual.tempoDeEspera = processoAtual.tempoFinalizacao - processoAtual.chegada - processoAtual.duracaoOriginal;
            tempoTotalDeEspera += processoAtual.tempoDeEspera;
        }
    }

    // Mapeia os resultados para retornar os dados corretos
    const resultados = processosComDuracaoOriginal.map(processo => ({
        ...processo,
        duracao: processo.duracaoOriginal, // Retorna a duração original
        tempoDeEspera: processo.tempoDeEspera, // Mantém o tempo de espera calculado corretamente
    }));

    // Calcula o tempo médio de espera
    const tempoMedioDeEspera = tempoTotalDeEspera / (resultados.length || 1);

    return {
        processosOrdenados: resultados,
        tempoMedioDeEspera: tempoMedioDeEspera,
    };
}
