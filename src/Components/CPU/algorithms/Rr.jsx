export default function RoundRobin(processos, quantum) {
    if (!Array.isArray(processos) || quantum <= 0) {
        console.error('Esperado um array de processos e um quantum válido.');
        return { processosOrdenados: [], tempoMedioDeEspera: NaN };
    }

    const processosComDuraçãoOriginal = processos.map(processo => ({
        ...processo,
        duracaoOriginal: processo.duracao,
        tempoDeEspera: 0, // Inicializa o tempo de espera
    }));

    const processosValidos = processosComDuraçãoOriginal.filter(processo => {
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

    // Adiciona todos os processos à fila inicialmente
    let indice = 0;

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
