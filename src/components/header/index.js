// 代码没有使用react相关方法，也要在文件顶部import react
// 原因：通过babel会将jsx编译成普通js代码会用到React.createElement，所以需要React
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.scss'
import { getNowWeather } from '../../api/weather'
import { parseTime } from '../../utils/time'

class Index extends Component {
  state = {
    username: '',
    time: '',
    weather: ''
  }
  componentDidMount() {
    let params = {
      app: 'weather.today',
      weaId: 248,
      appkey: 10003,
      sign: 'b59bc3ef6191eb9f747dd4e83c99f2a4',
      format: 'json'
    }
    setInterval(() => {
      let currentTime = parseTime(new Date(), '{y}-{m}-{d} {h}:{i}:{s}')
      this.setState({ time: currentTime })
    }, 1000)
    getNowWeather(params).then((res) => {
      this.setState({ weather: res.data.result.weather })
    })
    this.setState({ username: 'ghl' })
  }
  render() {
    return (
      <div className='header'>
        <Row className='header-top'>
          <Col span="24">
            <span>欢迎，{this.state.username}</span>
            <a href='/#'>退出</a>
          </Col>
        </Row>
        <Row className='breadcrumb'>
          <Col span="4" className='breadcrumb-title'>
            首页
          </Col>
          <Col span="20" className='weather'>
            <span className='date'>{this.state.time}</span>
            <span className='detail'>{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Index