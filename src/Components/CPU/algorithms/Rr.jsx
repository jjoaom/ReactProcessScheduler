export default function RoundRobin(processos, quantum) {
    // Validação dos parâmetros de entrada
    if (!Array.isArray(processos) || processos.length === 0 || quantum <= 0) {
        console.error('Esperado um array de processos não vazio e um quantum válido.');
        return { processosOrdenados: [], tempoMedioDeEspera: NaN };
    }

    // Mapeia os processos, armazenando a duração original e inicializando o tempo de espera
    const processosComDuracaoOriginal = processos.map(processo => ({
        ...processo,
        duracaoOriginal: processo.duracao,
        tempoDeEspera: 0,
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
        const tempoExecucao = Math.min(processoAtual.duracao, quantum); // Executa pelo tempo do quantum

        // Atualiza a duração do processo e o tempo de espera dos outros
        tempoAtual += tempoExecucao;
        processoAtual.duracao -= tempoExecucao;

        // Atualiza o tempo de espera para os processos restantes na fila
        fila.forEach(processo => {
            processo.tempoDeEspera += tempoExecucao;
        });

        // Se o processo não terminou, volta para a fila
        if (processoAtual.duracao > 0) {
            fila.push(processoAtual);
        } else {
            // Adiciona o tempo de espera do processo finalizado
            tempoTotalDeEspera += processoAtual.tempoDeEspera;
        }
    }

    // Mapeia os resultados para retornar os dados corretos
    const resultados = processosComDuracaoOriginal.map(processo => ({
        ...processo,
        duracao: processo.duracaoOriginal, // Retorna a duração original
        tempoDeEspera: processo.tempoDeEspera, // Mantém o tempo de espera correto
    }));

    const tempoMedioDeEspera = tempoTotalDeEspera / (resultados.length || 1);

    return {
        processosOrdenados: resultados,
        tempoMedioDeEspera: tempoMedioDeEspera,
    };
}
