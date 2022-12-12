// Write your code here
import './index.css'

const DestinationItem = props => {
  const {placeDetails} = props
  const {name, imgUrl} = placeDetails

  return (
    <li className="list-item">
      <img className="list-img" alt={name} src={imgUrl} />
      <p className="paragraph">{name}</p>
    </li>
  )
}

export default DestinationItem
