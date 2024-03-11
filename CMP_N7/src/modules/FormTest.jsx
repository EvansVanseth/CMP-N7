/* eslint-disable react/prop-types */
import Form from './Form.jsx'
import FTitle from './FTitle.jsx'
import FSection from './FSection.jsx'
import FText from './FText.jsx'
import FTextInput from './FTextInput.jsx'
import FButton from './FButton.jsx'
import { useState } from 'react'

function FormTest({ onClose, Data, UpdateData }) {
  const [nombreJugador, setNombreJugador] = useState(Data.playerName)
  function onNameChange (newText) { setNombreJugador(newText) }
  function onOK () {
    const newData = {...Data}
    newData.playerName = nombreJugador
    UpdateData(newData)
  }

  return (
    <Form>
      <FTitle caption='Hola!!' closeForm={onClose}/>
      <FSection caption='Hola!!' />
      <FText caption='Provando el texto del formulario' />
      <FTextInput label='nombre' text={nombreJugador} changeText={onNameChange} />
      <FButton text='APLICAR' onClick={onOK} />
    </Form>
  )
}

export default FormTest