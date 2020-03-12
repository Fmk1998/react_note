import React, {Component} from "react";

export default class App extends Component {

    state = {
        allMessages: [
            {id: 1, title: 'message001', content: '我爱你，中国'},
            {id: 2, title: 'message002', content: '我爱你，中国'},
            {id: 3, title: 'message003', content: '我爱你，中国'}
        ]
    }


    render() {

        //得到请求参数中的id
        const {id} = this.props.match.params
        //查询得到对应的message
        const message = this.state.allMessages.find((m) => m.id === id*1) //返回第一个结果尾true的数组元素

        return (
            <ul>
                <li>ID:{message.id}</li>
                <li>TITLE:{message.title}</li>
                <li>CONTENT:{message.content}</li>
            </ul>
        )
    }
}
