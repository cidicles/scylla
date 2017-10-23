import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { lang } from '../../../il8n/lang';
import { connect } from 'react-redux';
import { changePost } from '../../../Actions/Index';
import { apiBase } from '../../../const';
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {props};
  }
  componentWillMount() {
    this.populatePosts();
  }
  populatePosts(vid){
    let _this = this;
    let requestedPid = this.props.routeParams.pid;
    let feedUrl = `${apiBase}posts/${requestedPid}`;
    fetch(feedUrl).then(function(res) {
      let contentType = res.headers.get('content-type');
      if(contentType && contentType.indexOf('application/json') !== -1) {
        return res.json().then(function(json) {
          _this.props.dispatch(changePost(json));
        });
      } else {
        console.warn('Post Not Loaded');
      }
    });
  }
  renderPost(){
    let {post} = this.props;
    return(
      <div className='post'>
        {post.data.map((item, index) => (
          <div key={`post-${index}`}>
            <img src={item.picture_url} alt={item.name} />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    )
  }
  render() {
    let {post} = this.props;
    return (
      <div className="post">
        <Helmet title={lang.post.title + lang.helmet.siteTitle} />
        {post.data ? this.renderPost() : <div className="loading">{lang.loading}</div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { lang, post } = state;
  return {
    lang,
    post
  };
}

export default connect(mapStateToProps)(Post);
