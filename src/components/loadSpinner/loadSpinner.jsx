import "./loadSpinner.css"

const LoadSpinner = (prop) => {

    return ( 
        <div className='load_blq'> <img src={ '/img/gifs/spinner.gif'} className='spinner_style' alt="Loading"/>
            <p>{prop.texto}</p>
        </div>
        )
    }

export default LoadSpinner
