import React from 'react'
import Form from 'react-jsonschema-form'

export default props => {
  const customizedProps = Object.assign({}, props, {})
  return React.createElement(Form, customizedProps)
}
