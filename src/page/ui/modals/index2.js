/*
 * @Author: your name
 * @Date: 2022-04-10 22:09:11
 * @LastEditTime: 2022-04-10 22:09:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my_react\src\page\ui\modals\index2.js
 */
import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'

export class Index extends Component {
  state = {
    showModal: false,
    showModal2: false
  }
  handleOpen (type) {
    this.setState({
      [type]: true // 动态设置属性值
    })
  }
  render () {
    return (
      <div>
        <Card title="基础对话框">
          <Button type="primary" onClick={() => this.handleOpen('showModal')}>Open</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal2')}>Open</Button>
        </Card>

        <Modal
          title="React11111"
          visible={this.state.showModal}
          onOk={() => {
            this.setState({ showModal: false })
          }}
          onCancel={() => {
            this.setState({ showModal: false })
          }}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>

        <Modal
          title="React22222"
          visible={this.state.showModal2}
          onOk={() => {
            this.setState({ showModal2: false })
          }}
          onCancel={() => {
            this.setState({ showModal2: false })
          }}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>

        <Card title="信息确认">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Open</Button>
          <Button type="info" onClick={() => this.handleConfirm('info')}>Open</Button>
          <Button type="success" onClick={() => this.handleConfirm('success')}>Open</Button>
          <Button type="warning" onClick={() => this.handleConfirm('warning')}>Open</Button>
        </Card>

      </div>
    )
  }
  handleConfirm (type) {
    Modal[type]({
      title: '确认',
      content: '好好学习，天天向上',
      onOk () {
        console.log('OK')
      },
      onCancel () {
        console.log('no OK')
      }
    })
  }
}

export default Index