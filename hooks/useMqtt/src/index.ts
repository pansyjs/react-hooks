import { useRef, useState, useEffect } from 'react';
import * as mqtt from 'mqtt';
import { useUnmount } from '@pansy/use-unmount';
import { useLatest } from '@pansy/use-latest';

import type { Options } from './types';
import type { MqttClient } from 'mqtt';

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
    reconnectLimit = 3,
    reconnectInterval = 3 * 1000,
    manual = false,
    onOpen,
    onClose,
    onMessage,
    onError,
    ...rest
  }: Options = {}
) {
  const onOpenRef = useLatest(onOpen);
  const onCloseRef = useLatest(onClose);
  const onMessageRef = useLatest(onMessage);
  const onErrorRef = useLatest(onError);

  const reconnectTimesRef = useRef(0);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const mqttRef = useRef<MqttClient>();

  const unmountedRef = useRef(false);

  /** 连接状态 */
  const [readyState, setReadyState] = useState<ReadyState>(ReadyState.Closed);

  useEffect(
    () => {
      if (!manual) {
        // connect();
      }
    },
    [url, manual]
  );

  useUnmount(() => {
    unmountedRef.current = true;
    // disconnect();
  });

  const connectMqtt = () => {
    if (mqttRef.current) {
      mqttRef.current.end();
    }

    mqttRef.current = mqtt.connect(url, rest);

    setReadyState(ReadyState.Connecting);

    mqttRef.current.on('connect', (event) => {
      if (unmountedRef.current) {
        return;
      }

      onOpenRef.current?.(event);
      reconnectTimesRef.current = 0;
      setReadyState(ReadyState.Open);
    });

    mqttRef.current.on('message', (...args) => {
      if (unmountedRef.current) {
        return;
      }

      onMessageRef.current?.(...args);
    });

    mqttRef.current.on('error', (error) => {
      if (unmountedRef.current) {
        return;
      }

      onErrorRef.current?.(error);
    });
  }

  return {
    mqttIns: mqttRef.current,
  }
}
