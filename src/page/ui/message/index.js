/*
 * @Author: your name
 * @Date: 2022-04-10 14:35:39
 * @LastEditTime: 2022-04-10 22:15:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my_react\src\page\ui\message\index.js
 */
import React, { Component } from 'react'
import { Card, Button, message } from 'antd'

export class index extends Component {
  success = () => {
    message.success('This is a success message');
  }
  error = () => {
    message.error('This is an error message');
  }
  warning = () => {
    message.warning('This is a warning message');
  }
  render () {
    return (
      <div>
        <Card title="提示框">
          <Button type="primary" onClick={this.success}>Success</Button>
          <Button type="primary" danger onClick={this.error}>Error</Button>
          <Button onClick={this.warning}>Warning</Button>
        </Card>
      </div>
    )
  }
}

export default index