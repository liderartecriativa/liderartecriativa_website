
import React from 'react'
import { Col, Row } from 'antd';
import { Button, Space } from 'antd';



export const Home = () => {

    const [lang, setLang] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setLang((prevLang) => (prevLang >= 7 ? 0 : prevLang + 1));

        },3000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const HtmlColor = {
        color:'#FFFFFF',
        background:'#ff531f',
        padding: '40px 0px 0px 0px',
        margin: '0px',
    
    }
    const CssColor = {
        color:'#FFFFFF',
        background: '#2196F3',
        padding: '40px 0px 0px 0px',
        margin: '0px',
    }
    const BootsrapColor = {
        color:'#FFFFFF',
        background: '#5E3B7F',
        padding: '40px 0px 0px 0px',
        margin: '0px',
    }
    const JsColor = {
        color:'#000000',
        background: '#FFDF00',
        padding: '40px 0px 0px 0px',
        margin: '0px',
    }
    const VueColor = {
        color:'#1c1e21',
        background: '#4DBA87',
        padding: '40px 0px 0px 0px',
        margin: '0px',
    }
    const AngularColor = {
        color:'#FFFFFF',
        background: '#DD0031',
        padding: '40px 0px 0px 0px',
        margin: '0px',
    }
    const ReactColor = {
        color:'#FFFFFF',
        background: '#61DAFB',
        padding: '40px 0px 0px 0px',
        margin: '0px',
    }
    const GithubColor = {
        color:'#FFFFFF',
        background: '#161b22',
        padding: '40px 0px 0px 0px',
        margin: '0px',
    }

    //ZERA O PADDING E MARGIN DAS COLUNAS NECESSARIAS E ALTERAR A COR



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
                    <Col span={24} align={'center'} id="lines-Color">
                        <div className="lines">
                            <div className="line"></div>
                            <div></div>
                            <div className="line"></div>
                            <div>
                                <p id="construcao">Precisa construir sua aplicação?</p>
                            </div>
                            <div>
                                <p id="crescer">Vamos usar as melhores ferramentas para que você possa<br />continuar crescendo imediatamente.<br /></p>
                            </div>
                        </div>
                    </Col>
                    {lang == 0 && (
                        <Col span={24} id="html" align={'center'} style={HtmlColor}>
                            <i id="icon-Html" class="fa-brands fa-html5 fa-6x"></i>
                            <Col span={12}>
                                <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                            </Col>
                        </Col>
                    )}
                    {lang == 1 && (

                        <Col flex={'auto'} id="css" align={'center'} style={CssColor}>
                            <i id="icon-Css" class="fa-brands fa-css3-alt fa-6x"></i>
                            <Col span={12}>
                                <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                            </Col>
                        </Col>

                    )}
                    {lang == 2 && (

                        <Col flex={'auto'} id="bootstrap" align={'center'} style={BootsrapColor}>
                            <i id="icon-Bootstrap" class="fa-brands fa-bootstrap fa-6x"></i>
                            <Col span={12}>
                                <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                            </Col>
                        </Col>

                    )}
                    {lang == 3 && (

                        <Col flex={'auto'} id="js" align={'center'} style={JsColor}>
                            <i id="icon-Js" class="fa-brands fa-js fa-6x"></i>
                            <Col span={12}>
                                <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                            </Col>
                        </Col>

                    )}
                    {lang == 4 && (

                        <Col flex={'auto'} id="vue" align={'center'} style={VueColor}>
                            <i id="icon-Vue" class="fa-brands fa-vuejs fa-6x"></i>
                            <Col span={12}>
                                <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                            </Col>
                        </Col>

                    )}
                    {lang == 5 && (

                        <Col flex={'auto'} id="angular" align={'center'} style={AngularColor}>
                            <i id="icon-Angular" class="fa-brands fa-angular fa-6x"></i>
                            <Col span={12}>
                                <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                            </Col>
                        </Col>

                    )}
                    {lang == 6 && (

                        <Col flex={'auto'} id="react" align={'center'} style={ReactColor}>
                            <i id="icon-React" class="fa-brands fa-react fa-6x"></i>
                            <Col span={12}>
                                <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                            </Col>
                        </Col>

                    )}
                    {lang == 7 && (

                        <Col flex={'auto'} id="github" align={'center'} style={GithubColor}>
                            <i class="fa-brands fa-github  fa-6x"></i>
                            <Col span={12}>
                                <h5>HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</h5>
                            </Col>

                        </Col>

                    )}
                </Row>
            </div>
        </>
    );
}