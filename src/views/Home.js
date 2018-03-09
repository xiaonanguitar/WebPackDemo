import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import * as listActions from '../components/Home/PreviewListRedux';

class Home extends Component {
    render() {
        console.log('zzzz');
        console.log(this.context.store.getState());
        return (
            <div>
                <h1>Home</h1>
                <PreviewList articleList={this.props.list} {...this.props.listActions}/>
            </div>
        )
    }
}

Home.contextTypes = {
    store: PropTypes.object,
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