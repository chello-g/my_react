import { Row, Col } from 'antd'
import Nav from './components/nav'
import Header from './components/header'
import Footer from './components/footer'
import './App.less';
import './style/common.scss'

// 函数式组件
function App() {
  return (
    <div>
      <Row className='container'>
        <Col>
          <Nav/>
        </Col>
        <Col>
          <Header/>
            <Row>
              我是内容区
            </Row>
          <Footer/>
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