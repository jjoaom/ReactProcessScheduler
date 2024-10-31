import { useState, useEffect } from 'react';

// Carrega os processos e o quantum do localStorage
const loadProcesses = () => {
  const storedProcesses = localStorage.getItem('processos');
  const storedQuantum = localStorage.getItem('quantum');
  
  return {
    processos: storedProcesses ? JSON.parse(storedProcesses) : [],
    quantum: storedQuantum ? JSON.parse(storedQuantum) : null, 
  };
};

// Hook personalizado para gerenciar os processos e o quantum
const useLoadProcesses = () => {
  const [processos, setProcessos] = useState([]);
  const [quantum, setQuantum] = useState(null);

  useEffect(() => {
    const { processos: processosCarregados, quantum: quantumCarregado } = loadProcesses();
    setProcessos(processosCarregados);
    setQuantum(quantumCarregado); 
  }, []);

  return { processos, quantum }; 
};

export default useLoadProcesses;
