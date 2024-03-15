/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../css/Arma.css'
import FormQuestion from './FormQuestion'

function Arma ({ oArma, idxArma, onEdit, Data, UpdateData }) {
  /** 
   * {
   *   nombre: Mattock
   *   cargador: 9
   *   balas: 5
   * }
  */
  const classNombre = 'arma-name ' + (oArma.balas>0?'':'arma-disabled')
  const classBalas  = 'arma-balas ' + (oArma.balas>0?'':'arma-disabled')
  const classBtn    = 'btn arma-btn ' + (oArma.balas>0?'':'arma-disabled')
  const classRec    = 'btn arma-btn ' + 
          (Data.numCarga===0 && oArma.balas===0?'arma-disabled':'')
  
  const [showFQ, setShowFQ] = useState(false)

  function onEditArma (){ onEdit (oArma, idxArma) }
  function onUp (){
    const newData = {...Data}
    newData.guns[idxArma].balas = 
      Math.min(Data.guns[idxArma].balas + 1, 
               Data.guns[idxArma].cargador)
    UpdateData(newData)
  }
  function onDn (){
    const newData = {...Data}
    newData.guns[idxArma].balas = 
      Math.max(Data.guns[idxArma].balas - 1, 0)
    UpdateData(newData)
  }
  function onRecharge (){ setShowFQ(true) }
  function onCloseFQ (){ setShowFQ(false) }
  function onOKFQ (){ 
    const newData = {...Data}
    if (Data.numCarga>0)
      newData.guns[idxArma].balas = Data.guns[idxArma].cargador
    newData.numCarga = Math.max(Data.numCarga - 1, 0)
    UpdateData(newData)
    setShowFQ(false) 
  }
  return (
    <>
      <div className={'arma-mark'}>
        <p className={classNombre} onClick={onEditArma}>{Data.guns[idxArma].nombre}</p>
        <div className={classBalas}>{Data.guns[idxArma].balas}</div>
        <button className={classBtn} onClick={oArma.balas>0?onUp:undefined}>+</button>
        <button className={classRec} 
                onClick={oArma.balas>0?onDn:
                         Data.numCarga>0?onRecharge:undefined}>
                  {oArma.balas>0?'Disparar':'RECARGAR'}</button>
      {showFQ?<FormQuestion title='Recargar'
              question='¿Estas seguro/a que quieres recargar el arma?'
              onClose={onCloseFQ} onOK={onOKFQ}/>:undefined}
      </div>
      <div className='arma-recarga'>Recarga: <span>{oArma.recarga}</span></div>
    </>
  )
}

export default Arma