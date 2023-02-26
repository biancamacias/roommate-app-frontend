import React from 'react'
import ReactDOM from 'react-dom'

'use strict';

const e = React.createElement;

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You submitted this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#submit_button_container');
const root = ReactDOM.createRoot(domContainer);root.render(e(SubmitButton));