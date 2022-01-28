---
title: useMqtt
nav:
  title: Hooks
  path: /hooks
group:
  title: Scene
  path: /scene
---

# useMqtt

用于处理 [Mqtt](https://github.com/mqttjs/MQTT.js) 的 Hook。

## 代码演示


## API

```ts
import type {
  IClientOptions,
  OnMessageCallback,
  OnErrorCallback,
  OnConnectCallback,
} from 'mqtt';

interface Options extends IClientOptions {
  /**
   * 手动启动连接
   * @default false
   */
  manual?: boolean;
  /** 连接成功回调 */
  onConnect?: OnConnectCallback;
  /** 收到消息回调 */
  onMessage?: OnMessageCallback;
  /** 重连回调 */
  onReconnect?: () => void;
  /** 关闭回调 */
  onClose?: () => void;
  /** 错误回调 */
  onError?: OnErrorCallback;
}

interface Result {
  messageMap?: Record<string, any>;
  mqttIns?: MqttClient;
  connect?: () => void;
  reconnect?: () => void;
  subscribe?: MqttClient['subscribe'];
  unsubscribe?: MqttClient['unsubscribe'];
  publishMessage?: MqttClient['publish'];
}

useWebSocket(url: string, options?: Options): Result;
```

### Params

| 参数      | 说明                 | 类型      | 默认值 |
|-----------|----------------------|-----------|--------|
| url | 必填，mqtt 地址 | `string`  | -      |
| options   | 可选，连接配置项     | `Options` | -      |

#### Options

| 参数              | 说明                   | 类型                                              | 默认值  |
|-------------------|------------------------|---------------------------------------------------|---------|
| manual            | 手动启动连接 | `boolean`      |`false`    |
| onConnect         | mqtt 连接成功回调     | `OnConnectCallback`     | -       |
| onMessage         | mqtt 收到消息回调 | `OnMessageCallback` | -       |
| onReconnect       | mqtt 重连回调     | `() => void`     | -       |
| onClose       | mqtt 关闭回调     | `() => void`     | -       |
| onError       | mqtt 错误回调     | `OnErrorCallback`     | -       |

其他参数请参看 [MQTT](https://github.com/mqttjs/MQTT.js#connect)

### Result

| 参数          | 说明                                                   | 类型                           |
|---------------|--------------------------------------------------------|--------------------------------|
| messageMap | 最新消息                                               | `Record<string, any>` |
| mqttIns   | Mqtt实例                                         | `MqttClient`            |
| connect       | 手动连接 mqtt，如果当前已有连接，则关闭后重新连接 | `() => void`                   |
| reconnect    | 手动重连 mqtt                         | `() => void`                 |
| subscribe    | 订阅                        | `MqttClient['subscribe']`                 |
| unsubscribe    | 取消订阅                       | `MqttClient['unsubscribe']`                 |
| publishMessage    | 向服务器发送消息                 | `MqttClient['publish']`                 |
