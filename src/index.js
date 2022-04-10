// 代码没有使用react相关方法，也要在文件顶部import react
// 原因：通过babel会将jsx编译成普通js代码会用到React.createElement，所以需要React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root1') // index.html中的root1标签
);

