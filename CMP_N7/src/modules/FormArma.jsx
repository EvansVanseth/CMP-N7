/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../css/FormArma.css'
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
  const sRecarg = (oArma?oArma.recarga:'Estandar')
  
  const [nombreArma, setNombreArma] = useState(sNombre)
  const [cargadArma, setCargadArma] = useState(sCargad)
  const [recargArma, setRecargArma] = useState(sRecarg)
  function onNombreChange (newText) { setNombreArma(newText) }
  function onCargadChange (newText) { setCargadArma(parseInt(newText)) }
  function onRecargaChange (Event) { 
    console.log(Event.target.value)
    setRecargArma(Event.target.value) 
  }
  function onOK () {
    if(nombreArma==='' || cargadArma==='') return;
    const newData = {...Data}
    const newArma = {
      nombre: nombreArma,
      cargador: cargadArma,
      balas: (oArma?Math.min(Data.guns[armaIndex].balas,cargadArma):cargadArma),
      recarga: recargArma
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
      <div className='form-line-group'>
        <p className='form-textinput-text'>Tipo de recarga</p>
        <select className='form-select' 
                id='id-tipo-recarga'
                onChange={onRecargaChange}
                value={recargArma}>
          <option value="Completa">Completa</option>
          <option value="Estandar">Estandar</option>
          <option value="Movimiento">Movimiento</option>
          <option value="Rapida">Rapida</option>
        </select>
        </div>
      <FButton texts={['ACEPTAR']} onClicks={[onOK]}/>
      <hr />
      <FSection caption='Eliminar arma' closeable={false} />
      <FText caption='Este botón eliminará el arma de la lista de armas. Esta acción no puede deshacerse' />
      <FButton texts={['ELIMINAR ARMA']} onClicks={[onDelete]}/>
    </Form>
  )
}

export default FormArma