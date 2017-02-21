import React from 'react';
import avatar from './avatar.png';

class Message extends React.Component {
  render() {
    const author = this.props.data.author,
        message = this.props.data.message;

    return (
      <div className='message'>
        <div className = 'avatar'>
          <a>
            <img  className='avatar__img' alt='avatar' src={avatar} />
          </a>
        </div>
        <div className= 'info'>
          <a className='info__author'>{author}: </a>
          <p className='info__message'>{message}</p>
        </div>
      </div>
    )
  }
};

Message.propTypes = {
  data: React.PropTypes.shape({
    author: React.PropTypes.string.isRequired,
    message: React.PropTypes.string.isRequired,
  })
}

export default Message;
