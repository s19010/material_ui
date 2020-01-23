import React from 'react'
import { TextField, Card, CardActions, CardContent } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      item: ''
    }
  }

  render () {
    return (
      <Card>
        <CardActions></CardActions>
        <CardContent></CardContent>
      </Card>
    )
  }
}

export default App
