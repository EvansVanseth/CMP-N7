/* eslint-disable react/prop-types */
import Form from './Form.jsx'
import FTitle from './FTitle.jsx'
import FSection from './FSection.jsx'
import FText from './FText.jsx'
import FTextInput from './FTextInput.jsx'
import FButton from './FButton.jsx'
import { useState } from 'react'

function FormEditPlayer({ onClose, Data, UpdateData }) {
  const [nombreJugador, setNombreJugador] = useState(Data.playerName)
  const [lT, setLT] = useState(Data.lifeTotal)
  const [lR, setLR] = useState(Data.lifeRE)
  const [lB, setLB] = useState(Data.lifeBP)
  const [sT, setST] = useState(Data.shldTotal)
  const [sR, setSR] = useState(Data.shldRE)
  const [sB, setSB] = useState(Data.shldBP)
  function onNameChange (newText) { setNombreJugador(newText) }
  function onCLT (newText) { setLT(newText) }
  function onCLR (newText) { setLR(newText) }
  function onCLB (newText) { setLB(newText) }
  function onCST (newText) { setST(newText) }
  function onCSR (newText) { setSR(newText) }
  function onCSB (newText) { setSB(newText) }
  function onOK () {
    const newData = {...Data}
    newData.playerName = nombreJugador
    newData.lifeTotal = lT
    newData.lifeRE = lR
    newData.lifeBP = lB
    newData.shldTotal = sT
    newData.shldRE = sR
    newData.shldBP = sB
    UpdateData(newData)
    onClose()
  }

  return (
    <Form>
      <FTitle caption='Combatiente' closeForm={onClose}/>
      <FTextInput label='Nombre' text={nombreJugador} changeText={onNameChange} />
      <FSection caption='Escudos' />
      <FTextInput label='Total (SH)' text={sT} changeText={onCST} bOnlyNumbers={true}/>
      <FTextInput label='Regeneración (RE)' text={sR} changeText={onCSR} bOnlyNumbers={true}/>
      <FTextInput label='Blindaje (BP)' text={sB} changeText={onCSB} bOnlyNumbers={true}/>
      <FSection caption='Salud' />
      <FTextInput label='Total (PG)' text={lT} changeText={onCLT} bOnlyNumbers={true}/>
      <FTextInput label='Regeneración (RE)' text={lR} changeText={onCLR} bOnlyNumbers={true}/>
      <FTextInput label='Blindaje (BP))' text={lB} changeText={onCLB} bOnlyNumbers={true}/>
      <FButton texts={['ACEPTAR']} onClicks={[onOK]} />
    </Form>
  )
}

export default FormEditPlayer