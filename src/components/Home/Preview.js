import React, { Component, PropTypes } from 'react';
import './Preview.css';

class Preview extends Component {
    
    render() {
        
        return (
            <article className="article-preview-item">
                <h1 className="tiitle">{this.props.title}</h1>
                <span className="date">{this.props.date}</span>
                <p className="desc">{this.props.description}</p>
            </article>
        )
    }
}


Preview.propTypes = {
    titile: React.PropTypes.string,
    link: React.PropTypes.string
};

export default Preview;