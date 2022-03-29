import { Row, Col } from 'antd'
import Nav from './components/nav/index'
import Header from './components/header'
import Footer from './components/footer'
import Home from './page/home'
import './App.less';
import './style/common.scss'

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
            <Home />
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