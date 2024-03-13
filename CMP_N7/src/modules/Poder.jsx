/* eslint-disable react/prop-types */
import '../css/Poder.css'

function Poder ({ oPoder, poderIndex, Data, bDisabled, bRecharging, onEdit, onActivate }) {
  const sDisabled = (bDisabled && !bRecharging?'poder-mark poder-disabled':'poder-mark')
  const sRecharging = (bRecharging?'poder-btn-activar poder-disabled':'poder-btn-activar')
  const sClasesNombre = (bRecharging?'poder-nombre poder-activo-nombre':'poder-nombre')
  const sClasesRecarga = (bRecharging?'poder-recarga poder-activo-recarga':'poder-recarga')
  const iRechTurns = (Data.rcPIndex===poderIndex?Data.rcPTurns:oPoder.recarga)
  function onClickEdit() {onEdit(oPoder, poderIndex)}
  function onClickActivate() {
    if (bDisabled) return
    onActivate(oPoder, poderIndex)
  }
  
  return (
    <div className={sDisabled}>
      <p className={sClasesNombre} onClick={onClickEdit}>{oPoder.nombre}</p>
      <p className={sClasesRecarga}>{iRechTurns}</p>
      <button className={sRecharging} onClick={onClickActivate}>Lanzar</button>
    </div>
  )
}

export default Poder