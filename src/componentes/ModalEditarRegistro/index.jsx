import React, { useState } from 'react';
import { Modal } from 'antd';

export default function ModalEditarRegistro({ mostrarModalBooleano, setMostrarModalBooleano }) {
  const handleOk = () => {
    setMostrarModalBooleano(false);
  };

  const handleCancel = () => {
    setMostrarModalBooleano(false);
  };

  return (
    <Modal title="Basic Modal" open={mostrarModalBooleano} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}