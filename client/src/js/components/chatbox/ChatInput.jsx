var React = require('react');

var State = require('../../State');
var ConnectionStatus = require('../../constants/ConnectionStatus');
var MessageUtil = require('../../utils/MessageUtil');


const ENTER_KEY_CODE = 13;

var ChatInput = React.createClass({

  getInitialState: function() {
    return {
      message: '',
      disabled: true
    };
  },

  handleKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      this.setState({
        message: '',
        disabled: State.getState() !== ConnectionStatus.MATCHED
      });
      if (this.state.message && this.state.message.length) {
        var rawMessage = MessageUtil.getCreatedMessageData(this.state.message);
        State.sendChat(rawMessage);
      }
    }
  },

  handleValueChange: function(event) {
    this.setState({ message: event.target.value });
  },

  handleStateChange: function() {
    this.setState({
      message: '',
      disabled: State.getState() !== ConnectionStatus.MATCHED
    });
  },

  handleClick: function() {
    if (this.state.message && this.state.message.length) {
      var rawMessage = MessageUtil.getCreatedMessageData(this.state.message);
      State.sendChat(rawMessage);
    }
    this.setState({
      message: '',
      disabled: State.getState() !== ConnectionStatus.MATCHED
    });
  },

  componentDidMount: function() {
    State.onStateChange(this.handleStateChange);
  },

  render: function() {
    return (
      <div>
        <input type="text" value={this.state.message}
               disabled={this.state.disabled}
               onChange={this.handleValueChange}
               onKeyDown={this.handleKeyDown} />
        <button className={"waves-effect waves-light btn"}
                type="button"
                onClick={this.handleClick}
                disabled={this.state.disabled || !this.state.message.length}>
          Submit
        </button>
      </div>
    );
  }
});

module.exports = ChatInput;
