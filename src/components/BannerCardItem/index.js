// Write your code here.

import './index.css'

const BannerCardItems = props => {
  const {cardDetails} = props
  const {id, headerText, description, className} = cardDetails

  return (
    <li className={className} key={id}>
      <h1> {headerText} </h1>
      <p> {description} </p>
      <button type="button">Show More</button>
    </li>
  )
}
export default BannerCardItems
