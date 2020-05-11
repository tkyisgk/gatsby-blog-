import * as React from "react"

import Tabs from '../molecules/tabs'
import CardList from '../molecules/cardList'

interface TabPostListProps {
  postList: Object[],
  activeTag: string,
  activeSlug: string
}

type TabTypes = {
  readonly LATEST: string,
  readonly RELATED: string
}

type TabData = {
  type: string,
  content: string
}[]

const TAB_TYPES: TabTypes = {
  LATEST: 'latest',
  RELATED: 'related'
}

const tabData: TabData = [
  {
    type: TAB_TYPES.LATEST,
    content: '最新の記事',
  },
  {
    type: TAB_TYPES.RELATED,
    content: '関連の記事'
  }
]

class TabWrap extends React.Component {
  static Latest = ({ tabType, children }) => tabType === TAB_TYPES.LATEST ? children : null
  static Related = ({ tabType, children }) => tabType === TAB_TYPES.RELATED ? children : null
  static Tabs = ({ tabType, changeTab }) => (
    <Tabs currentTabType={tabType} tabData={tabData} onClick={changeTab} />
  )

  state = {
    currentTabType: TAB_TYPES.LATEST
  }

  changeTab = tabType => {
    this.setState({ currentTabType: tabType })
  }

  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        tabType: this.state.currentTabType,
        changeTab: this.changeTab
      })
    )
  }
}

const TabPostList: React.FC<TabPostListProps> = ({ postList, activeTag, activeSlug }) => {
  const getLatest = () => {
    return postList.filter(post => post.node.slug !== activeSlug).slice(0, 3)
  }

  const getRelated = () => {
    return postList.filter(post => post.node.tags[0] === activeTag && post.node.slug !== activeSlug).slice(0, 3)
  }

  // @ts-ignore
  return (
    <TabWrap>
      <TabWrap.Tabs />
      <TabWrap.Latest>
        <CardList postList={getLatest()} />
      </TabWrap.Latest>
      <TabWrap.Related>
        <CardList postList={getRelated()} />
      </TabWrap.Related>
    </TabWrap>
  )
}

export default TabPostList