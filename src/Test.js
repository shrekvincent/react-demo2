import React, { Component } from 'react'
import './css/Test.css';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state =({
      data: ['a', 'b', 'c', 'f', 'g', 'h'],
      isLoadingMore: false
    });
  }
  componentDidMount () {
    const wrapper = this.refs.wrapper;
    const loadMoreDataFn = this.loadMoreDataFn;
    const that = this;
    let timeCount;
    // function callback() {
    //   const top = wrapper.getBoundingClientRect().top;
    //   const windowHeight = window.screen.height;
    //   if (top && top < windowHeight) {
    //     loadMoreDataFn(that);
    //   }
    // }
    function callback() {
      const top = wrapper.getBoundingClientRect().top;
      const windowHeight = window.screen.height;
  
      if (top && top < windowHeight) {
          // 当 wrapper 已经被滚动到页面可视范围之内触发
          loadMoreDataFn(that);
      }
  }
    window.addEventListener('scroll', function () {
      if (this.state.isLoadingMore) {
        console.log('你好啊！')
        return ;
      }
      if (timeCount) {
        console.log('你好啊！！！')
        clearTimeout(timeCount);
      }
    }.bind(this), false)
  }


  loadMoreDataFn(that) {
    that.setState({
      data: that.state.data.concat(['e', 'c', 'c', 'o'])
    })
  }
  render () {
    return (
      <div>
        <div className = "App">
          {this.state.data.map((item, index) => (
            <li key = {index} className = "li-item">{item}</li>
          ))}
        </div>
        <div className = "loadMore" ref = "wrapper" onClick = {this.loadMoreDataFn.bind(this, this)}>加载更多</div>
      </div>
    )
  }
}
export default Test;