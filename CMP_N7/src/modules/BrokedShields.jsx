/* eslint-disable react/prop-types */
import '../css/BrokedShields.css'

function BrokedShields ({ icon, Data, UpdateData}) {
  const colorActivacion = (Data.shldBroke===0?'tupla-broked-shld activable':'tupla-broked-shld')
  const btnEnabled = (Data.inTurn && Data.shldBroke===0?'tupla-boton':'tupla-boton btn-disabled')
  function onActive (){
    if (Data.shldBroke > 0 || !Data.inTurn) return
    const newData = {...Data}
    newData.shldValue = Data.shldTotal
    UpdateData(newData)
  }
  
  return (
    <div className="tupla-mark">
      <img className="tupla-icon" alt={icon.alt} src={icon.src}/>
      <div className='tupla-blindaje'>
        <div className={colorActivacion}>
          <div className='tupla-total'>{Data.shldBroke}</div>
        </div>
      </div>
      <button className={btnEnabled} onClick={onActive}>ACTIVAR</button>
      <div className='tupla-info'>
        <div className='tupla-par tupla-hide'>
            <p className='tupla-text'>RE</p>
            <div className='tupla-data tupla-bp'>-</div>
        </div>
      </div>
    </div>
  )
}

export default BrokedShields