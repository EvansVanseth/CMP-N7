/* eslint-disable react/prop-types */
import '../css/FSection.css'

function FSection( { caption, closeable = false, closeForm } ) {
  // const [count, setCount] = useState(0)

  return (
    <div className='form-div-titulo'>
      <p className='form-seccion'>{caption}</p>
      {closeable?<div className='form-cerrar' onClick={closeForm}/>:undefined}
    </div>
  )
}

export default FSection