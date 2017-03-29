import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PreviewListActions from './PreviewListRedux';
import Preview from './Preview';

class PreviewList extends Component {

    componentDidMount() {
        const {loadArticles} = this.props.preActions;
        loadArticles();
    }

    render() {
        const { loading,error,articleList } = this.props;
        if(error){
            return <p className="message">Oops, something is wrong!</p>
        }
        if(loading){
            return <p className="message">Loading...</p>
        }
        return  (
            <div>
                {
                    articleList.map(item => 
                        <Preview {...item} key={item.id}></Preview>
                    )
                }
            </div>
        )
    }
}

PreviewList.propTypes= {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    articleList: React.PropTypes.arrayOf(React.PropTypes.object),
    loadArticles: PropTypes.func,
};

export default connect(state=>{
    return {
        loading: state.list.loading,
        error: state.list.error,
        articleList: state.list.articleList
    }
},dispatch=>{
    return {
        preActions: bindActionCreators(PreviewListActions,dispatch)
    }
})(PreviewList);