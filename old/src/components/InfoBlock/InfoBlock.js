import React, { Component } from 'react';
import propTypes from "prop-types";
import './InfoBlock.css';

class InfoBlock extends Component {

    render() {
        let paragraphs = [];
        this.props.text.forEach(item =>  {
           paragraphs.push(
               <div key={item} className="InfoBlock_text">{item}</div>
           );
        });
        return (
            <div className="InfoBlock">
                <div className="InfoBlock_title">{this.props.title}</div>
                {paragraphs}
            </div>
        );
    }
}

InfoBlock.propTypes = {
    title: propTypes.string,
    text: propTypes.array
};

export default InfoBlock;
