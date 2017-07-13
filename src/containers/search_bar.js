import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'
import { compose, pure, withState, withHandlers, setPropTypes } from 'recompose'

const enhance = compose(
  pure,
  withState('term', 'setTerm', ''),  // setTerm is updater available on props
  withHandlers({
    onInputChange: ({ setTerm }) => (event) => {
      setTerm(event.target.value)
    },
    onFormSubmit: ({ setTerm, fetchWeather, term }) => (event) => {
      event.preventDefault()
      fetchWeather(term)
      setTerm('')
    },
  }),
  setPropTypes({
    term: PropTypes.string,
    onInputChange: PropTypes.func,
    fetchWeather: PropTypes.func,
    onFormSubmit: PropTypes.func,
  })
)

const SearchBar = ({ term, onInputChange, onFormSubmit }) => (
  <form onSubmit={onFormSubmit} className="input-group">
    <input
      placeholder="get a 5-day forecast in your city"
      className="form-control"
      value={term}
      onChange={onInputChange} />
    <span className="input-group-btn">
      <button type="submit" className="btn btn-secondary">
        Submit
      </button>
    </span>
  </form>
)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(enhance(SearchBar))
// NOTE first null means that omit first argument (mapStateToProps)
