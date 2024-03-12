/* eslint-disable react/prop-types */
import '../css/FTextInput.css'

function FTextInput( { label, text, changeText, bOnlyNumbers = false } ) {
  function onChangeInput (event) {
    changeText(event.target.value)
  }
  const sOnlyNumbers = (bOnlyNumbers?'number':'text')

  return (
    <div className='form-line-group'>
      <p className='form-textinput-text'>{label}</p>
      <input className='form-textinput-input' 
             onChange={onChangeInput}
             value={text}
             type={sOnlyNumbers} ></input>
    </div>  
  )
}

export default FTextInput