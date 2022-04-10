import React, { Component } from 'react'
import { Menu } from 'antd';
import menuConfig from '../../config/menu'
import { Link } from 'react-router-dom'
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
          {/* 两层菜单的形式 */}
          {/* {
            item.children.map(itemc => {
              return <Menu.Item key={itemc.id}>{itemc.title}</Menu.Item>
            })
          } */}
          {/* 递归的方法 */}
          {this.getMenuItem(item.children)}
        </SubMenu>
      } else {
        return <Menu.Item key={item.id}>
          <Link to={item.path}>{item.title}</Link>
        </Menu.Item>
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