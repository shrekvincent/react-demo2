import React, { Component } from 'react';
import Highcharts from 'highcharts';
// import $ from 'jquery';
// import Chart from '../AnlystaiComponent/Chart.js';
class DataMapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDate: this.showDate (),
      // showDataMap: this.showDataMap (),
    }
  }
  componentDidMount () {
    // this.showDataMap ();
    this.showDate ();
    // this.changeChartId ();
  }
  componentWillUnmount () {
    // this.writeWorld ();
    // this.showDataMap ();
  }

  // 显示日期函数
  showDate () {
    let myDate = new Date ();
    let year = myDate.getFullYear ();
    let month = myDate.getMonth ();
    let day = myDate.getDate ();
    let date;
    return date = year + '/' + month + '/' + day;
  }

  render () {
    let items = [];
    for ( let i = 0; i <= 100; i++) {
      items.push(<ChartAll />);
    }
    return (
      <div style = {{display: 'flex', flexWrap: 'wrap',}}>    
        {items}
      </div>
    )
  }
}

class ChartAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDate: this.showDate(),
    }
  }
  showDate () {
    let myDate = new Date ();
    let year = myDate.getFullYear ();
    let month = myDate.getMonth ();
    let day = myDate.getDate ();
    let date;
    return date = year + '/' + month + '/' + day;
  }
  render () { 
      // 绘图部分
      const config = {
        chart: {
          type: 'column'
        },
        title: {
          text: null
        },
        xAxis: {
          categories: [
            '土耳其里拉',
            '南非兰特',
            '瑞典克朗',
            '韩币',
            '俄罗斯卢布',
            '挪威克朗',
            '丹麦克朗',
            '英镑',
            '欧元',
            '新兴市场货币',
            '新西兰元',
            '印尼卢比',
            '马来西亚林吉特',
            '越南盾',
            '新台币',
            '新加坡元',
            '人民币',
            '日元',
            '泰铢',
            '港币',
            '澳元',
            '瑞士法郎',
            '印度卢比',
            '阿根廷',
            '巴西雷亚尔',
            '菲律宾比索',
            '墨西哥比索',
            '加元',
            '美元指数',
          ],
        title: {
          text: null
        },
      },
      yAxis: {
        max: 3,
        title: {
          text: null
        },
        labels: {
          formatter: function () {
            return this.value + '%';
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        name: null,
        data: [
            -1.11,
            -0.98,
            -0.82,
            -0.82,
            -0.8,
            -0.78,
            -0.74,
            -0.74,
            -0.69,
            -0.64,
            -0.51,
            -0.44,
            -0.39,
            -0.35,
            -0.29,
            -0.18,
            -0.16,
            -0.13,
            0.08,
            0.1,
            0.13,
            0.15,
            0.29,
            0.39,
            0.51,
            0.54,
        ],
        zones: [{
          color: '#993300'
        }]
      }],
      navigation: {
        buttonOptions: {
          enabled: false
        }
        }
      };
    return (
      <div className = "chartCommonStyleContainer"> 
        <ChartHead />
        <ChartBody options = {config} />
        <ChartEnd />  
      </div>
    )
  }
}
class ChartHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDate: this.showDate (),
    }
  }
  showDate () {
    let myDate = new Date ();
    let year = myDate.getFullYear ();
    let month = myDate.getMonth ();
    let day = myDate.getDate ();
    let date;
    return date = year + '/' + month + '/' + day;
  }
  render() {
    return (
      <div className = "chartCommonStyleTopLayer">
        <p id = "chartHead"><a href="#">2013年公司手续费及佣金净收入及增长率</a></p>
        <p id = "chartDate">{this.showDate ()}</p>
      </div>
    )
  }
}

class ChartBody extends Component {
  constructor(props) {
    super(props);
    this.chartContainer = React.createRef();
  }

  componentDidMount() {
    this.chart = new Highcharts[this.props.type || 'Chart'](
    this.chartContainer.current,
    this.props.options
    );
  }
  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div className = "chartCommonStyleSelf" ref={this.chartContainer} />;
  }
}

class ChartEnd extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   showDate: this.showDate (),
    // }
  }
  render() {
    return (
      <div className = "chartCommonStyleBottomLayer">
        <p id = "chartEnd"><a href = "#">来源:中国证券平安银行收入与净悬差改善资产质量包袱减轻</a></p>
        <p id = "chartEnd">类别:公司调研</p>
        <p id = "chartEnd">作者:刘冉,王鸿行</p>
      </div>
    )
  }
}
export default DataMapContainer;