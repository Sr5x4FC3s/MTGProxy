import React from 'react';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDropDown : false
    };
    this.toggle = this.toggle.bind(this);
    this.params2Parent = this.params2Parent.bind(this);
  }

  toggle() {
    this.setState({
      toggleDropDown : !this.state.toggleDropDown
    });
  }

  params2Parent(e) {
    this.props.increment(this.props.target, e.target.id)
    e.preventDefault();
  }

  render() {
    return (
      <div id="drop-down-menu">
        <div className="open-close">
          <button id="open-close-button" onClick={this.toggle}>Select Amount</button>
        </div>
          {this.state.toggleDropDown ? 
          (
            <div id="dropdown-container">
              <div><button id="add-one-button" onClick={this.params2Parent}>add 1 copies</button></div>
              <div><button id="add-two-button" onClick={this.params2Parent}>add 2 copies</button></div>
              <div><button id="add-three-button" onClick={this.params2Parent}>add 3 copies</button></div>
            </div>
          ) : (
                null
              )
        }
      </div>
    )
  }
};