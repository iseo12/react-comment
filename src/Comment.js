import React, { Component } from 'react';
import Reply from './Reply';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.createComment = this.createComment.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createComment(item) {
    return (
      <div>
        <div className="added-comment-container">
          <p className="added-comment-user">Username: {item.user}</p>
          <p className="added-comment-text">{item.text}</p>
          <button className="comment-btn" onClick={() => this.delete(item.key)}>Delete</button>
        </div>
        <div className="reply-comment-container">
          <p>Reply to {item.user}</p>
          <Reply/>
        </div>
      </div>
    );
  }

  render() {
    let commentEntries = this.props.entries;
    console.log(this.createComment);
    let commentItems = commentEntries.map(this.createComment);
    console.log(this.props.intValue);

    return (
      <div className="comment-container">
        {commentItems}
      </div>
    );
  }
}

export default Comment;
