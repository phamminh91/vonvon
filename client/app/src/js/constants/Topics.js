var keyMirror = require('react/lib/keyMirror');


var Topics = keyMirror({
  STATE_CHANGED: null,

  STREAM_LOCAL_RECEIVED: null,
  STREAM_REMOTE_RECEIVED: null,
  STREAM_LOCAL_CHANGED: null,

  MESSAGE_RECEIVED: null,
  MESSAGE_SEND: null,
  MESSAGE_CHANGED: null,

  CLOSE_EMOTICON_PICKER: null,

  REQUEST_NEW_PARTNER: null,
  ID_LOCAL_CHANGED: null,
  ID_PARTNER_CHANGED: null,

  CHAT_CHANNEL_OPENED: null,
  CHAT_CHANNEL_CLOSED: null,
});

module.exports = Topics;
