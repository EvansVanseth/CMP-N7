import PropTypes from 'prop-types';
import { useState } from 'react';

import FButton from "./FButton"
import FTextInput from "./FTextInput"
import FTitle from "./FTitle"
import Form from "./Form"
import FText from './FText';
import FSection from './FSection';

function FormPoder ({ onClose, oPoder, poderIndex, Data, UpdateData }) {
  const sTitulo = (oPoder?'Editar poder':'Nuevo poder')
  const sNombre = (oPoder?oPoder.nombre:'')
  const sRecarga = (oPoder?oPoder.recarga:'')
  
  const [nombrePoder, setNombrePoder] = useState(sNombre)
  const [recargaPoder, setRecargaPoder] = useState(sRecarga)
  function onNombreChange (newText) { setNombrePoder(newText) }
  function onRecargaChange (newText) { setRecargaPoder(newText) }

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
      <FSection caption='Eliminar poder' closeable={false} />
      <FText caption='Este botón eliminará el poder de la lista de poderes. Esta acción no puede deshacerse' />
      <FButton texts={['ELIMINAR PODER']} onClicks={[onDelete]}/>
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