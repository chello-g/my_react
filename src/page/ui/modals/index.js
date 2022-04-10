/*
 * @Author: your name
 * @Date: 2022-04-10 14:35:39
 * @LastEditTime: 2022-04-10 22:06:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my_react\src\page\ui\modals\index.js
 */
import { Card } from 'antd'
import React, { Component } from 'react'
import { Modal, Button } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
const { confirm } = Modal

export class index extends Component {

  state = {
    isModalVisible: false
  }
  showModal = () => { this.setState({ isModalVisible: true }) }
  handleOk = () => { this.setState({ isModalVisible: false }) }
  handleCancel = () => { this.setState({ isModalVisible: false }) }
  showConfirm () {
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk () {
        console.log('OK');
      },
      onCancel () {
        console.log('Cancel');
      },
    });
  }
  render () {
    return (
      <div>
        <Card title="基础对话框">
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <Modal title="Basic Modal" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Card>

        <Card title="信息确认">
          <Button onClick={this.showConfirm}>Confirm</Button>
        </Card>
      </div>
    )
  }
}

export default index