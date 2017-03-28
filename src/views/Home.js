import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import * as listActions from '../components/Home/PreviewListRedux';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <PreviewList articleList={this.props.list} {...this.props.listActions}/>
            </div>
        )
    }
}

export default connect(state=>{
    return {
        list:state.list.articleList
    }
},dispatch=>{
    return {
        listActions: bindActionCreators(listActions,dispatch)
    }
})(Home);