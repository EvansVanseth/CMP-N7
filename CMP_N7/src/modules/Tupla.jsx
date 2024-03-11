import '../css/Tupla.css'

function Tupla( { titulo, valor, total, bp} ) {
  // const [count, setCount] = useState(0)

  return (
    <div className="tupla-mark">
      <p className='tupla-titulo'>{titulo}</p>
      <button className='tupla-boton'>-</button>
      <div className='tupla-valores'>
        <div className='tupla-valor'>{valor}</div>
        <div className='tupla-total'>{total}</div>
      </div>
      <button className='tupla-boton'>+</button>
      <p className='tupla-text'>BP</p>
      <button className='tupla-boton'>-</button>
      <div className='tupla-valores'>
        <div className='tupla-valor'>{bp}</div>
      </div>
      <button className='tupla-boton'>+</button>
    </div>
  )
}

export default Tupla