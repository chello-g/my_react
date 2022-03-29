// 代码没有使用react相关方法，也要在文件顶部import react
// 原因：通过babel会将jsx编译成普通js代码会用到React.createElement，所以需要React
import React, {Component} from 'react'

export class Index extends Component {
  render() {
    return (
      <div>header</div>
    )
  }
}
export default Index