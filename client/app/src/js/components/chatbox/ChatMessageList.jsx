const React = require('react');

const ChatMessageText = require('./ChatMessageText.jsx');
const ChatMessageSticker = require('./ChatMessageSticker.jsx');
const MessageType = require('../../constants/MessageType');
const State = require('../../State');


const ChatMessageList = React.createClass({

  getInitialState: function() {
    return {
      chatMessages: State.getMessages()
    };
  },

  componentDidMount: function() {
    State.onMessageChange(this._onChatMessageListChange);
  },

  _onChatMessageListChange: function() {
    this.setState({
      chatMessages: State.getMessages()
    });
  },

  componentDidUpdate: function() {
    this._scrollToBottom();
  },

  _scrollToBottom: function() {
    const ul = this.refs.holder.getDOMNode();
    ul.scrollTop = ul.scrollHeight;
  },

  render: function() {
    const items = this.state.chatMessages.map(function(msg) {
      switch (msg.content.type) {
        case MessageType.TEXT:
          return <ChatMessageText key={msg.id} message={msg} />;
        case MessageType.STICKER:
          return <ChatMessageSticker key={msg.id} message={msg} />;
        default:
          return null;
      }
    });
    return (
      <div className="chat-messages-holder" ref="holder">
        <ul className={'chat-message-ul'}>
          {items}
        </ul>
      </div>
    );
  }
});

module.exports = ChatMessageList;
