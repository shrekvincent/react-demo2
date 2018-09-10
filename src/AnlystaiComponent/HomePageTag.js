import React, { Component } from 'react';
import iconRep from '../img/icon-report.svg';

class HomePageTag extends Component {
  render () {
    return (
      <div className = "homePageTag">
        <div className = "TagPart">
          <div>
            <a href = "#"><img src = {iconRep} style = {{width: "40px", height: "40px", paddingLeft: '8px'}} /></a>
          </div>
          <div>
            <h2><a className = "headTagStyle">表格首页</a></h2>
          </div>
        </div>
        <ul style = {{marginLeft: '12px',}}>
          <li className = "tagTipItems"><a href = "#">人工智能指数</a></li>
          <li className = "tagTipItems"><a href = "#">半导体市场规模</a></li>
          <li className = "tagTipItems"><a href = "#">棉花价格</a></li>
          <li className = "tagTipItems"><a href = "#">煤炭价格</a></li>
          <li className = "tagTipItem"><a href = "#">全球智能手机出货量</a></li>
        </ul>
        <div>
          <span className = "tagTipEnd"><a href = "#">不知道搜什么？试试分类导航 ＞</a></span>
        </div>
      </div>
    )
  }
}

export default HomePageTag;