import React, { Component } from 'react';
import Button from 'antd/lib/button';
import { Input, Row, Col, List, message } from 'antd';
import './App.css';
import store from './store/sotre.js'
import { getInputChangeAction, getAddItemAction, delItemAction } from './store/actionCreators.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: store.getState().list,
            value: store.getState().inputValue,
            MyValue:''
        }
        store.subscribe(this.handleChange)
    }
    handleChange = () => {
        this.setState(store.getState())
    }
    handleInputChange = e => {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleAdd = () => {
        let value = store.getState().inputValue
        if(!value || value == null || value == '') {
            message.error('录入内容不能为空！');
            return false;
        }
        const action = getAddItemAction()
        store.dispatch(action)
        this.refs.myInput.input.value = ''
    }
    handleDel = (e) => {
        const action = delItemAction(e)
        store.dispatch(action)
    }
    render() {
        return (
            <div className="App">
                <h1>React+Redux+Antd实现Todo_List</h1>
                <Row className='todo-box'>
                    <Col offset={6} span={8}>
                        <Input placeholder='请输入待办事项' onChange={e => this.handleInputChange(e)} ref='myInput'/>
                    </Col>
                    <Col span={4}>
                        <Button type="primary" onClick={this.handleAdd}>添加代办事项</Button>
                    </Col>
                </Row>
                <Row className='todo-box'>
                    <Col offset={6} span={12}>
                        <List
                            bordered
                            dataSource={this.state.list}
                            renderItem={item => (
                                <List.Item className='flex'>
                                    <span>{item}</span>
                                    <Button type="danger" onClick={()=>this.handleDel(item)}>删除</Button>
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
