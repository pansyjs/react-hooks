/**
 * title: Modal示例
 * desc: 与Antd Modal组件配合使用
 */
import React from 'react';
import { Modal, Button, Space } from 'antd';
import { useModal } from '@pansy/react-hooks';

export default () => {
  const modal1 = useModal();
  const modal2 = useModal();

  const handleOpenModal1 = () => {
    modal1.open();
  }

  const handleOpenModal2 = () => {
    modal2.open();
  }

  return (
    <>
      <Space>
        <Button onClick={handleOpenModal1}>Open Modal1</Button>
        <Button onClick={handleOpenModal2}>Open Modal2</Button>
      </Space>

      <Modal
        title="Basic Modal1"
        visible={modal1.visible}
        onCancel={modal1.close}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      <Modal
        title="Basic Modal2"
        visible={modal2.visible}
        onCancel={modal2.close}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}
