import { Tree } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { Layout } from 'antd';
import Folder from './Folder';
import './Treeview.css';
//import ChartComponent from './ChartComponent';
import App from './App';
import Photo from './Photo';
import treeData from './Tree';
const { Sider, Content , Header ,Footer} = Layout;

class Demo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      img : "",
      pos : "",
    }
  }
  onSelect=(keys,e)=>{
  {
      this.setState(
        { 
          img : e.node.name,
          pos: e.node.key
        }
      );
    }
    console.log(e.node.key,e.node.name);
  }
  render(){
  return (
    <>
    <Layout>
      <Header className="header">Project OOP</Header>
    <Layout>
        <Sider width={325} className="site-layout-background">
            <Tree 
              showLine
              defaultExpandParent = {true}
              onSelect = {this.onSelect}
              treeData={treeData}
            />
        </Sider>
      <Layout>
        <Content>
          <div className="site-layout-background" style={{padding: 33}}>
            {(this.state.img)?<Photo imgSrc = {this.state.img}/>:<App/>}
         </div>
        </Content>
      </Layout>
    </Layout>
    </Layout>
    <Footer style={{ textAlign: 'center' }}>this project Created by everyone.</Footer>
    </>
  );
  }
}
export default Demo;