import React from 'react';
import Message from './message';


class Chat extends React.Component {
  render() {
    let data = this.props.data;
    let author = this.props.author;
    let messageTemplate;

    if (data.length > 0) {
      messageTemplate = data.map(function(item, index) {
        return (
          <div key={index}>
            <Message data={item}/>
          </div>
        )
      })
    } else {
      messageTemplate = <p>К сожалению сообщений нет</p>
    }

    return (
      <div className = 'section'>
        <div className='head'>
          Переписка с пользователем
        </div>
        <div className='messages'>
          {messageTemplate}
        </div>
      </div>
    );
  }
};

Chat.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default Chat;
