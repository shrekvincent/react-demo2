import React, { Component } from 'react';
import HomePageTag from '../AnlystaiComponent/HomePageTag.js';
import List from '../AnlystaiComponent/List.js';
import '../index.css';
class Content extends Component {
  render () {
    return (
      <div className = "content">
        <HomePageTag />
        <List />
      </div>

    )
  }
}
export default Content;