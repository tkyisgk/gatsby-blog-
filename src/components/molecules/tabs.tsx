import * as React from "react"

declare function require(x: string): any
const styles = require('./tabs.module.scss')

type TabData = {
  type: string,
  content: string
}

type TabsProps =  {
  currentTabType: string,
  tabData: TabData[],
  onClick(string): void
}

const Tabs: React.FC<TabsProps> = ({ currentTabType, tabData, onClick }) => {

  return (
    <div className={styles.tabs}>
      {tabData.map(tab => (
        <button
          type="button"
          key={tab.type}
          className={`${styles.tab} ${currentTabType === tab.type ? styles.active : ''}`}
          onClick={() => onClick(tab.type)}
        >{tab.content}</button>
      ))}
    </div>
  )
}

export default Tabs
