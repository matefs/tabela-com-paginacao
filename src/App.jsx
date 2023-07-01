// Importando os componentes necessários
import React, { useState } from "react";
import { Table, Tag, Button, Input, Select, Typography, Row, Col, InputNumber, Popconfirm} from "antd";
import { MoreOutlined, TagFilled, PlusOutlined} from "@ant-design/icons";


const { Title } = Typography;




// Criando um componente para representar o formulário de criação de itensDoProjeto
const CardForm = ({ onCreate }) => {
  // Definindo os estados para armazenar os valores dos campos
  const [name, setName] = useState("");
  const [userStatus, setUserStatus] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [value, setValue] = useState("");
  const [showForm, setShowForm] = useState(false);


    const handleNewRegistroClick = () => {
     showForm == false ? setShowForm(true) : setShowForm(false)
  };


  // Definindo uma função para lidar com a submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitando o recarregamento da página
    onCreate({ name, userStatus, paymentStatus, value }); // Chamando a função passada como prop
    setName(""); // Limpando os campos
    setUserStatus(null);
    setPaymentStatus(null);
    setValue("");
    setShowForm(false)
  };

  return (
      <>
 
      <Button icon={<PlusOutlined />}
        onClick={handleNewRegistroClick}
        style={{ marginLeft: '-79%'}}> 
        Novo registro
      </Button>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ width: '55%', marginTop:'1%' }}>
          <Input
            placeholder="Nome do cliente"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{marginBottom:'1%'}}
          />
          
          <Select
            placeholder="Status do Usuário"
            value={userStatus}
            style={{ width: '50%' }}
            onChange={(value) => setUserStatus(value)}
            required
          >
            <Select.Option value="Ativo">Ativo</Select.Option>
            <Select.Option value="Inativo">Inativo</Select.Option>
          </Select>

          <Select
            placeholder="Status do Pagamento"
            value={paymentStatus}
            onChange={(value) => setPaymentStatus(value)}
            style={{ width: '50%' }}
            required
          >
            <Select.Option value="Pago">Pago</Select.Option>
            <Select.Option value="Atrasado">Atrasado</Select.Option>
            <Select.Option value="Pendente">Pendente</Select.Option>
          </Select>

          <InputNumber
            placeholder="Valor"
            value={value}
            onChange={(numericValue) => setValue(numericValue)}
            required
            style={{marginTop:'1%'}}
          />

          <Row justify="center" style={{ marginTop: '1%' }}>
            <Col>
              <Button type="primary" htmlType="submit">
               Salvar 
              </Button>
            </Col>
          </Row>
        </form>
      )}
    </> 
    );
};

 const Home = () => {
  const [itensDoProjeto, setItensDoProjeto] = useState([
    {
      name: "João",
      userStatus: "Ativo",
      paymentStatus: "Pago",
      value: "1000",
    },
    {
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

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Title level={2}> Gerenciamento de Projetos Personalizados para Empresas e Clientes </Title>
      <CardForm onCreate={handleCreateItem} />
      <Table dataSource={itensDoProjeto} columns={columns} style={{ width:'90%',marginTop: "1%" }} />
    </div>
  );
};

export default Home;