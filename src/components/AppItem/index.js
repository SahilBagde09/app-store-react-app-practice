// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppDetails} = props
  const {appName, imageUrl} = eachAppDetails
  return (
    <li className="each-app-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
