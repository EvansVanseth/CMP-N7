/* eslint-disable react/prop-types */
import '../css/Cargadores.css'

function Cargadores ({ Data, UpdateData }) {
  function onUp () {
    const newData = {...Data}
    newData.numCarga = Data.numCarga + 1
    UpdateData(newData)
  }
  function onDn () {
    const newData = {...Data}
    newData.numCarga = Math.max(Data.numCarga - 1, 0)
    UpdateData(newData)
  }
  
  return (
    <div className='cargadores-mark'>
      <p>CARGADORES</p>
      <div className='cargadores-cantidad'>{Data.numCarga}</div>
      <button className='btn' onClick={onDn}>-</button>
      <button className='btn' onClick={onUp}>+</button>
    </div>
  )
}

export default Cargadores;