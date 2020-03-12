import React, {Component} from "react";
import {Route} from 'react-router-dom'

import MesssageDetail from './message-detail'
import MyNavLink from "../components/my-nav-link";

export default class Message extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        //模拟发送ajax请求异步获取数据
        setTimeout(() => {
            const messages = [
                {id: 1, title: 'message001'},
                {id: 2, title: 'message002'},
                {id: 3, title: 'message003'}
            ]
            //更新状态
            this.setState({messages})
        }, 1000)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((m, index) => (
                            <li key={index}>
                                <MyNavLink to={`/home/message/messagedetail/${m.id}`}>{m.title}</MyNavLink>
                            </li>
                        ))
                    }
                </ul>
                <Route path='/home/message/messagedetail/:id' component={MesssageDetail}/>
            </div>
        )
    }
}
