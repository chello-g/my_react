import React, { Component } from 'react'
import { Menu } from 'antd';
import menuConfig from '../../config/menu'
const { SubMenu } = Menu;

class Index extends Component {
  constructor(props) {
    super(props);
    this.menuConfig = menuConfig;
  }
  render() {
    return (
      <div className='nav-left'>
        <h1 className='nav-title'>ABC管理系统</h1>
        <Menu mode="inline" theme="dark">
          {/* <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </SubMenu> */}
          {/* 想到的menuConfig.map(()=>{}) */}
          {/* 想到的menuConfig.map((el)=>{
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="el.title">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
          }) */}
          {
            this.menuConfig.map((el) => {
              // return (
              // <SubMenu key={el.id} icon={el.icon} title={el.title}>
              //   {el.children ?
              //     el.children.map((elc) => {
              //       return <Menu.Item key={elc.id}>{elc.title}</Menu.Item>
              //     })
              //     : ''
              //   }
              // </SubMenu>
              // )
              if (el.children) {
                return <SubMenu key={el.id} icon={el.icon} title={el.title}>
                  {
                    el.children.map((elc) => {
                      return <Menu.Item key={elc.id}>{elc.title}</Menu.Item>
                    })
                  }
                </SubMenu>
              } else {
                return <Menu.Item key={el.id}>{el.title}</Menu.Item>
              }
            })
          }
        </Menu>
      </div>
    )
  }
}

export default Index