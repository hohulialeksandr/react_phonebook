import React from 'react'

const Filter = ({filter, changeFilter}) => {
  return (
    <div>
        <input type='text' value={filter} onChange={changeFilter} />
    </div>
  )
}

export default Filter