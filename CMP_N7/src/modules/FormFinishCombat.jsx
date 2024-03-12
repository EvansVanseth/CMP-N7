/* eslint-disable react/prop-types */
import Form from './Form.jsx'
import FTitle from './FTitle.jsx'
import FText from './FText.jsx'
import FButton from './FButton.jsx'

function FormEditPlayer({ onClose, onOK }) {
  return (
    <Form>
      <FTitle caption='Terminar combate' closeForm={onClose} closeable={false}/>
      <FText caption='¿Estas seguro/a que quieres terminar el combate?' />
      <FButton keyID='form-finish-combat-' texts={['NO','SI']} onClicks={[onClose,onOK]} />
    </Form>
  )
}

export default FormEditPlayer