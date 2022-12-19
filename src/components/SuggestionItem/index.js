import './index.css'

const SuggestionItem = props => {
  const {suggestionsList} = props
  const {suggestion} = suggestionsList
  return (
    <div className="suggestions-list">
      <p className="item-name">{suggestion}</p>
    </div>
  )
}
export default SuggestionItem
