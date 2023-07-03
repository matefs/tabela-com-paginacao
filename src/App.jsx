import React, { useState } from "react";
import {
  Table,
  Tag,
  Button,
  Typography,
  Popconfirm,
} from "antd";
import { MoreOutlined, TagFilled,  DeleteOutlined } from "@ant-design/icons";
import NovoRegistroForm from "./componentes/NovoRegistroForm";

const { Title } = Typography;


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

      <div style={{marginLeft:'10%', width: '100%'}}>
      <NovoRegistroForm onCreate={handleCreateItem} />

       <Button style={{ marginLeft: '1%' }} icon={<DeleteOutlined />}> 
        Apagar todos selecionados
        </Button>

      </div>

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
