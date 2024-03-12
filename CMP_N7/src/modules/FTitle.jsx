/* eslint-disable react/prop-types */
import '../css/FTitle.css'

function FTitle( { caption, closeable = true, closeForm } ) {
  // const [count, setCount] = useState(0)

  return (
    <div className='form-div-titulo'>
      <h3 className='form-titulo'>{caption}</h3>
      {closeable?<div className='form-cerrar' onClick={closeForm}/>:undefined}
    </div>
  )
}

export default FTitle