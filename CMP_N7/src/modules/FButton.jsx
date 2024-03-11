/* eslint-disable react/prop-types */
import '../css/FButton.css'

function FButton( { text, onClick } ) {

  return (
    <div className='form-button-group'>
      <button className='btn form-button' onClick={onClick}>{text}</button>
    </div>  
  )
}

export default FButton