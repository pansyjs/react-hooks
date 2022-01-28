import type {
  IClientOptions,
  OnMessageCallback,
  OnErrorCallback,
  OnConnectCallback,
} from 'mqtt';

export interface Options extends IClientOptions {
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
