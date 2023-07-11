import { Dropdown  } from 'antd';
import { MoreOutlined  } from '@ant-design/icons';

const items = [
  {
    key: '1',
    label: (
        'Editar registro'
    ),
  },
  {
    key: '2',
    label: (
        'Deletar registro'
    ),
  },
];


export default function BotaoDropdown( { onDropDownButtonClick, record, handleDeleteItem, setMostrarModalBooleano} ) { 
  function onDropDownButtonClick (e, record)  {
    let descricaoDaOpcaoClicada = e.domEvent.target.innerText; 
    descricaoDaOpcaoClicada == 'Deletar registro' ? handleDeleteItem(record.id) : 
    descricaoDaOpcaoClicada == 'Editar registro' ? setMostrarModalBooleano(true) :  null;
    
    console.log(descricaoDaOpcaoClicada , `Record ${JSON.stringify(record)} `)
  }

  return (
  <Dropdown
    trigger={'click'}
    menu={{
        items,
        onClick: (e) => onDropDownButtonClick(e, record),
    }}
    >
      <a onClick={(e) => e.preventDefault()} style={{cursor:'pointer', padding: '10px'}}>
          <MoreOutlined/>
      </a>
    </Dropdown>
    )
}