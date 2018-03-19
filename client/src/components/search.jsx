import PropTypes from 'prop-types'
import React from 'react'
import { Label } from 'semantic-ui-react'



const resultRenderer = ({ title }) => <Label content={title} />

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

const SearchBar = () => (
  <SearchExampleStandard resultRenderer={resultRenderer} />
)

export default SearchBar