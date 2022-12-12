// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchInputLowerCase = searchInput.toLowerCase()

    const searchResults = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInputLowerCase),
    )
    // console.log(searchInput.toLowerCase())

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            placeholder="Search"
            className="search-input"
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-icon"
          />
        </div>

        <ul className="list-items">
          {searchResults.map(eachPlace => (
            <DestinationItem placeDetails={eachPlace} key={eachPlace.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
