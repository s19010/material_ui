import React from 'react'
import { TextField, Card } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

const App = props => {
  const data = [
    { name: 'tamashiro', age: 19 },
    { name: 'namihira', age: 19 },
    { name: 'kuniyoshi', age: 19 }
  ]
  return (
    <Card>
      <Autocomplete
        id='combo-box-demo'
        options={data}
        getOptionLabel={option => option.name}
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
    </Card>
  )
}

export default App
