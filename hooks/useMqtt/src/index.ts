import { useRef, useState, useEffect } from 'react';
import * as mqtt from 'mqtt';
import { useUnmount } from '@pansy/use-unmount';
import { useLatest } from '@pansy/use-latest';
import { useMemoizedFn } from '@pansy/use-memoized-fn'

import type { Options } from './types';
import type { Client, OnMessageCallback } from 'mqtt';

export enum ReadyState {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
}

/**
 * 用于处理 Mqtt 的 Hook
 * @param url
 * @param options
 */
export function useMqtt(
  url: string,
  {
    manual = false,
    onConnect,
    onClose,
    onReconnect,
    onMessage,
    onError,
    ...rest
  }: Options = {}
) {
  const onConnectRef = useLatest(onConnect);
  const onCloseRef = useLatest(onClose);
  const onReconnectRef = useLatest(onReconnect);
  const onMessageRef = useLatest(onMessage);
  const onErrorRef = useLatest(onError);

  const mqttRef = useRef<Client>();

  const unmountedRef = useRef(false);

  /** 连接状态 */
  const [readyState, setReadyState] = useState<ReadyState>(ReadyState.Closed);
  const [messageMap, setMessageMap] = useState<Record<string, any>>({});

  useEffect(() => {
    if (!manual) {
      connectMqtt();
    }
  }, [url, manual]);

  useUnmount(() => {
    unmountedRef.current = true;
    disconnect();
  });

  const connectMqtt = () => {
    if (mqttRef.current) {
      mqttRef.current.end();
    }

    const mt = mqtt.connect(url, rest);

    setReadyState(ReadyState.Connecting);

    mt.on('connect', (event) => {
      if (unmountedRef.current) {
        return;
      }

      onConnectRef.current?.(event);
      setReadyState(ReadyState.Open);
    });

    mt.on('reconnect', (...args) => {
      if (unmountedRef.current) {
        return;
      }

      onReconnectRef.current?.(...args);
    });

    mt.on('message', (...args) => {
      if (unmountedRef.current) {
        return;
      }

      onMessageRef.current?.(...args);
      handleMessage(...args);
    });

    mt.on('close', () => {
      if (unmountedRef.current) {
        return;
      }

      onCloseRef.current?.();
    });

    mt.on('error', (error) => {
      if (unmountedRef.current) {
        return;
      }

      onErrorRef.current?.(error);
    });

    mqttRef.current = mt;
  }

  const disconnect = () => {
    mqttRef.current?.end();
  };

  const handleMessage: OnMessageCallback = (topic: string, payload: Buffer) => {
    const data = JSON.parse(payload.toString());

    setMessageMap((prev) => ({
      ...prev,
      [topic]: data,
    }))
  };

  /**
   * 向服务端推送消息
   * @param args
   * @returns
   */
  const publishMessage = (...args: Parameters<Client['publish']>) => {
    if (readyState === ReadyState.Open) {
      mqttRef.current?.publish(...args);
    } else {
      throw new Error('WebSocket disconnected');
    }

    return mqttRef.current;
  }

  const reconnect = () => {
    mqttRef.current?.reconnect();
  }

  const subscribe = (...args: Parameters<Client['subscribe']>) => {
    mqttRef.current?.subscribe(...args);
  }

  const unsubscribe= (...args: Parameters<Client['unsubscribe']>) => {
    mqttRef.current?.unsubscribe(...args);
  }

  return {
    messageMap,
    mqttIns: mqttRef.current,
    connect: useMemoizedFn(connectMqtt),
    reconnect: useMemoizedFn(reconnect),
    disconnect: useMemoizedFn(disconnect),
    subscribe: useMemoizedFn(subscribe),
    unsubscribe: useMemoizedFn(unsubscribe),
    publishMessage: useMemoizedFn(publishMessage),
  }
}
