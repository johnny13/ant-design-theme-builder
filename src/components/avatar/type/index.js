import React from 'react';
import { Avatar } from 'antd';

export default function DemoComponent_avatar_type() {
return(
  <div>
    <Avatar icon="user" />
    <Avatar>U</Avatar>
    <Avatar>USER</Avatar>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
  </div>
);
};

export const demo = <DemoComponent_avatar_type key="DemoComponent_avatar_type" />;
