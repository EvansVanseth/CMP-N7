import PropTypes from 'prop-types';
import { useState } from 'react';

import FButton from "./FButton"
import FTextInput from "./FTextInput"
import FTitle from "./FTitle"
import Form from "./Form"
import FText from './FText';
import FSection from './FSection';
import FormQuestion from './FormQuestion';

function FormPoder ({ onClose, oPoder, poderIndex, Data, UpdateData }) {
  const sTitulo = (oPoder?'Editar poder':'Nuevo poder')
  const sNombre = (oPoder?oPoder.nombre:'')
  const sRecarga = (oPoder?oPoder.recarga:'')
  
  const [showFQ, setShowFQ] = useState(false)
  const [nombrePoder, setNombrePoder] = useState(sNombre)
  const [recargaPoder, setRecargaPoder] = useState(sRecarga)
  function onNombreChange (newText) { setNombrePoder(newText) }
  function onRecargaChange (newText) { setRecargaPoder(parseInt(newText)) }

  function onOK () {
    if(nombrePoder==='' || recargaPoder==='') return;
    const newData = {...Data}
    const newPower = {
      nombre: nombrePoder,
      recarga: recargaPoder
    }
    if(poderIndex!==undefined) {
      newData.powers[poderIndex] = newPower
    } else newData.powers.push(newPower)
    UpdateData(newData)
    onClose()
  }
  function onDelete () {
    if (poderIndex===undefined) return;
    const newData = {...Data}
    newData.powers.splice(poderIndex, 1)
    UpdateData(newData)
    onClose()
  }  
  function onForceRecharge () {setShowFQ(true)}
  function onCloseFQ () {setShowFQ(false)}
  function onOKFQ () {
    const newData = {...Data}
    newData.rcPIndex = -1
    newData.rcPTurns = 0
    UpdateData(newData)
    onClose()
  }  

  return (
    <Form>
      <FTitle caption={sTitulo} closeForm={onClose}/>
      <FTextInput label='Nombre' 
                  text={nombrePoder} 
                  changeText={onNombreChange}/>
      <FTextInput label='Turnos de recarga'
                  text={recargaPoder}
                  changeText={onRecargaChange} bOnlyNumbers={true}/>
      <FButton texts={['ACEPTAR']} onClicks={[onOK]}/>
      <hr />
      {(Data.rcPIndex === poderIndex)?
        <>
        <FSection caption='Forzar detención' closeable={false} />
        <FText caption='Este botón forzará la recarga del poder' />
        <FButton texts={['FORZAR']} onClicks={[onForceRecharge]}/>
        </>
      :undefined}
      <FSection caption='Eliminar poder' closeable={false} />
      <FText caption='Este botón eliminará el poder de la lista de poderes. Esta acción no puede deshacerse' />
      <FButton texts={['ELIMINAR PODER']} onClicks={[onDelete]}/>
      {showFQ?<FormQuestion title='Forzar recarga'
            question='¿Estas seguro/a que quieres forzar la recarga?'
            onClose={onCloseFQ} onOK={onOKFQ}/>:undefined}
    </Form>
  )
}

FormPoder.propTypes = {
  onClose: PropTypes.func.isRequired,
  oPoder: PropTypes.object,
  poderIndex: PropTypes.number,
  Data: PropTypes.object,
  UpdateData: PropTypes.func
}

export default FormPoder