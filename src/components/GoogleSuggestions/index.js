import './index.css'

const GoogleSuggestions = props => {
  const {suggestionsList, arrow} = props
  const {suggestion} = suggestionsList

  const arrowButton = () => {
    arrow(suggestion)
  }

  return (
    <li className="list-items">
      <p className="list-name">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={arrowButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default GoogleSuggestions
