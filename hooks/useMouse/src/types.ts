export interface CursorState {
  /** 距离显示器左侧的距离 */
  screenX: number;
  /** 距离显示器顶部的距离 */
  screenY: number;
  /** 距离当前视窗左侧的距离 */
  clientX: number;
  /** 距离当前视窗顶部的距离 */
  clientY: number;
  /** 距离完整页面左侧的距离 */
  pageX: number;
  /** 距离完整页面顶部的距离 */
  pageY: number;
  /** 距离指定元素左侧的距离 */
  elementX: number;
  /** 距离指定元素顶部的距离 */
  elementY: number;
  /** 指定元素的高 */
  elementH: number;
  /** 指定元素的宽 */
  elementW: number;
  /** 指定元素点距离完整页面左侧的距离 */
  elementPosX: number;
  /** 指定元素距离完整页面顶部的距离 */
  elementPosY: number;
}
