import React from 'react';
import { Table, Tag } from 'antd';
import { MoreOutlined, TagFilled } from '@ant-design/icons';

const data = [
  {
    key: '1',
    name: 'João',
    userStatus: 'Ativo',
    paymentStatus: 'Pago',
    value: 'R$ 100,00',
  },
  {
    key: '2',
    name: 'Maria',
    userStatus: 'Inativo',
    paymentStatus: 'Pendente',
    value: 'R$ 50,00',
  },
  {
    key: '3',
    name: 'Pedro',
    userStatus: 'Ativo',
    paymentStatus: 'Pago',
    value: 'R$ 75,00',
  },
  {
    key: '4',
    name: 'Ana',
    userStatus: 'Ativo',
    paymentStatus: 'Pendente',
    value: 'R$ 30,00',
  },
  {
    key: '5',
    name: 'Carlos',
    userStatus: 'Inativo',
    paymentStatus: 'Pago',
    value: 'R$ 90,00',
  },
  {
    key: '6',
    name: 'Lúcia',
    userStatus: 'Ativo',
    paymentStatus: 'Pendente',
    value: 'R$ 20,00',
  },
  {
    key: '7',
    name: 'Fernando',
    userStatus: 'Inativo',
    paymentStatus: 'Pago',
    value: 'R$ 60,00',
  },
  {
    key: '8',
    name: 'Mariana',
    userStatus: 'Ativo',
    paymentStatus: 'Pendente',
    value: 'R$ 45,00',
  },
  {
    key: '9',
    name: 'Gustavo',
    userStatus: 'Ativo',
    paymentStatus: 'Pago',
    value: 'R$ 80,00',
  },
  {
    key: '10',
    name: 'Camila',
    userStatus: 'Inativo',
    paymentStatus: 'Pendente',
    value: 'R$ 70,00',
  },
  {
    key: '11',
    name: 'Rafaela',
    userStatus: 'Ativo',
    paymentStatus: 'Pago',
    value: 'R$ 55,00',
  },
  {
    key: '12',
    name: 'Lucas',
    userStatus: 'Ativo',
    paymentStatus: 'Pendente',
    value: 'R$ 25,00',
  },
  {
    key: '13',
    name: 'Fábio',
    userStatus: 'Inativo',
    paymentStatus: 'Pago',
    value: 'R$ 95,00',
  },
  {
    key: '14',
    name: 'Isabela',
    userStatus: 'Ativo',
    paymentStatus: 'Pendente',
    value: 'R$ 40,00',
  },
  {
    key: '15',
    name: 'Paulo',
    userStatus: 'Ativo',
    paymentStatus: 'Pago',
    value: 'R$ 85,00',
  },
  {
    key: '16',
    name: 'Larissa',
    userStatus: 'Inativo',
    paymentStatus: 'Pendente',
    value: 'R$ 65,00',
  },
  {
    key: '17',
    name: 'Ricardo',
    userStatus: 'Ativo',
    paymentStatus: 'Pago',
    value: 'R$ 50,00',
  },
  {
    key: '18',
    name: 'Sofia',
    userStatus: 'Ativo',
    paymentStatus: 'Pendente',
    value: 'R$ 35,00',
  },
];

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status do Usuário',
    dataIndex: 'userStatus',
    key: 'userStatus',
    render: (palavra) => {
      return palavra == 'Ativo' ? (
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
    title: 'Status do Pagamento',
    dataIndex: 'paymentStatus',
    key: 'paymentStatus',
  },
  {
    title: 'Valor',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Ações',
    key: 'actions',
    render: () => <MoreOutlined />,
  },
];

const UserPaymentTable = () => {
  return <Table dataSource={data} columns={columns} />;
};

export default UserPaymentTable;
