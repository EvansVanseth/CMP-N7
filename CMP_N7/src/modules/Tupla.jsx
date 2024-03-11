import '../css/Tupla.css'

function Tupla( { icon, valor, total, bp} ) {
  // const [count, setCount] = useState(0)

  return (
    <div className="tupla-mark">
      <img className="tupla-icon" alt={icon.alt} src={icon.src}/>
      <div className='tupla-valores'>
        <div className='tupla-valor'>{valor}</div>
        <div className='tupla-total'>{total}</div>
      </div>
      <button className='tupla-boton'>-</button>
      <button className='tupla-boton'>+</button>
      <p className='tupla-text'>BP</p>
      <div className='tupla-valores'>
        <div className='tupla-valor'>{bp}</div>
      </div>
    </div>
  )
}

export default Tupla