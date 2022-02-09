import React from 'react';
import Chart from './Chart';
import  getData  from "./utils";
import 'antd/dist/antd.css';
import MakeTimeFrame from './TimeFrame'
import { Select } from 'antd';
const { Option } = Select;
let arr = undefined;
export default class ChartComponent extends React.Component {
	constructor(props){
		super(props)
		this.vvv = ['open','high','low','close','volume']
		this.time = {'1h':1,'3h':3,'5h':5,'1d':24,'3d':72}
		this.state = {value:'1h',data : new MakeTimeFrame(getData)}
		arr = this.state.data.data
	}
	onClick=(value)=>{
		if(value === '1h'){
			arr = this.state.data.data;
		}else{
			arr =  this.state.data.changetoHour(this.time[value])
		}
		this.setState({value});
	}
	// shouldComponentUpdate(r,nextState){
	// 	return true;
	// }
	render() {
		console.log("arr :",arr);
		console.log("getdata :: ",getData)
		console.log("require xagus :: ",require('../XAGUSD60.json'))
		if (arr === undefined) {
			return <div>Loading...</div>
		}
		console.log('render')
		return (
			<div>
			<Select defaultValue= "1h" style={{ width: 120 }} onChange={this.onClick}>
      			<Option value="1h">open</Option>
      			<Option value="3h">high</Option>
      			<Option value="5h">low</Option>
				<Option value="1d">close</Option>
				<Option value="3d">volume</Option>
			</Select>
			<Chart data={arr} value = {this.state.value}/>
			</div>
		)
	}
}
