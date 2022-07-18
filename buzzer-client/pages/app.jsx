import React from 'react';

//test comment

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
    <div className="container">
      <button onClick={this.handleClick}>Call</button>
    </div>
    );
  }
}

export default App;
