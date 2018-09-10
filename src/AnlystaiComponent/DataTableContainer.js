import React, { Component } from 'react';
import $ from 'jquery';

class DataTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDataTable: this.showDataTable (),
      showDate: this.showDate (),

      // createTable: this.createTable (),
      headers: ['合约种类','年初合约金额','期末合约金额','报告期公允价格变动情况','总计'],
      data : [
        ['合约种类','年初合约金额','期末合约金额','报告期公允价格变动情况','总计'],
        ['利率衍生工具','1719253','1872219','(18)','22323232424'],
        ['外汇衍生工具','1006715','943070','644','4343434'],
        ['贵金属衍生工具','1719253','107930','385','53353'],
        ['其他','11115','5431','7','53353'],
        ['合计','2849534','2928650','1018','53535']
      ],
      data1: ['利率衍生工具','1719253','1872219','(18)','22323232424'],
      data2: ['外汇衍生工具','1006715','943070','644','4343434'],
      data3: ['贵金属衍生工具','1719253','107930','385','53353'],
      data4: ['其他','11115','5431','7','53353'],
      data5: ['合计','2849534','2928650','1018','53535']
      // showDate: this.showDate (),
    }
  }
  componentDidMount () {
    // this._renderTable();
    // this.createTable();
    this.showDataTable();
    this.showDate();
  }
  componentWillUnmount () {
    
  }
  showDate () {
    let myDate = new Date ();
    let year = myDate.getFullYear ();
    let month = myDate.getMonth ();
    let day = myDate.getDate ();
    let date;
    return date = year + '/' + month + '/' + day;
  }
  showDataTable () {
    $(".data-list-box").empty();
    for (let i = 0; i <= 100; i++) {
      let countTable = 0 ;
      let dataTableItem = 'data-table-item' + countTable + i;
      let tableTopLayer = 'tableTopLayer' + countTable + i;
      let tableId = 'form' + countTable + i;
      let tableBottomLayer = 'tableBottomLayer' + countTable + i;
      let divtableTop = document.createElement('div');
          divtableTop.id = tableTopLayer;
      let divtableBottom = document.createElement('div');
          divtableBottom = tableBottomLayer;
      let rightTableDiv = document.createElement('a');
          rightTableDiv.id = 'tableRightId';
      $('.data-form-table').append('<div id = "' + dataTableItem + '" ></div>');
      $('#' + dataTableItem + "").append('<div id = "' + tableTopLayer + '"></div>');
      $('#' + dataTableItem + "").append('<div id = "' + tableId + '"></div>');
      $('#' + dataTableItem + "").append('<div id = "' + tableBottomLayer + '"></div>');

      // 添加样式
      $("#" + dataTableItem + "").addClass('TableContainer');

      $('#' + tableTopLayer + "").addClass('TableTopLayer');
      $('#' + tableTopLayer).append('<p id="chartHead"><a href="#">2013年公司手续费及佣金净收入及增长率</a></p>');
      $('#' + tableTopLayer).append('<p id="chartDate">'+ this.showDate() + '</p>');

      $('#' + tableId + "").addClass('TableForm');

      $('#' + tableBottomLayer + "").addClass('TableBottomLayer'); 
      $('#' + tableBottomLayer + "").append('<p id="chartEnd"><a href="#">来源:中国证券平安银行收入与净悬差改善资产质量包袱减轻</a></p>');
      $('#' + tableBottomLayer + "").append('<p id="chartEnd">类别:公司调研</p>');
      $('#' + tableBottomLayer + "").append('<p id="chartEnd">作者:刘冉,王鸿行</p>');

      }
      return(
        <div>
        </div>
      )
    }
  render () {
    return (
      <div>
        {/* <CreateTable /> */}
      </div>

    )
  }
}

class CreateTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // showDataTable: this.showDataTable (),
      // createTable: this.createTable (),
      headers: ['合约种类','年初合约金额','期末合约金额','报告期公允价格变动情况','总计'],
      data : [
        ['合约种类','年初合约金额','期末合约金额','报告期公允价格变动情况','总计'],
        ['利率衍生工具','1719253','1872219','(18)','22323232424'],
        ['外汇衍生工具','1006715','943070','644','4343434'],
        ['贵金属衍生工具','1719253','107930','385','53353'],
        ['其他','11115','5431','7','53353'],
        ['合计','2849534','2928650','1018','53535']
      ],
      data1: ['利率衍生工具','1719253','1872219','(18)','22323232424'],
      data2: ['外汇衍生工具','1006715','943070','644','4343434'],
      data3: ['贵金属衍生工具','1719253','107930','385','53353'],
      data4: ['其他','11115','5431','7','53353'],
      data5: ['合计','2849534','2928650','1018','53535']
      // showDate: this.showDate (),
    }
  }
  render() {
    return(
      <table>
        <thead>
          <tr>
            {
              this.state.headers.map((elen,index) => {
              return(                    
                    <td key = {index}>
                      {elen}
                    </td>
              )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            <tr>
              {
                this.state.data1.map((elen,index) => {
                  return(
                    <td key = {index} >
                      {elen}
                    </td>
                  )
                })
              }
            </tr>
          } 
          {
            <tr>
              {
                this.state.data2.map((elen,index) => {
                  return(
                    <td key = {index} >
                      {elen}
                    </td>
                  )
                })
              }
            </tr>                      
          }
          {
            <tr>
              {
                this.state.data3.map((elen,index) => {
                  return(
                    <td key = {index} >
                      {elen}
                    </td>
                  )
                })
              }
            </tr>                      
          }
          {
            <tr>
              {
                this.state.data4.map((elen,index) => {
                  return(
                    <td key = {index} >
                      {elen}
                    </td>
                  )
                })
              }
            </tr>                      
          }
          {
            <tr>
              {
                this.state.data5.map((elen,index) => {
                  return(
                    <td key = {index} >
                      {elen}
                    </td>
                  )
                })
              }
            </tr>                      
          }
        </tbody>
      </table>
    )
  }
}


export default DataTableContainer;