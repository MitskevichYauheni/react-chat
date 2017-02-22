import React from 'react';
import Chat from './Home/chat';
import Add from './Home/add';

class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      messages: []
    }
  }
  componentWillMount () {
    this.update(this);
  }
  update(e) {
    setInterval(() =>
      fetch('http://localhost:3333/', {
        method: 'post',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
        })
      })
      .then(response => response.ok ? response.json() : console.error('Error while fetching deficit'))
      .then(authResult => {
        console.log(authResult)
          this.setState({messages: authResult.messages})
        }),
    2000);
  }
  render() {
    console.log('render');
    return (
      <div className='app'>
        <Chat data={this.state.messages} interlocutor={'Александр'}/>
        <Add update={this.update.bind(this)} author={'Евгений'} />
      </div>
    );
  }
};

export default Home;
