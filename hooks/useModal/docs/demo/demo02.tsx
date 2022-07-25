/**
 * title: Drawer示例
 * desc: 与Antd Drawer组件配合使用
 */
import React from 'react';
import { Drawer, Button, Space } from 'antd';
import { useModal } from '@pansy/react-hooks';

export default () => {
  const drawer1 = useModal();
  const drawer2 = useModal();

  const handleOpenDrawer1 = () => {
    drawer1.open();
  }

  const handleOpenDrawer2 = () => {
    drawer2.open();
  }

  return (
    <>
      <Space>
        <Button onClick={handleOpenDrawer1}>Open Drawer1</Button>
        <Button onClick={handleOpenDrawer2}>Open Drawer2</Button>
      </Space>

      <Drawer
        title="Basic Drawer1"
        visible={drawer1.visible}
        onClose={drawer1.close}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

      <Drawer
        title="Basic Drawer2"
        visible={drawer2.visible}
        onClose={drawer2.close}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}
