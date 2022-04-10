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
    children: [
      {
        path: '/ui/button',
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
        path: '/ui/message',
        component: Messages
      }
    ]
  },
  {
    path: '/table',
    component: Table,
    children: [
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