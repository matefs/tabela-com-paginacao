import React, { useState } from "react";
import {
  Table,
  Tag,
  Button,
  Typography,
} from "antd";
import {TagFilled,  DeleteOutlined } from "@ant-design/icons";
import NovoRegistroForm from "./componentes/NovoRegistroFormulario/NovoRegistroForm";
import BotaoDropDown from './componentes/BotaoDropdown/BotaoDropDown';

const { Title } = Typography;


const Home = () => {
  const [listaDeRegistrosASeremExcluidos, setlistaDeRegistrosASeremExcluidos] = useState([]);
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
    {
      id: 3,
      name: "Empresa C",
      userStatus: "Ativo",
      paymentStatus: "Pendente",
      value: "7000",
    },
    {
      id: 4,
      name: "Empresa D",
      userStatus: "Inativo",
      paymentStatus: "Pago",
      value: "2000",
    },
    {
      id: 5,
      name: "Empresa E",
      userStatus: "Ativo",
      paymentStatus: "Atrasado",
      value: "4000",
    }

  ]);

 const handleDeleteItem = (id) => {
  setItensDoProjeto(itensDoProjeto.filter((item) => item.id !== id));
};

  const handleDeleteRegistrosSelecionados = () => {
  setItensDoProjeto(itensDoProjeto.filter((item) => {
    return !listaDeRegistrosASeremExcluidos.some((segundoItem) => segundoItem == item);
  }))
  setlistaDeRegistrosASeremExcluidos([])
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
      render: (text, record) => (
       <BotaoDropDown handleDeleteItem={handleDeleteItem} record={record}></BotaoDropDown>
      ),
    },
  ];

  const handleCreateItem = (item) => {
    setItensDoProjeto([...itensDoProjeto, item]);
  };

  const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    // todo aq
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    setlistaDeRegistrosASeremExcluidos(selectedRows)
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

      {listaDeRegistrosASeremExcluidos.length >= 1 ? 
       <Button
       style={{ marginLeft: '1%' }}
       icon={<DeleteOutlined />}
       onClick={handleDeleteRegistrosSelecionados} 
       > 
        Apagar todos selecionados
        </Button>
        : null } 

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
