import React, { useRef, useMemo } from 'react';
import { Button } from 'antd';
import { useWebSocket } from '@pansy/react-hooks';

enum ReadyState {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
}

export default () => {
  const messageHistory = useRef<any[]>([]);

  const {
    readyState,
    sendMessage,
    latestMessage,
    disconnect,
    connect
  } = useWebSocket('wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self');

  messageHistory.current = useMemo(
    () => messageHistory.current.concat(latestMessage),
    [latestMessage],
  );

  return (
    <div>
      {/* send message */}
      <Button
        onClick={() => sendMessage?.(`${Date.now()}`)}
        disabled={readyState !== ReadyState.Open}
        style={{ marginRight: 8 }}
      >
        ✉️ send
      </Button>
      {/* disconnect */}
      <Button
        onClick={() => disconnect?.()}
        disabled={readyState !== ReadyState.Open}
        style={{ marginRight: 8 }}
      >
        ❌ disconnect
      </Button>
      {/* connect */}
      <Button onClick={() => connect?.()} disabled={readyState === ReadyState.Open}>
        {readyState === ReadyState.Connecting ? 'connecting' : '📞 connect'}
      </Button>
      <div style={{ marginTop: 8 }}>readyState: {readyState}</div>
      <div style={{ marginTop: 8 }}>
        <p>received message: </p>
        {messageHistory.current.map((message, index) => (
          <p key={index}>{message?.data}</p>
        ))}
      </div>
    </div>
  );
};
