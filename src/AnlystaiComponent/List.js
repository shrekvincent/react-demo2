import React, { Component } from 'react';
import $ from 'jquery';
import Highcharts from 'highcharts';
import DataMapContainer from '..//AnlystaiComponent/DataMapContainer.js';
import DataTableContainer from '..//AnlystaiComponent/DataTableContainer.js';
import '../css/AnalystaiGroups.css';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render () {
    return (
      <div className = "list">
        <div className = "data-list-box">
          <DataMapContainer />
        </div>
        <div className = "data-form-table">
          {/* <DataTableContainer /> */}
        </div>  
      </div>
    )
  }
}

export default List;