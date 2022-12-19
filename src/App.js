import {Component} from 'react'
import GoogleSuggestions from './components/GoogleSuggestions'
import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class App extends Component {
  state = {searchInput: ''}

  onclickSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  arrow = value => {
    this.setState({
      searchInput: value,
    })
    console.log(value)
  }

  render() {
    const {searchInput} = this.state
    const filteredData = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="goggle-suggestion-container">
        <div className="google-logo-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>
        <div className="search-container">
          <div className="search-bar-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              onChange={this.onclickSearchInput}
              type="search"
              placeholder="Search Google"
              className="search-google"
              value={searchInput}
            />
          </div>
          <ul className="suggestions-list">
            {filteredData.map(eachItem => (
              <GoogleSuggestions
                suggestionsList={eachItem}
                key={eachItem.id}
                arrow={this.arrow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default App
