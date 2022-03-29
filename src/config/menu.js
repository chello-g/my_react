import { HomeOutlined, UnderlineOutlined, FolderOutlined, TableOutlined, FileDoneOutlined, ShopOutlined, FileTextOutlined, UserOutlined, CarOutlined, PieChartOutlined, ExceptionOutlined } from '@ant-design/icons';
const menuConfig = [
  {
    id: '1',
    title: '首页',
    key: '/home',
    icon: <HomeOutlined />
  },
  {
    id: '2',
    title: 'UI',
    key: '/ui',
    icon: <UnderlineOutlined />,
    children: [
      {
        id: '21',
        title: '按钮',
        key: '/ui/buttons',
      },
      {
        id: '22',
        title: '弹框',
        key: '/ui/modals',
      },
      {
        id: '23',
        title: 'Loading',
        key: '/ui/loadings',
      },
      {
        id: '24',
        title: '通知提醒',
        key: '/ui/notification',
      },
      {
        id: '25',
        title: '全局Message',
        key: '/ui/messages',
      },
      {
        id: '26',
        title: 'Tab页签',
        key: '/ui/tabs',
      },
      {
        id: '27',
        title: '图片画廊',
        key: '/ui/gallery',
      },
      {
        id: '28',
        title: '轮播图',
        key: '/ui/carousel',
      },
    ],
  },
  {
    id: '3',
    title: '表单',
    key: '/form',
    icon: <FolderOutlined />,
    children: [
      {
        id: '31',
        title: '登录',
        key: '/form/login',
      },
      {
        id: '32',
        title: '注册',
        key: '/form/reg',
      },
    ],
  },
  {
    id: '4',
    title: '表格',
    key: '/table',
    icon: <TableOutlined />,
    children: [
      {
        id: '41',
        title: '基础表格',
        key: '/table/basic',
      },
      {
        id: '42',
        title: '高级表格',
        key: '/table/high',
      },
    ],
  },
  {
    id: '5',
    title: '富文本',
    key: '/rich',
    icon: <FileDoneOutlined />,
  },
  {
    id: '6',
    title: '城市管理',
    key: '/city',
    icon: <ShopOutlined />
  },
  {
    id: '7',
    title: '订单管理',
    key: '/order',
    icon: <FileTextOutlined />,
    btnList: [
      {
        id: '71',
        title: '订单详情',
        key: 'detail',
      },
      {
        id: '72',
        title: '结束订单',
        key: 'finish',
      },
    ],
  },
  {
    id: '8',
    title: '员工管理',
    key: '/user',
    icon: <UserOutlined />
  },
  {
    id: '9',
    title: '车辆地图',
    key: '/bikeMap',
    icon: <CarOutlined />
  },
  {
    id: 'A',
    title: '图标',
    key: '/charts',
    icon: <PieChartOutlined />,
    children: [
      {
        id: 'A1',
        title: '柱形图',
        key: '/charts/bar',
      },
      {
        id: 'A2',
        title: '饼图',
        key: '/charts/pie',
      },
      {
        id: 'A3',
        title: '折线图',
        key: '/charts/line',
      },
    ],
  },
  {
    id: 'B',
    title: '权限设置',
    key: '/permission',
    icon: <ExceptionOutlined />
  },
];

export default menuConfig;