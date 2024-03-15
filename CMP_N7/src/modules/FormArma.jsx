/* eslint-disable react/prop-types */
import { useState } from 'react';

import FButton from "./FButton"
import FTextInput from "./FTextInput"
import FTitle from "./FTitle"
import Form from "./Form"
import FText from './FText';
import FSection from './FSection';

function FormArma ({ onClose, oArma, armaIndex, Data, UpdateData }) {
  const sTitulo = (oArma?'Editar arma':'Nueva arma')
  const sNombre = (oArma?oArma.nombre:'')
  const sCargad = (oArma?oArma.cargador:0)
  
  const [nombreArma, setNombreArma] = useState(sNombre)
  const [cargadArma, setCargadArma] = useState(sCargad)
  function onNombreChange (newText) { setNombreArma(newText) }
  function onCargadChange (newText) { setCargadArma(parseInt(newText)) }

  function onOK () {
    if(nombreArma==='' || cargadArma==='') return;
    const newData = {...Data}
    const newArma = {
      nombre: nombreArma,
      cargador: cargadArma,
      balas: (oArma?Math.min(Data.guns[armaIndex].balas,cargadArma):cargadArma)
    }
    if(armaIndex!==undefined) {
      newData.guns[armaIndex] = newArma
    } else newData.guns.push(newArma)
    UpdateData(newData)
    onClose()
  }
  function onDelete () {
    if (armaIndex===undefined) return;
    const newData = {...Data}
    newData.guns.splice(armaIndex, 1)
    UpdateData(newData)
    onClose()
  }  

  return (
    <Form>
      <FTitle caption={sTitulo} closeForm={onClose}/>
      <FTextInput label='Nombre' 
                  text={nombreArma} 
                  changeText={onNombreChange}/>
      <FTextInput label='Balar por cargador'
                  text={cargadArma}
                  changeText={onCargadChange} bOnlyNumbers={true}/>
      <FButton texts={['ACEPTAR']} onClicks={[onOK]}/>
      <hr />
      <FSection caption='Eliminar arma' closeable={false} />
      <FText caption='Este botón eliminará el arma de la lista de armas. Esta acción no puede deshacerse' />
      <FButton texts={['ELIMINAR ARMA']} onClicks={[onDelete]}/>
    </Form>
  )
}

export default FormArma