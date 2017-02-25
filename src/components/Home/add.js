import React from 'react';

class Add extends React.Component {
  constructor(){
    super();
    this.state = {
      textIsEmpty: true
    };
    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
  }
  componentDidMount() {
    (this.refs.message).focus();
  }
  onBtnClickHandler(e) {
    let author = this.props.author;
    let message = (this.refs.message).value;

    fetch('http://localhost:3333/add', {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        author: author,
        message: message,
      })
    })
    .then(response => response.ok ? response.json() : console.error('Error while fetching deficit'))
    .then(authResult => {
        //this.setState({})
      })

    this.props.update(this);

    const messageEl = (this.refs.message);
    messageEl.value = '';
    this.setState({textIsEmpty: true});
  }
  onFieldChange(fieldName, e) {
    if (e.target.value.trim().length > 0) {
      this.setState({[''+fieldName]:false})
    } else {
      this.setState({[''+fieldName]:true})
    }
  }
  render() {
    let textIsEmpty = this.state.textIsEmpty;
    return (
      <form className='form-add'>
        <textarea
          className='form-add__text'
          onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
          placeholder='Текст'
          ref='message'
        ></textarea>
        <button
          className='form-add__btn'
          onClick={this.onBtnClickHandler}
          ref='alert_button'
          disabled={textIsEmpty}
          >
          Отправить
        </button>
      </form>
    );
  }
};

Add.propTypes = {
  author: React.PropTypes.string.isRequired,
  update: React.PropTypes.func.isRequired
}

export default Add;
