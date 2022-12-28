
import React from 'react'
import { Col, Row } from 'antd';
import { Button, Space } from 'antd';


export const Home = () => {


    return (

        <div id="content">
            <Row justify={'center'} gutter={[48, 0]}>


                <Col flex={'auto'} className="bg">

                    <div align={'center'}>
                        <img src="src/assets/logo2.png" id="logo" />
                    </div>
                    <div id="title" align={'center'}>
                        <h1>Desenvolvedores <br /> de Software  de elite
                            <br /> sob demanda!</h1>
                    </div>
                    <div id="paragraph" align={'center'}>
                        <p>A maneira mais inteligente possível <br /> de adquirir uma produto de alto desempenho.</p>
                    </div>
                    <div align={'center'}>
                        <Space wrap>
                            <Button type="primary" id='button-Home' href="https://www.facebook.com" target='_blank'>VAMOS CONVERSAR</Button>
                        </Space>
                    </div>
                    <div align={'center'}>
                        <img src="src/assets/logo.png" id="logo2" />
                    </div>
                </Col>

                <Col span={24} align={'center'} id="developer-Col">
                    <i id="icon-curly" class="fa-brands fa-connectdevelop fa-5x fa-spin"></i>
                    <h5 id="developer-Title">Precisa de desenvolvedores de primeira linha?</h5>
                    <h4 id="developer-Subtitle">Você está no lugar certo</h4>
                    <p id="developer-Description">A LiderArt Criativa ajuda empreendedores a construir e lançar novos produtos e,<br /> ajuda as empresas em crescimento conectando equipes de desenvolvimento pronta <br /> para uso e começar a construir.</p>
                </Col>

                <Col id="parametros" flex={'auto'} align={'center'} >
                    <div>
                        <h1>Precisa construir sua aplicação?</h1>
                    </div>
                    <i id="icon-Html" class="fa-brands fa-html5 fa-3x"></i>
                    <i id="icon-Css" class="fa-brands fa-css3-alt fa-3x"></i>
                    <i id="icon-Bootstrap" class="fa-brands fa-bootstrap fa-3x"></i>
                    <i id="icon-Js" class="fa-brands fa-js fa-3x"></i>
                    <i id="icon-Vue" class="fa-brands fa-vuejs fa-3x"></i>
                    <i id="icon-Angular" class="fa-brands fa-angular fa-3x"></i>
                    <i id="icon-React" class="fa-brands fa-react fa-3x"></i>
                    <img id="icon-Nextjs" src="./src/assets/nextjs.svg" />
                    <i id="icon-Github" class="fa-brands fa-github  fa-3x"></i>

                </Col>
                <Col id="parametros" flex={'auto'} align={'center'}>
                    <div id="equip">
                        <img src='./src/assets/equip2.svg' width="500" />
                    </div>
                </Col>
            </Row>
        </div>

    );
}