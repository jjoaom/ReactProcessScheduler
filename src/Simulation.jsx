import Alert from 'react-bootstrap/Alert';

function Simulation() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 h-100'>
      {[
        'success',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Simulação será exibida aqui.
        </Alert>
      ))}
    </div>
  );
}

export default Simulation;