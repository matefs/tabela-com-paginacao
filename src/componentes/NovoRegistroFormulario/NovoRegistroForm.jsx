import React, { useState } from "react";
import { Form, Input, Select, Button, InputNumber, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";


const NovoRegistroForm = ({ onCreate }) => {
  const [form] = Form.useForm();
  const [showForm, setShowForm] = useState(false);

  const handleNewRegistroClick = () => {
    showForm == false ? setShowForm(true) : setShowForm(false);
  };

  const handleSubmit = (values) => {
    onCreate(values);
    form.resetFields();
    setShowForm(false)
  };

  return (
    <>
      <Button
        icon={<PlusOutlined />}
        onClick={handleNewRegistroClick}
        style={{}}
      >
        Novo registro
      </Button>

      {showForm && (
       <Form
          form={form}
          onFinish={handleSubmit}
          style={{ width: '55%', marginTop:'1%'}}
        >
          <Form.Item
            name="name"
            label="Nome do cliente"
            rules={[{ required: true, message: 'Por favor, insira o nome do cliente' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="userStatus"
            label="Status do Usuário"
            rules={[{ required: true, message: 'Por favor, selecione o status do usuário' }]}
          >
            <Select>
              <Select.Option value="Ativo">Ativo</Select.Option>
              <Select.Option value="Inativo">Inativo</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="paymentStatus"
            label="Status do Pagamento"
            rules={[{ required: true, message: 'Por favor, selecione o status do pagamento' }]}
          >
            <Select>
              <Select.Option value="Pago">Pago</Select.Option>
              <Select.Option value="Atrasado">Atrasado</Select.Option>
              <Select.Option value="Pendente">Pendente</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="value"
            label="Valor"
            rules={[{ required: true, message: 'Por favor, insira o valor' },{ type: 'number', max: 9999999, message: 'O valor máximo permitido é 9999999' }]}
          >
            <InputNumber maxLength={9} style={{ width: '100%' }} />
          </Form.Item>

          <Row justify="center">
            <Col>
              <Button type="primary" htmlType="submit">
                Salvar
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
};

export default NovoRegistroForm;
