import '../css/Cabecera.css'

function Cabecera() {
  // const [count, setCount] = useState(0)

  return (
    <header className="app-header">
      <div className="app-header-in contenedor">
        <h1 className="app-title">Chaos Manager <span className="app-title-in">for</span> Players</h1>
        <img className="app-logo" alt="logo de la aplicacion" src="src/assets/app-logo.png"></img>
      </div>
    </header>
  )
}

export default Cabecera