import React, {component} from 'react'
import PropTypes from 'prop-types'


const RemoveItem = (props) => {
  const handledeleteLastItem = (event) =>
  {props.onremoveItem()}
  
  
  return (
  <button onClick={handledeleteLastItem} disabled={props.buttonDisabled}>
          Delete Last Item
  </button>
  )
}

RemoveItem.propType = {
  onClick: PropTypes.func.isRequired,
  bottonDisabled: PropTypes.func.isRequired
}

export default RemoveItem