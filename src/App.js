import React from 'react'
import { TextField, Card, CardActions, CardContent } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

const ActionView = props => {
  return <div></div>
}

const ContentView = props => {
  const { id, name } = props.item
  return (
    <ul>
      <li>{id}</li>
      <li>{name}</li>
    </ul>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        { id: 's19010', name: 'tamashiro' },
        { id: 'n19004', name: 'kuniyoshi' },
        { id: 'n19013', name: 'namihira' }
      ],
      item: { id: 'undef', name: 'undef' }
    }
  }

  handleChange (props) {
    console.log(this.handleChange.bind(this))
  }

  render () {
    return (
      <Card>
        <CardActions>
          <ActionView items={this.state.items} />
        </CardActions>
        <CardContent>
          <ContentView item={this.state.item} />
        </CardContent>
      </Card>
    )
  }
}

export default App
