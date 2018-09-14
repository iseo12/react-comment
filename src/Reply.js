import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';

class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = {items:[]};
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.userName = React.createRef();
  }

  addComment(e) {
    if (this._inputElement.value !== "") {
      let newComment = {
        text: this._inputElement.value,
        user: this.userName.current.value,
        key: Date.now()
      };

      this.setState((prevState) => {
          return {
            items: prevState.items.concat(newComment)
          };
      });

      this.userName.current.value = "";
      this._inputElement.value = "";

    }

    console.log(this.state.items);
    e.preventDefault();
  }

  deleteComment(key) {
    let filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="reply">
        <Comment entries={this.state.items} delete={this.deleteComment}/>
        <form className="new-comment-container" onSubmit={this.addComment}>
          <input ref={this.userName} id="username" placeholder="username"></input>
          <textarea ref={(a) => this._inputElement = a} id="commentText" placeholder="comment.."></textarea>
          <button type="submit" className="comment-btn">Add</button>
        </form>
      </div>
    );
  }
}

export default Reply;
