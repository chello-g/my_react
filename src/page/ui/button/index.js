/*
 * @Author: your name
 * @Date: 2022-04-10 14:35:39
 * @LastEditTime: 2022-04-10 21:48:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my_react\src\page\ui\button\index.js
 */
import React, { Component } from 'react'
import './index.scss'
import { Card, Button, Radio } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group'
import { PlusOutlined, DeleteOutlined, EditOutlined, SearchOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';


export class Index extends Component {
  state = {
    loading: true,
    size: 'default'
  }
  close = () => this.setState({ loading: false })
  open = () => this.setState({ loading: true })
  onChange = (e) => this.setState({ size: e.target.value })
  render () {
    const { loading } = this.state
    return (
      <div className='wrap'>
        <Card title="基础款按钮" className='button-wrap'>
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="primary" danger>Danger</Button>
          <Button type="dashed">Dashed</Button>
        </Card>
        <Card title="图标款按钮" className='button-wrap'>
          <Button icon={<PlusOutlined />}>添加</Button>
          <Button icon={<DeleteOutlined />}>删除</Button>
          <Button icon={<EditOutlined />}>修改</Button>
          <Button icon={<SearchOutlined />}>查找</Button>
          <Button shape="circle" icon={<SearchOutlined />} />
          <Button shape="round" icon={<SearchOutlined />} />
        </Card>
        <Card title="loading按钮" className='button-wrap'>
          <Button type="primary" loading={loading}>加载中</Button>
          <Button onClick={this.close}>关闭加载</Button>
          <Button onClick={this.open}>打开加载</Button>
        </Card>
        <Card title="按钮组" className='button-wrap'>
          <ButtonGroup>
            <Button icon={<LeftOutlined />}>向左</Button>
            <Button icon={<RightOutlined />}>向右</Button>
          </ButtonGroup>
        </Card>
        <Card title="控制按钮尺寸" className='button-wrap'>
          <Radio.Group onChange={this.onChange} value={this.state.size}>
            <Radio value={'large'}>大</Radio>
            <Radio value={'default'}>中</Radio>
            <Radio value={'small'}>小</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>Primary</Button>
          <Button type="primary" danger size={this.state.size}>Danger</Button>
          <Button type="dashed" size={this.state.size}>Dashed</Button>
        </Card>
      </div >
    )
  }
}

export default Index
