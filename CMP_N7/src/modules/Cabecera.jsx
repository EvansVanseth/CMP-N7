import '../css/Cabecera.css'
import appLogo from '../assets/app-logo.png'

function Cabecera() {
  // const [count, setCount] = useState(0)

  return (
    <header className="app-header">
      <div className="app-header-in contenedor">
        <h1 className="app-title">Chaos Manager <span className="app-title-in">for</span> Players</h1>
        <img className="app-logo" alt="logo de la aplicacion" src={appLogo}></img>
      </div>
    </header>
  )
}

export default Cabecera