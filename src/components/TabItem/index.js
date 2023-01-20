// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsDetails, onClickTabItem, currentTab} = props
  const {tabId, displayText} = tabsDetails
  const changeTheTabItem = () => {
    onClickTabItem(tabId)
  }
  let activeTabClass
  if (currentTab === tabsDetails.tabId) {
    activeTabClass = 'active-tab-class'
  } else {
    activeTabClass = 'tab-class'
  }
  return (
    <li>
      <button
        type="button"
        className={activeTabClass}
        onClick={changeTheTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
