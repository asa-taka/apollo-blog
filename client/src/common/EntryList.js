import React from 'react'
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'

const EntryList = props => {
  const { fields, entries } = props
  return (
    <Table>
      <thead>
        <tr>
          {fields.map(f => <th key={f.name}>{f.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {entries.map((e, i) => (
          <tr key={i}>
            {fields.map(f => (
              <td key={f.name}>
                {f.component ? <f.component entry={e}/> : f.value(e)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

EntryList.propTypes = {

  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.func,
      component: PropTypes.any
    })
  ).isRequired,

  entries: PropTypes.arrayOf(
    PropTypes.any
  ).isRequired,

  entryKey: PropTypes.func.isRequired,
}

EntryList.defaultProps = {
  fields: [],
  entries: [],
}

export default EntryList
