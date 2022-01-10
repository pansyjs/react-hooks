import type {
  IClientOptions,
  OnMessageCallback,
  MqttClient,
  OnErrorCallback,
  OnConnectCallback,
} from 'mqtt';

export interface Options extends IClientOptions {
  /**
   * 重试次数
   * @default 3
   */
  reconnectLimit?: number;
  /**
   * 重试时间间隔（ms）
   * @default 3000
   */
  reconnectInterval?: number;
  /**
   * 手动启动连接
   * @default false
   */
  manual?: boolean;
  /** 连接成功回调 */
  onOpen?: OnConnectCallback;
  /** 关闭回调 */
  onClose?: () => void;
  /** 收到消息回调 */
  onMessage?: OnMessageCallback;
  /** 错误回调 */
  onError?: OnErrorCallback;
}
