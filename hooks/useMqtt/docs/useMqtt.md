---
title: useMqtt
nav:
  title: Hooks
  path: /hooks
group:
  path: /
---

# useMqtt

用于处理 [Mqtt](https://github.com/mqttjs/MQTT.js) 的 Hook。

## 代码演示

### 基础用法

<code src="./demo/demo01.tsx" />

## API

```ts
import type {
  Packet,
  IClientOptions,
  OnMessageCallback,
  OnErrorCallback,
  OnConnectCallback,
  PacketCallback,
  ClientSubscribeCallback,
  ISubscriptionGrant,
  IClientSubscribeOptions,
} from 'mqtt';

interface Result {
  messageMap?: Record<string, any>;
  mqttIns?: MqttClient;
  connect?: () => void;
  reconnect?: () => void;
  subscribe?: (    
    topic: string,
    opts?: IClientSubscribeOptions,
    callback?: ClientSubscribeCallback
  ) => Promise<ISubscriptionGrant>;
  unsubscribe?: (    
    topic: string | string[],
    opts?: Object,
    callback?: PacketCallback
  ) => Promise<Packet>;
  publish?: (    
    topic: string,
    message: string | Buffer,
    opts?: PublishOptions,
    callback?: PacketCallback,
  ) => Promise<Packet>;
}

useMqtt(url: string, options?: Options): Result;
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
| subscribe    | 订阅                        | `function`                 |
| unsubscribe    | 取消订阅                       | `function`                 |
| publish    | 向服务器发送消息                 | `function`                 |
