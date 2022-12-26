
import './App.scss'
import React, { useState } from 'react'
import { Rotas } from './Routes'
import { Menu } from 'antd';
import { Col, Row } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { ArrowDownOutlined } from '@ant-design/icons';
import { ConfigProvider } from 'antd'

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
    icon: <DownOutlined />,
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

  //LOADING DISPLAYNONE
  document.getElementById("loading").style.display = "none";


  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <body>
        <header>
          <Row gutter={[8, 8]} justify={'center'} align={'middle'} >
            <Col span={15}>
              <Avatar size="large" icon={<UserOutlined />} src="src/assets/logo.png" />
            </Col>
            <Col span={9}>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: '#A62957',
                  },
                }}
              >
                <Menu id="MenuBar" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} overflowedIndicator={<ArrowDownOutlined />} />

              </ConfigProvider>

            </Col>
          </Row>
        </header>

        <Rotas />
      </body>
      <footer>
      </footer>

    </>
  )

}
export default App;