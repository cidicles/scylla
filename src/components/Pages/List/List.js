import React, { Component } from 'react';
import Helmet from "react-helmet";
import { lang } from '../../../il8n/lang';
import { connect } from 'react-redux';
import './List.css';

class List extends Component {
  render() {
    return (
      <div>
        <Helmet title={ lang.list.title + lang.helmet.siteTitle } />
        <div className="list">
          {lang.list.list.map((item, index) => (
            <div key={`list-${ index }`}>
              <h2>{item.title}</h2>
              <h3>{item.tagline}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { lang: state.lang };
}

export default connect(mapStateToProps)(List);
