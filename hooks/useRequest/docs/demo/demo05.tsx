/**
 * title: checkSuccess
 * desc:
 *   如果设置了 checkSuccess，通过返回结果决定是否执行 onSuccess 回调
 */
import { Button, message } from 'antd';
import { useRequest } from '@pansy/react-hooks';

function getUsername(): Promise<{ code: number; data?: string; message: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 400001,
        message: 'Success',
      });
    }, 1000);
  });
}

export default () => {
  const { run } = useRequest(getUsername, {
    manual: true,
    checkSuccess: (response) => response?.code === 0,
    onSuccess: () => {
      message.success('请求成功')
    }
  });

  return (
    <Button onClick={() => { run() }}>
      测试
    </Button>
  );
};
