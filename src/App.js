import { Row, Col } from 'antd'
import Nav from './components/nav/index'
import Header from './components/header'
import Footer from './components/footer'
import './App.less';
import './style/common.scss'
import { renderRoutes } from 'react-router-config'
import routes from './router'

// 函数式组件
function App() {
  return (
    <div>
      <Row className='container'>
        <Col className='nav-left' flex="160px">
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