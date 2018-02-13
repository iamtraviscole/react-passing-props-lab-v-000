import React from 'react'

import FruitBasket from './FruitBasket'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fruit: [],
      currentFilter: null,
      filters: []
    }
  }

  componentDidMount() {
    this.fetchFilters()
    this.fetchItems()
  }

  handleChange = event => {
    console.log('new filter: ', event.target.value)
    this.setState({ currentFilter: event.target.value })
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }))
  }

  fetchItems() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }))
  }

  render() {
    return (
      <FruitBasket
        handleChange={this.handleChange}
        fruit={this.state.fruit}
        currentFilter={this.state.currentFilter}
        filters={this.state.filters}
      />
    )
  }
}

export default App
