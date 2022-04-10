/*
 * @Author: your name
 * @Date: 2022-04-04 15:12:35
 * @LastEditTime: 2022-04-10 17:48:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my_react\src\App.js
 */
import { Row, Col } from 'antd'
import Nav from './components/nav/index'
import Header from './components/header'
import Footer from './components/footer'
import './App.less';
import './style/common.scss'
import { renderRoutes } from 'react-router-config'
import routes from './router'

// 函数式组件
function App () {
  return (
    <div>
      <Row className='container'>
        <Col className='nav-left' flex="200px">
          {/* 左侧边栏 */}
          <Nav />
        </Col>
        <Col className='main' flex="auto">
          <Header />
          <Row className='content'>
            {renderRoutes(routes)}
          </Row>
          <Footer />
        </Col>
      </Row>
    </div>
  )
}

// 类组件
// class App extends Component {
//   render() {
//     return <Button type="primary">Button</Button>
//   }
// }

export default App