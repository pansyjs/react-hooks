/**
 * title: initValue
 * desc: 对话框组件需要传递一些数据时使用，例如修改对话框表单。
 */
 import React from 'react';
 import { Modal, Button } from 'antd';
 import { useModal } from '@pansy/react-hooks';

 export default () => {
   const modal = useModal<string>();

   const handleOpenModal = () => {
     modal.open('Tom');
   }

   return (
    <>
      <Button onClick={handleOpenModal}>Open Modal</Button>

      <Modal
         title="Basic Modal"
         visible={modal.visible}
         onCancel={modal.close}
       >
         <p>{modal.initValue}</p>
         <p>Some contents...</p>
         <p>Some contents...</p>
       </Modal>
     </>
   )
}
