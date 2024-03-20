/* eslint-disable react/prop-types */
import '../css/FButton.css'

function FButton( { keyID, texts, onClicks, disableds } ) {
  
  return (
    <div className='form-button-group'>
      { texts.map((text, index) => {
          let btnClass
          if (disableds===undefined) btnClass = 'btn form-button'
          else btnClass = (disableds[index]?
                            'btn form-button form-button-disabled':
                            'btn form-button')
          const localKey = keyID + index
          if (disableds===undefined) {
            return (<button key={localKey} className={btnClass} 
              onClick={onClicks[index]}>{text}</button>)
          } else {
            return (<button key={localKey} className={btnClass} 
              onClick={disableds[index]?undefined:onClicks[index]}>{text}</button>)
          }
      })}
    </div>  
  )
}

export default FButton