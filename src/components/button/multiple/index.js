import React from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

export default function DemoComponent_button_multiple() {
return(
  <div>
    <Button type="primary">primary</Button>
    <Button>secondary</Button>
    <Dropdown overlay={menu}>
      <Button>
        more <Icon type="down" />
      </Button>
    </Dropdown>
  </div>);
};

export const demo = <DemoComponent_button_multiple key="DemoComponent_button_multiple" />;
