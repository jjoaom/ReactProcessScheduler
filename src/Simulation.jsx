import Alert from 'react-bootstrap/Alert';

function Simulation() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 h-100'>
      {[
        'success',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </div>
  );
}

export default Simulation;