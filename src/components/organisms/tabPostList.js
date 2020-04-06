import PropTypes from "prop-types"
import React, { Component } from "react"

import Tabs from '../molecules/tabs'
import CardList from '../molecules/cardList'

// import styles from './tabPostList.module.scss'

const TAB_TYPES = {
  LATEST: 'latest',
  RELATED: 'related'
}

const tabData = [
  {
    type: TAB_TYPES.LATEST,
    content: '最新の記事'
  },
  {
    type: TAB_TYPES.RELATED,
    content: '関連の記事'
  }
]

class TabWrap extends Component {
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

const TabPostList = ({ postList, activeTag, activeId }) => {
  const getLatest = () => {
    return postList.filter(post => post.node.id !== activeId).slice(0, 3)
  }

  const getRelated = () => {
    return postList.filter(post => post.node.tags[0] === activeTag && post.node.id !== activeId).slice(0, 3)
  }

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

TabPostList.propTypes = {
  postList: PropTypes.array,
  activeTag: PropTypes.string,
  activeId: PropTypes.string,
}

TabPostList.defaultProps = {
  postList: [],
  activeTag: '',
  activeId: ''
}

export default TabPostList