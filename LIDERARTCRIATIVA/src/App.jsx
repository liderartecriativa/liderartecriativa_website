
import './App.scss'
import React, { useState } from 'react'
import { Rotas } from './Routes'
import { Menu } from 'antd';


const items = [
  {
    label: (
      <a href="/" rel="noopener noreferrer">
        Home
      </a>
    ),
    key: 'home',
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
        key: 'bookingpage1',
      },
      {
        label: (<a href="/Bookingpage2" rel="noopener noreferrer">
          Reserva2
        </a>),
        key: 'bookingpage1',
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
        <main>
          <div>

          </div>
        </main>
      </header>
      <body>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <Rotas />
      </body>
      <footer>

      </footer>
    </>

  )

}

export default App;