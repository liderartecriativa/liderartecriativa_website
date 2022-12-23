
import './App.scss'
import React, { useState } from 'react'
import { Rotas } from './Routes'
import { Menu } from 'antd';
import { Col, Row } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const items = [
  {
    label: (
      <a href="/" rel="noopener noreferrer">
       Home
      </a>
    ),
    key: 'Home',
  },

  {
    label: (
      <a href="/About" rel="noopener noreferrer">
        Sobre
      </a>
    ),
    key: 'About',
  },
  {
    label: (
      <a href="/Products" rel="noopener noreferrer">
        Produtos
      </a>
    ),
    key: 'Products',
  },
  {
    label: (
      <a href="/Blog" rel="noopener noreferrer">
        Blog
      </a>
    ),
    key: 'Blog',
  },
  {
    label: (
      <a href="/Jobs" rel="noopener noreferrer">
        Jobs
      </a>
    ),
    key: 'Jobs',
  },
  {
    label: 'Mais',
    key: 'SubMenu',
    children: [
      {
        label: (
          <a href="/Bookingpage1" rel="noopener noreferrer">
            Reserva
          </a>),

      },
      {
        label: (<a href="/Bookingpage2" rel="noopener noreferrer">
          Reserva2
        </a>),

      },
    ],
  },
];


function App() {

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <header>
        <Row gutter={[8, 8]} justify={'center'} align={'middle'} > 
          <Col span={15}>
           
          <Avatar size="large" icon={<UserOutlined />} src="#"/>

      
          </Col>
          <Col span={9}>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
          </Col>

        </Row>

      </header>
      <body>
        <Rotas />
      </body>
      <footer>

      </footer>

    </>
  )

}

export default App;