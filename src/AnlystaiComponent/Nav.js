import React, { Component } from 'react';
import '../index.css';
import IconHome from '../img/icon_home.svg';
import IconNine from '../img/icon-products.svg';
import IconOne from '../img/login_one.png';
import logo from '../img/logo.png';
import '../css/AnalystaiGroups.css';
class Nav extends Component {
  render () {
    return (
      <div className = "navContainer">
        <div className = "navTopLayer">
          <div className = "searchBox">
            <img src={logo} className = "main-nav-btn" width = "129px" height = "16px" paddingleft = "24px" paddingright = "15px"/>
            <input id = "navSearch" type = "search" placeholder = "大家都在搜美国加征关税" />
            <button className = "navSearchSure" >搜索</button>
          </div>
          <div className = "navPart">
            <ul className = "navPartItems">
              <li><img src = {IconHome} width = '16px' height = '16px' /></li>
              <li><img src = {IconNine} width = '16px' height = '16px' /></li>
              <li className = "loginUserTag">
                <span>
                  <img src = {IconOne} style = {{width: '20px', height: '20px'}} className = "main-menu-btn-twoPart" />
                </span>
                <span className = "loginUserInf">test3@abcft.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className = "navBottomLayer">
          <ul className = "nav-box-items">
            <li><a href = "#">数据图</a></li>
            <li><a href = "#">综合</a></li>
            <li><a href = "#">资讯</a></li>
            <li><a href = "#">数据</a></li>
            <li><a href = "#">数据表</a></li>
            <li><a href = "#">公告</a></li>
            <li><a href = "#">研报</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;