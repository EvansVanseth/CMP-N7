/* eslint-disable react/prop-types */
import '../css/Tupla.css'

function Tupla( { icon, valor, total, bp, re, btnUp, btnDn, blifeShld = false} ) {
  // const [count, setCount] = useState(0)
  const lifeShldClass = (blifeShld?'tupla-data tupla-re':'tupla-data tupla-rl')
  const blindajeOn = (bp>0?'tupla-blindaje blindaje-activo':'tupla-blindaje')
  let   blindajeOk = (bp>0?'tupla-par':'tupla-par tupla-none')
  const shieldsOk =  (re>0?'tupla-par':'tupla-par tupla-none')
  if (bp===0 && re===0) { 
    blindajeOk = 'tupla-par tupla-hide' 
  }
  const dPerc = valor / total
  let sColoration
  if (blifeShld) {
    sColoration = 'shld-90'
    if (dPerc < 0.70) sColoration = 'shld-70'
    if (dPerc < 0.45) sColoration = 'shld-45'
    if (dPerc < 0.25) sColoration = 'shld-25'
    if (dPerc < 0.05) sColoration = 'shld-5'
    if (dPerc <= 0  ) sColoration = 'shld-0'
  } else {
    sColoration = 'life-100'
    if (dPerc < 1.00) sColoration = 'life-90'
    if (dPerc < 0.70) sColoration = 'life-70'
    if (dPerc < 0.45) sColoration = 'life-45'
    if (dPerc < 0.25) sColoration = 'life-25'
    if (dPerc < 0.05) sColoration = 'life-5'
    if (dPerc <= 0  ) sColoration = 'life-0'
  }
  const classValues = 'tupla-valores ' + sColoration

  return (
    <div className="tupla-mark">
      <img className="tupla-icon" alt={icon.alt} src={icon.src}/>
      <div className={blindajeOn}>
        <div className={classValues}>
          <div className='tupla-valor'>{valor}</div>
          <div className='tupla-total'>{total}</div>
        </div>
      </div>
      <button className='btn' onClick={btnDn}>-</button>
      <button className='btn' onClick={btnUp}>+</button>
      <div className='tupla-info'>
        <div className={shieldsOk}>
          <p className='tupla-text'>RE</p>
          <div className={lifeShldClass}>{re}</div>
        </div>
        <div className={blindajeOk}>
          <p className='tupla-text'>BP</p>
          <div className='tupla-data tupla-bp'>{bp}</div>
        </div>
      </div>
    </div>
  )
}

export default Tupla