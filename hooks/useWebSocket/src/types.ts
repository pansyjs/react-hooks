/* eslint-disable no-undef */
export interface Options {
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
  /** 子协议 */
  protocols?: string | string[];
  /** 连接成功回调 */
  onOpen?: (event: WebSocketEventMap['open']) => void;
  /** 关闭回调 */
  onClose?: (event: WebSocketEventMap['close']) => void;
  /** 收到消息回调 */
  onMessage?: (message: WebSocketEventMap['message']) => void;
  /** 错误回调 */
  onError?: (event: WebSocketEventMap['error']) => void;
}
