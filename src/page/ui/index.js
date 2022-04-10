/*
 * @Author: your name
 * @Date: 2022-04-10 14:35:39
 * @LastEditTime: 2022-04-10 17:50:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my_react\src\page\ui\index.js
 */
// React.memo 为高阶组件。memo的意思是备忘录。
// 它与 React.PureComponent 非常相似，但它适用于函数组件，但不适用于 class 组件。
// React.memo()使用场景就是纯函数组件频繁渲染props
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

export default memo(function index (props) {
  const { route } = props
  console.log('---props---', props)
  console.log('---route---', route)
  return (
    <div className='ui-wrap'>
      {/* 渲染子路由 */}
      {renderRoutes(route.routes)}
    </div>
  )
})
