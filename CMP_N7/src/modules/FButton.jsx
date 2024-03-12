/* eslint-disable react/prop-types */
import '../css/FButton.css'

function FButton( { keyID, texts, onClicks } ) {

  return (
    <div className='form-button-group'>
      { texts.map((text, index) => {
          const localKey = keyID + index
          return (<button key={localKey} className='btn form-button' onClick={onClicks[index]}>{text}</button>)
      })}
    </div>  
  )
}

export default FButton