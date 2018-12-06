import React, { Component } from "react";
import './style/app.less'

class App extends Component {
    componentDidMount() {
        document.title='react 测试';
    }
    render() {
        return (
            <div className='content_warp'>
                <div className='left_nav'></div>
                <div className="right_content"></div>
            </div>
        )
    }
}

export default App;