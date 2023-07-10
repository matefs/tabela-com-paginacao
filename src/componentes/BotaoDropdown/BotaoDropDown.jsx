import { Dropdown  } from 'antd';
import { MoreOutlined  } from '@ant-design/icons';

const items = [
  {
    key: '1',
    label: (
        '1st menu item'
    ),
  },
  {
    key: '2',
    label: (
        '2nd menu item'
    ),
  },
  {
    key: '3',
    label: (
        '3rd menu item'
    ),
  },
];



export default function BotaoDropdown( { onDropDownButtonClick } ) { return (
    <Dropdown
    trigger={'click'}
    menu={{
        items,
        onClick: onDropDownButtonClick,
    }}
    >
      <a onClick={(e) => e.preventDefault()} style={{cursor:'pointer', padding: '10px'}}>
          <MoreOutlined/>
      </a>
    </Dropdown>
    )
}