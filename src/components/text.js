import './text.css'

const Text = (props) => {
    return (
        <div>
            <p className='text'>{props.label} </p>
        </div>
    )
}


Text.defaultProps = {
    label: 'Esse é o texto padrão'
}

export {Text}