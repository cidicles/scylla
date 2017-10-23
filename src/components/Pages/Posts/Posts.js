import React, { Component } from 'react';
import Helmet from "react-helmet";
import { Link } from 'react-router';
import { lang } from '../../../il8n/lang';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion'
import { changePosts } from '../../../Actions/Index';
import './Posts.css';
import { truncate } from '../../../utils';
import { apiBase } from '../../../const';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {props};
    this.populatePosts = this.populatePosts.bind(this);
  }
  componentWillMount() {
    this.populatePosts();
  }
  populatePosts(vid){
    let feedUrl = `${apiBase}posts`;
    fetch(feedUrl).then(function(res) {
      let contentType = res.headers.get('content-type');
      if(contentType && contentType.indexOf('application/json') !== -1) {
        return res.json().then(function(json) {
          console.log(json)
          this.props.dispatch(changePosts(json));
        }.bind(this));
      } else {
        console.warn('Posts Not Loaded');
      }
    }.bind(this));
  }
  renderPosts(){
    let {posts} = this.props;
    return(
      <div className='posts'>
        {posts.data.map((post, index) => (
          <div className='post' key={`post-${index}`}>
            <Motion defaultStyle={{opacity: 0, y: 100}} style={{opacity: spring(1), y: spring(0)}}>
              {val => {
                let style = {
                  opacity: val.opacity,
                  transform: `translateY(${val.y}px)`
                };
                return (
                  <Link to={`/posts/${post.guid}`}>
                    <div style={style}>
                      <img src={post.picture_url} alt={post.name}/>
                      <h2>{truncate(post.name, 22)}</h2>
                    </div>
                  </Link>
                );
              }}
            </Motion>
          </div>
        ))}
      </div>
    )
  }
  render(){
    let {posts} = this.props;
    return (
      <div className="posts">
        <Helmet title={lang.posts.title + lang.helmet.siteTitle} />
        {posts.data ? this.renderPosts() : <div className="loading">{lang.loading}</div>}
      </div>
    );
  }
}

function mapStateToProps(state){
  let { lang, posts } = state;
  return {
    lang,
    posts
  };
}

export default connect(mapStateToProps)(Posts);
