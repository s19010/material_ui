import React from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

const App = props => {
  const data = ['a', 'b', 'c']
  return (
    <div>
      <Autocomplete
        id='combo-box-demo'
        options={data}
        getOptionLabel={option => option.title}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField
            {...params}
            label='Combo box'
            variant='outlined'
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default App
