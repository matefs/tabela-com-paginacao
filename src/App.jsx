import React, { useState } from "react";
import {
  Table,
  Tag,
  Button,
  Input,
  Select,
  Typography,
  Row,
  Col,
  InputNumber,
  Popconfirm,
  Form,
} from "antd";
import { MoreOutlined, TagFilled, PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;

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
        style={{ marginLeft: "-79%" }}
      >
        Novo registro
      </Button>

      {showForm && (
       <Form
          form={form}
          onFinish={handleSubmit}
          style={{ width: '55%'}}
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

const Home = () => {
  const [itensDoProjeto, setItensDoProjeto] = useState([
    {
      id: 1,
      name: "João",
      userStatus: "Ativo",
      paymentStatus: "Pago",
      value: "1000",
    },
    {
      id:2,
      name: "ZN Logística",
      userStatus: "Inativo",
      paymentStatus: "Atrasado",
      value: "500",
    },
  ]);

  const handleDeleteItem = (index) => {
    setItensDoProjeto(itensDoProjeto.filter((item, i) => i !== index));
  };

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status do Usuário",
      dataIndex: "userStatus",
      key: "userStatus",
      render: (palavra) => {
        return palavra === "Ativo" ? (
          <Tag color="success" icon={<TagFilled />}>
            {palavra}
          </Tag>
        ) : (
          <Tag color="error" icon={<TagFilled />}>
            {palavra}
          </Tag>
        );
      },
      sorter: (a, b) => a.userStatus.localeCompare(b.userStatus),
    },
    {
      title: "Status do Pagamento",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
    },
    {
      title: "Valor",
      dataIndex: "value",
      key: "value",
      render: (valor) => `R$ ${valor}`,
    },
    {
      title: "Ações",
      key: "actions",
      render: (text, record, index) => (
        <Popconfirm
          title="Deseja realmente deletar este item?"
          onConfirm={() => handleDeleteItem(index)}
          okText="Sim"
          cancelText="Não"
        >
          <Button icon={<MoreOutlined />} />
        </Popconfirm>
      ),
    },
  ];

  const handleCreateItem = (item) => {
    setItensDoProjeto([...itensDoProjeto, item]);
  };

  const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({ 
    disabled: record.userSatatus == 'Inativo', // Column configuration not to be checked
    name: record.name,
  }), // TODO: Ajeitar essa validação para não permitir selecionar registros inativos.

};


  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Title level={2}>
        {" "}
        Gerenciamento de Projetos Personalizados para Empresas e Clientes{" "}
      </Title>
      <NovoRegistroForm onCreate={handleCreateItem} />
      <Table
         rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        rowKey="id" 
        dataSource={itensDoProjeto}
        columns={columns}
        style={{ width: "90%", marginTop: "1%" }}
      />
    </div>
  );
};

export default Home;
