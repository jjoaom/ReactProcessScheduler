import { useState, useEffect } from 'react';

// carrega os processos do localStorage
const loadProcesses = () => {
  const storedProcesses = localStorage.getItem('processos');
  return storedProcesses ? JSON.parse(storedProcesses) : [];
};

// Hook personalizado para gerenciar os processos
const useLoadProcesses = () => {
  const [processos, setProcessos] = useState([]);

  useEffect(() => {
    const processosCarregados = loadProcesses();
    setProcessos(processosCarregados);
  }, []);

  return processos;
};

export default useLoadProcesses;