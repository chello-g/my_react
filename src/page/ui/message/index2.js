/*
 * @Author: your name
 * @Date: 2022-04-10 22:17:46
 * @LastEditTime: 2022-04-10 22:17:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my_react\src\page\ui\message\index2.js
 */
import React from 'react'
import { Card, Button, message } from 'antd'

export default function Index () {
  // function showMessage(type) {
  //   message[type]('hello world')
  // }
  const showMessage = (type) => {
    message[type]('hello world')
  }
  return (
    <div>
      <Card title="提示框">
        <Button type="primary" onClick={() => showMessage('success')}>success</Button>
        <Button type="info" onClick={() => showMessage('info')}>info</Button>
        <Button type="danger" onClick={() => showMessage('error')}>error</Button>
      </Card>
    </div>
  )
}