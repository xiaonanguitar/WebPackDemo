import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Preview from './Preview';

class PreviewList extends Component {

    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        const { loading,error,articleList } = this.props;
        if(error){
            return <p className="message">Oops, something is wrong!</p>
        }
        if(loading){
            return <p className="message">Loading...</p>
        }
        if(articleList.length===0){
             return <div></div>
        }
        return (
        articleList.map(item => {
                <Preview {...item} key={item.id}></Preview>
            })
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
        error: state.list.error
    }
})(PreviewList);