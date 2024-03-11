/* eslint-disable react/prop-types */
import '../css/Form.css'

function Form( { children } ) {
  // const [count, setCount] = useState(0)

  return (
    <div className='form-exterior'>
      <div className='form-dialogo'>
        {children}
      </div>
    </div>
  )
}

export default Form