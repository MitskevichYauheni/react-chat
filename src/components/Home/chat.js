import React from 'react';
import Message from './message';


class Chat extends React.Component {
  constructor(){
    super();
    this.state = {
      visible: false
    };
    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
    this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
  }
  onCheckRuleClick(e) {
    this.setState({visible: !this.state.visible});
  }
  onBtnClickHandler(e) {
    this.onCheckRuleClick(this);
    fetch('http://localhost:3333/', {
      method: 'delete',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
      })
    })
    .then(response => response.ok ? response.json() : console.error('Error while fetching deficit'))
    .then(authResult => {
        //this.setState({})
      })
  }
  render() {
    let data = this.props.data,
         author = this.props.author,
         visible = this.state.visible,
         messageTemplate;

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
        <div className='header'>
          <div className='header-info'>
            <h4 className='header-info__h4'>Переписка с пользователем </h4>
            <a className='header-info__interlocutor'>
              {this.props.interlocutor}
            </a>
          </div>
          <div className='header-capabilities'>
            <a className='header-capabilities__open' onClick={this.onCheckRuleClick}>
              ...
            </a>
            <div className={'header-capabilities__window ' + (visible ? '' : 'none')}>
              <a className='header-capabilities__window__link' onClick={this.onBtnClickHandler}>
                Удалить все сообщения
              </a>
            </div>
          </div>
        </div>
        <div className='messages'>
          {messageTemplate}
        </div>
      </div>
    );
  }
};

Chat.propTypes = {
  data: React.PropTypes.array.isRequired,
  interlocutor: React.PropTypes.string.isRequired
}

export default Chat;
