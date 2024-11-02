import React from "react";
import { Container, Badge } from "react-bootstrap";

// Função FIFO
const fifo = (arrayDeNumeros, quadros) => {
  console.log(
    "Executando FIFO com quadros:",
    quadros,
    "e array:",
    arrayDeNumeros
  );
  const memoria = [];
  let pageFaults = 0;
  let hits = 0;

  arrayDeNumeros.forEach((numero) => {
    if (!memoria.includes(numero)) {
      if (memoria.length < quadros) {
        memoria.push(numero);
      } else {
        memoria.shift(); // Remove a primeira página para fazer espaço
        memoria.push(numero);
      }
      pageFaults++;
    } else {
      hits++;
    }
  });

  return { pageFaults, hits };
};

// Função LRU
const lru = (arrayDeNumeros, quadros) => {
  console.log("Executando LRU com quadros:", quadros, "e array:", arrayDeNumeros);
  const memoria = [];
  const ultimaUtilizacao = new Map(); // Mapeia a última vez que uma página foi usada
  let pageFaults = 0;
  let hits = 0;

  arrayDeNumeros.forEach((numero, index) => {
    if (!memoria.includes(numero)) {
      if (memoria.length < quadros) {
        memoria.push(numero);
      } else {
        // Encontra a página menos recentemente usada
        let lruPage = memoria.reduce((leastRecent, page) => {
          return (ultimaUtilizacao.get(page) < ultimaUtilizacao.get(leastRecent)) ? page : leastRecent;
        });
        // Substitui a página LRU pela nova página
        const indexToRemove = memoria.indexOf(lruPage);
        memoria.splice(indexToRemove, 1);
        memoria.push(numero);
      }
      pageFaults++;
    } else {
      hits++;
    }
    // Atualiza o índice da última utilização da página
    ultimaUtilizacao.set(numero, index);
  });

  return { pageFaults, hits };
};


// Função Ótimo
const opt = (arrayDeNumeros, quadros) => {
  console.log(
    "Executando Ótimo com quadros:",
    quadros,
    "e array:",
    arrayDeNumeros
  );
  const memoria = [];
  let pageFaults = 0;
  let hits = 0;

  arrayDeNumeros.forEach((numero, index) => {
    if (!memoria.includes(numero)) {
      if (memoria.length < quadros) {
        memoria.push(numero);
      } else {
        const futureUses = memoria.map((m) => {
          const futureIndex = arrayDeNumeros.indexOf(m, index + 1);
          return futureIndex === -1 ? Infinity : futureIndex;
        });
        const indexToReplace = futureUses.indexOf(Math.max(...futureUses));
        memoria[indexToReplace] = numero;
      }
      pageFaults++;
    } else {
      hits++;
    }
  });

  return { pageFaults, hits };
};

function Algoritmos({ algoritmo, quadros, arrayDeNumeros }) {
  console.log("Renderizando Algoritmos com:", {
    algoritmo,
    quadros,
    arrayDeNumeros,
  });
  let resultadoFinal = {};

  if (!algoritmo || quadros <= 0 || arrayDeNumeros.length === 0) {
    console.warn("Algoritmo não iniciado devido a parâmetros inválidos");
    return <p>Parâmetros inválidos. Verifique as entradas.</p>;
  }

  if (algoritmo === "fifo") {
    resultadoFinal = fifo(arrayDeNumeros, quadros);
  } else if (algoritmo === "lru") {
    resultadoFinal = lru(arrayDeNumeros, quadros);
  } else if (algoritmo === "opt") {
    resultadoFinal = opt(arrayDeNumeros, quadros);
  } else {
    console.warn("Algoritmo selecionado é inválido");
    return <p>Algoritmo inválido.</p>;
  }

  const { pageFaults, hits } = resultadoFinal;
  const hitRate = ((hits / arrayDeNumeros.length) * 100).toFixed(2);

  return (
    <Container className="p-3">
      <div>
        <h2>
          Número de Acertos: <Badge bg="light" className="badge">{hits}</Badge>
        </h2>
        <h2>
          Falta de página: <Badge bg="light" className="badge">{pageFaults}</Badge>
        </h2>
        <h2>
          Taxa de acerto: <Badge bg="light" className="badge">{hitRate}%</Badge>
        </h2>
      </div>
    </Container>
  );
}

export default Algoritmos;
