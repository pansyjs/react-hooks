/* eslint-disable no-undef */
import { useRef, useState, useEffect } from 'react';
import { useLatest } from '@pansy/use-latest';
import { useUnmount } from '@pansy/use-unmount';
import { useMemoizedFn } from '@pansy/use-memoized-fn';

import type { Options } from './types';

export enum ReadyState {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
}

/**
 * 用于处理 WebSocket 的 Hook
 * @param url webSocket 地址
 * @param options 连接配置项
 * @returns
 */
export function useWebSocket(
  url: string,
  {
    reconnectLimit = 3,
    reconnectInterval = 3 * 1000,
    manual = false,
    protocols,
    onOpen,
    onClose,
    onMessage,
    onError,
  }: Options = {}
) {
  const onOpenRef = useLatest(onOpen);
  const onCloseRef = useLatest(onClose);
  const onMessageRef = useLatest(onMessage);
  const onErrorRef = useLatest(onError);

  const reconnectTimesRef = useRef(0);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const websocketRef = useRef<WebSocket>();

  const unmountedRef = useRef(false);

  /** 最新消息 */
  const [latestMessage, setLatestMessage] = useState<WebSocketEventMap['message']>();
  /** 当前 webSocket 连接状态 */
  const [readyState, setReadyState] = useState<ReadyState>(ReadyState.Closed);

  useEffect(
    () => {
      if (!manual) {
        connect();
      }
    },
    [url, manual]
  );

  useUnmount(() => {
    unmountedRef.current = true;
    disconnect();
  });

  const reconnect = () => {
    if (
      reconnectTimesRef.current < reconnectLimit &&
      websocketRef.current?.readyState !== ReadyState.Open
    ) {
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
      }

      reconnectTimerRef.current = setTimeout(() => {
        connectWs();
        reconnectTimesRef.current++;
      }, reconnectInterval);
    }
  }

  const connectWs = () => {
    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
    }

    if (websocketRef.current) {
      websocketRef.current.close();
    }

    const ws = new WebSocket(url, protocols);
    setReadyState(ReadyState.Connecting);


    ws.onerror = (event) => {
      if (unmountedRef.current) {
        return;
      }
      reconnect();
      onErrorRef.current?.(event, ws);
      setReadyState(ws.readyState || ReadyState.Closed);
    };

    ws.onopen = (event) => {
      if (unmountedRef.current) {
        return;
      }
      onOpenRef.current?.(event, ws);
      reconnectTimesRef.current = 0;
      setReadyState(ws.readyState || ReadyState.Open);
    };

    ws.onmessage = (message: WebSocketEventMap['message']) => {
      if (unmountedRef.current) {
        return;
      }
      onMessageRef.current?.(message, ws);
      setLatestMessage(message);
    };

    ws.onclose = (event) => {
      if (unmountedRef.current) {
        return;
      }
      reconnect();
      onCloseRef.current?.(event, ws);
      setReadyState(websocketRef.current?.readyState || ReadyState.Closed);
    };

    websocketRef.current = ws;
  }

  /**
   * 发送消息
   * @param message
   */
  const sendMessage: WebSocket['send'] = (message) => {
    if (readyState === ReadyState.Open) {
      websocketRef.current?.send(message);
    } else {
      throw new Error('WebSocket disconnected');
    }
  };

  /**
   * 手动连接 webSocket，如果当前已有连接，则关闭后重新连接
   */
  const connect = () => {
    reconnectTimesRef.current = 0;
    connectWs();
  };

  /**
   * 手动断开 webSocket 连接
   */
  const disconnect = () => {
    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
    }

    reconnectTimesRef.current = reconnectLimit;
    websocketRef.current?.close();
  };

  return {
    latestMessage,
    sendMessage: useMemoizedFn(sendMessage),
    connect: useMemoizedFn(connect),
    disconnect: useMemoizedFn(disconnect),
    readyState,
    webSocketIns: websocketRef.current,
  };
}
