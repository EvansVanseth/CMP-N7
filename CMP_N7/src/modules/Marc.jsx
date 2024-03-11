/* eslint-disable react/prop-types */
import '../css/Marc.css'

function Marc({children, Title, Logo, Boton, Jugador}) {

  return (
    <div className="app-mark">
      <div className="mark-header">
        <div className="mark-group">
          <h3 className="mark-title">{Title}</h3>
          {Logo?<img className="mark-icon" alt={Logo.alt} src={Logo.src}/>:undefined}
          {Boton?<button className="btn mark-btn" onClick={Boton.action}>{Boton.text}</button>:undefined}
          {Jugador?<h3 className="mark-player" onClick={Jugador.editar}>{Jugador.nombre}</h3>:undefined}
        </div>
      </div>
      {children}
    </div>
  )
}

export default Marc