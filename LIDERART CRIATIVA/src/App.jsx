
import './App.scss'
//REACTROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './pages/Home'
import {Jobs} from './pages/Jobs'
import {Products} from './pages/Products'
import {More} from './pages/More'
import {Pricing} from './pages/Pricing'
import {Blog} from './pages/Blog'

//antd
import { Layout } from 'antd';


function App() {

  const { Header, Content, Footer } = Layout;

 
  return (
    <Layout id="Layout">
      <Header id="Header">
     
      </Header>
      <Content id="Content">
      <BrowserRouter>
    <Routes>
           <Route element = { <Home/> }  path="/"  exact />
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

export default App
