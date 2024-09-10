import './text.css'

const Button = (props) => {
    return (
      <button className='btn' onClick={() => alertaMensagem(props.label)}>
        {props.label}
      </button>
    );
  }

  const alertaMensagem = (label) => {
    alert(`A label desse botão é ${label}`);
  }

export {Button}