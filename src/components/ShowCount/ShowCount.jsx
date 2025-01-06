import PropTypes from 'prop-types'
import './ShowCount.css'

function ShowCount({ count }) {
  return (
    <div className='show-count'>
      <p>Número de clicks: {count}</p>
    </div>
  )
}
ShowCount.propTypes = {
  count: PropTypes.number.isRequired
}
export default ShowCount
