import React, { Component } from 'react'
import { Menu } from 'antd';
import menuConfig from '../../config/menu'
const { SubMenu } = Menu;

class Index extends Component {
  state = {
    menuItem: ''
  }
  componentDidMount() {
    let menuItem = this.getMenuItem(menuConfig)
    this.setState({ menuItem })
  }
  getMenuItem = (data) => {
    return data.map(item => {
      if (item.children) {
        return <SubMenu key={item.id} icon={item.icon} title={item.title}>
          {
            item.children.map(itemc => {
              return <Menu.Item key={itemc.id}>{itemc.title}</Menu.Item>
            })
          }
        </SubMenu>
      } else {
        return <Menu.Item key={item.id}>{item.title}</Menu.Item>
      }
    })
  }
  render() {
    return (
      <div>
        <h1 className='nav-title'>ABC</h1>
        <Menu mode="inline" theme="dark">
          {this.state.menuItem}
        </Menu>
      </div>
    )
  }
}

export default Index