
import React from 'react'
import { Col, Row } from 'antd';
import { Button, Space } from 'antd';



export const Home = () => {

    const [lang, setLang] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setLang((prevLang) => (prevLang >= 7 ? 0 : prevLang + 1));

        }, 3000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    //ZERA O PADDING E MARGIN DAS COLUNAS NECESSARIAS
    
    const colorColHtml = {
        padding: '0px', margin: '0px',
        background:'#ff531f',
    }
    
    return (
        <>

            <div id="content">
                <Row justify={'center'} gutter={[48, 0]}>
                    <Col flex={'auto'} className="bg">
                        <div align={'center'}>
                            <img src="src/assets/logo2.png" id="logo" />
                        </div>
                        <div id="title" align={'center'}>
                            <h1>Desenvolvedores <br /> de Softwere de elite
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
                    <Col id="parametros" span={24} align={'center'} style={colorColHtml} >
                        <div className="lines">
                            <div className="line"></div>
                            <div></div>
                            <div className="line"></div>
                            <Col span={12} align={'center'} >
                                <div>
                                    <p id="construcao">Precisa construir sua aplicação?</p>
                                </div>
                                <div>
                                    <p id="crescer">Vamos usar as melhores ferramentas para que você possa<br />continuar crescendo imediatamente.<br /></p>
                                </div>
                            </Col>
                            {lang == 0 && (
                                <Row>
                                    <Col flex={'auto'} id="html" align={'center'}style={colorColHtml} >
                                        <i id="icon-Html" class="fa-brands fa-html5 fa-10x"></i>
                                        <Col span={12}>
                                            <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                                        </Col>
                                    </Col>
                                </Row>
                            )}
                            {lang == 1 && (
                                <Row>
                                    <Col flex={'auto'} id="css" align={'center'}>
                                        <i id="icon-Css" class="fa-brands fa-css3-alt fa-10x"></i>
                                        <Col span={12}>
                                            <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                                        </Col>
                                    </Col>
                                </Row>
                            )}
                            {lang == 2 && (
                                <Row>
                                    <Col flex={'auto'} id="bootstrap" align={'center'}>
                                        <i id="icon-Bootstrap" class="fa-brands fa-bootstrap fa-10x"></i>
                                        <Col span={12}>
                                            <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                                        </Col>
                                    </Col>
                                </Row>
                            )}
                            {lang == 3 && (
                                <Row>
                                    <Col flex={'auto'} id="js" align={'center'}>
                                        <i id="icon-Js" class="fa-brands fa-js fa-10x"></i>
                                        <Col span={12}>
                                            <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                                        </Col>
                                    </Col>
                                </Row>
                            )}
                            {lang == 4 && (
                                <Row>
                                    <Col flex={'auto'} id="vue" align={'center'}>
                                        <i id="icon-Vue" class="fa-brands fa-vuejs fa-10x"></i>
                                        <Col span={12}>
                                            <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                                        </Col>
                                    </Col>
                                </Row>
                            )}
                            {lang == 5 && (
                                <Row>
                                    <Col flex={'auto'} id="angular" align={'center'}>
                                        <i id="icon-Angular" class="fa-brands fa-angular fa-10x"></i>
                                        <Col span={12}>
                                            <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                                        </Col>
                                    </Col>
                                </Row>
                            )}
                            {lang == 6 && (
                                <Row>
                                    <Col flex={'auto'} id="react" align={'center'}>
                                        <i id="icon-React" class="fa-brands fa-react fa-10x"></i>
                                        <Col span={12}>
                                            <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                                        </Col>
                                    </Col>
                                </Row>
                            )}
                            
                            {lang == 7 && (
                                <Row>
                                    <Col flex={'auto'} id="github" align={'center'}>
                                        <i class="fa-brands fa-github  fa-10x"></i>
                                        <Col span={12}>
                                            <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                                        </Col>
                                    </Col>
                                </Row>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}