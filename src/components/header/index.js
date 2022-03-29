// 代码没有使用react相关方法，也要在文件顶部import react
// 原因：通过babel会将jsx编译成普通js代码会用到React.createElement，所以需要React
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.scss'

class Index extends Component {
  render() {
    return (
      <div className='header'>
        <Row className='header-top'>
          <Col span="24">
            <span>欢迎，username</span>
            <a href='/#'>退出</a>
          </Col>
        </Row>
        <Row className='breadcrumb'>
          <Col span="4" className='breadcrumb-title'>
            首页
          </Col>
          <Col span="20" className='weather'>
            <span className='date'>time</span>
            <span className='detail'>weather</span>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Index