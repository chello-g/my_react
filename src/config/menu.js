import { HomeOutlined, UnderlineOutlined, FolderOutlined, TableOutlined, FileDoneOutlined, ShopOutlined, FileTextOutlined, UserOutlined, CarOutlined, PieChartOutlined, ExceptionOutlined } from '@ant-design/icons';
const menuConfig = [
  {
    id: '1',
    title: '首页',
    path: '/home',
    icon: <HomeOutlined />
  },
  {
    id: '2',
    title: 'UI',
    path: '/ui',
    icon: <UnderlineOutlined />,
    children: [
      {
        id: '21',
        title: '按钮',
        path: '/ui/buttons',
      },
      {
        id: '22',
        title: '弹框',
        path: '/ui/modals',
      },
      {
        id: '23',
        title: 'Loading',
        path: '/ui/loadings',
      },
      {
        id: '24',
        title: '通知提醒',
        path: '/ui/notification',
      },
      {
        id: '25',
        title: '全局Message',
        path: '/ui/messages',
      },
      {
        id: '26',
        title: 'Tab页签',
        path: '/ui/tabs',
      },
      {
        id: '27',
        title: '图片画廊',
        path: '/ui/gallery',
      },
      {
        id: '28',
        title: '轮播图',
        path: '/ui/carousel',
      },
    ],
  },
  {
    id: '3',
    title: '表单',
    path: '/form',
    icon: <FolderOutlined />,
    children: [
      {
        id: '31',
        title: '登录',
        path: '/form/login',
      },
      {
        id: '32',
        title: '注册',
        path: '/form/reg',
      },
    ],
  },
  {
    id: '4',
    title: '表格',
    path: '/table',
    icon: <TableOutlined />,
    children: [
      {
        id: '41',
        title: '基础表格',
        path: '/table/basic',
      },
      {
        id: '42',
        title: '高级表格',
        path: '/table/high',
      },
    ],
  },
  {
    id: '5',
    title: '富文本',
    path: '/rich',
    icon: <FileDoneOutlined />,
  },
  {
    id: '6',
    title: '城市管理',
    path: '/city',
    icon: <ShopOutlined />
  },
  {
    id: '7',
    title: '订单管理',
    path: '/order',
    icon: <FileTextOutlined />,
    btnList: [
      {
        id: '71',
        title: '订单详情',
        path: 'detail',
      },
      {
        id: '72',
        title: '结束订单',
        path: 'finish',
      },
    ],
  },
  {
    id: '8',
    title: '员工管理',
    path: '/user',
    icon: <UserOutlined />
  },
  {
    id: '9',
    title: '车辆地图',
    path: '/bikeMap',
    icon: <CarOutlined />
  },
  {
    id: 'A',
    title: '图标',
    path: '/charts',
    icon: <PieChartOutlined />,
    children: [
      {
        id: 'A1',
        title: '柱形图',
        path: '/charts/bar',
      },
      {
        id: 'A2',
        title: '饼图',
        path: '/charts/pie',
      },
      {
        id: 'A3',
        title: '折线图',
        path: '/charts/line',
      },
    ],
  },
  {
    id: 'B',
    title: '权限设置',
    path: '/permission',
    icon: <ExceptionOutlined />
  },
];

export default menuConfig;