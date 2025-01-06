import './ShowCount.css'

function ShowCount({ count }) {
  return (
    <div className='show-count'>
      <p>Número de clicks: {count}</p>
    </div>
  )
}

export default ShowCount
