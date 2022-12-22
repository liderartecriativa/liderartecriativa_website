import React, { useState } from 'react';
import './App.scss'
//REACTROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Jobs} from './pages/Jobs'
import {Products} from './pages/Products'
import {More} from './pages/More'
import {Pricing} from './pages/Pricing'
import {Blog} from './pages/Blog'

//antd
import { Layout,Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

//MENUITEMS
const items = [
  {
    label: 'Home',
    key: 'Home',
    to:'/Home',
    icon: <MailOutlined />,
  },
  {
    label: 'About',
    key: 'About',
    to:'/About',
    icon: <MailOutlined />,
  },
  {
    label: 'Products',
    key: 'Products',
    icon: <MailOutlined />,
  },
  {
    label: 'Pricing',
    key: 'Pricing',
    icon: <MailOutlined />,
  },
  {
    label: 'Blog',
    key: 'Blog',
    icon: <MailOutlined />,
  },
  {
    label: 'Jobs',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'More',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
    ],
  },
];

function App() {

  const { Header, Content, Footer } = Layout;
  const [current, setCurrent] = useState('Home');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
 
  return (
    <Layout id="Layout">
      <Header id="Header">
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
      </Header>
      <Content id="Content">
      <BrowserRouter>
    <Routes>
           <Route element = { <Home/> }  path="/"  exact />
           <Route element = {<About/>} path="/About" />
           <Route element = { <Products/> }  path="/Pedidos"  />
           <Route element = { <Pricing/> }  path="/Busca"  />
           <Route element = { <Blog/> }  path="/Ajuda"   />
           <Route element = {<Jobs/>} path="/Status" />
           <Route element = {<More/>} path="/More" />
    </Routes>
    </BrowserRouter>
      </Content>
      <Footer id="Footer">
       
      </Footer>
    </Layout>
  )
}
}
export default App
