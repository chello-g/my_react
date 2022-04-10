/*
 * @Author: your name
 * @Date: 2022-04-10 14:35:39
 * @LastEditTime: 2022-04-10 22:09:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my_react\src\router\index.js
 */
import Home from '../page/home'
import Rich from '../page/rich'
import Order from '../page/order'
import City from '../page/city'
import User from '../page/user'
import BikeMap from '../page/bikeMap'
import UI from '../page/ui'
import Button from '../page/ui/button'
import Modals from '../page/ui/modals'
import Carousel from '../page/ui/carousel'
import Messages from '../page/ui/message'
import Table from '../page/tables'
import Basic from '../page/tables/basic'
import High from '../page/tables/high'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/rich',
    component: Rich
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/bikeMap',
    component: BikeMap
  },
  {
    path: '/ui',
    component: UI,
    routes: [
      {
        path: '/ui/buttons',
        component: Button
      },
      {
        path: '/ui/modals',
        component: Modals
      },
      {
        path: '/ui/carousel',
        component: Carousel
      },
      {
        path: '/ui/messages',
        component: Messages
      }
    ]
  },
  {
    path: '/table',
    component: Table,
    routes: [
      {
        path: '/table/basic',
        component: Basic
      },
      {
        path: '/table/high',
        component: High
      }
    ]
  },
]

export default routes