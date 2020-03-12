import React,{Component} from "react";

export default class News extends Component {

    state={
        newsArr:[
            'news001',
            'news002',
            'news003'
        ]
    }

    render() {
        const {newsArr} = this.state
        return (
            <ul>
                {
                    newsArr.map((news,index)=><li key={index}>{news}</li>)
                }
            </ul>
        )
    }
}
