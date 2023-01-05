
import React from 'react'
import { Col, Row } from 'antd';
import { Button, Space } from 'antd';



export const Home = () => {

    const [lang, setLang] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setLang((prevLang) => (prevLang >= 7 ? 0 : prevLang + 1));

        }, 6000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    //CONTROLE DE CORES 
    const HtmlColor = {
        color: '#FFFFFF',
        background: '#ff531f',
        padding: '5px',
        margin: '0px',

    }
    const CssColor = {
        color: '#FFFFFF',
        background: '#2196F3',
        padding: '5px',
        margin: '0px',
    }
    const BootsrapColor = {
        color: '#FFFFFF',
        background: '#5E3B7F',
        padding: '5px',
        margin: '0px',
    }
    const JsColor = {
        color: '#000000',
        background: '#FFDF00',
        padding: '5px',
        margin: '0px',
    }
    const VueColor = {
        color: '#1c1e21',
        background: '#4DBA87',
        padding: '5px',
        margin: '0px',
    }
    const AngularColor = {
        color: '#FFFFFF',
        background: '#DD0031',
        padding: '5px',
        margin: '0px',
    }
    const ReactColor = {
        color: '#FFFFFF',
        background: '#61DAFB',
        padding: '5px',
        margin: '0px',
    }
    const GithubColor = {
        color: '#FFFFFF',
        background: '#161b22',
        padding: '5px',
        margin: '0px',
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
                        <i id="icon-curly" className="fa-brands fa-connectdevelop fa-5x fa-spin"></i>
                        <h5 id="developer-Title">Precisa de desenvolvedores de primeira linha?</h5>
                        <h4 id="developer-Subtitle">Você está no lugar certo</h4>
                        <p id="developer-Description">A LiderArt Criativa ajuda empreendedores a construir e lançar novos produtos e,<br /> ajuda as empresas em crescimento conectando equipes de desenvolvimento pronta <br /> para uso e começar a construir.</p>
                    </Col>
                    <Col span={24} align={'center'} className="bg">
                        <div>
                            <p id="construcao">Precisa construir sua aplicação?</p>
                        </div>
                        <div>
                            <p id="crescer">Vamos usar as melhores ferramentas para que você possa<br />continuar crescendo imediatamente.<br /></p>
                        </div>

                    </Col>
                    {lang == 0 && (
                        <Col span={24} id="html" align={'center'} style={HtmlColor}>
                            <i className="fa-brands fa-html5 fa-6x"></i>
                        </Col>
                    )}
                    {lang == 1 && (
                        <Col span={24} id="css" align={'center'} style={CssColor}>
                            <i className="fa-brands fa-css3-alt fa-6x"></i>
                        </Col>
                    )}
                    {lang == 2 && (
                        <Col span={24} id="bootstrap" align={'center'} style={BootsrapColor}>
                            <i className="fa-brands fa-bootstrap fa-6x"></i>
                        </Col>
                    )}
                    {lang == 3 && (

                        <Col span={24} id="js" align={'center'} style={JsColor}>
                            <i className="fa-brands fa-js fa-6x"></i>
                        </Col>
                    )}
                    {lang == 4 && (

                        <Col span={24} id="vue" align={'center'} style={VueColor}>
                            <i className="fa-brands fa-vuejs fa-6x"></i>

                        </Col>
                    )}
                    {lang == 5 && (
                        <Col span={24} id="angular" align={'center'} style={AngularColor}>
                            <i className="fa-brands fa-angular fa-6x"></i>
                        </Col>
                    )}
                    {lang == 6 && (
                        <Col span={24} id="react" align={'center'} style={ReactColor}>
                            <i className="fa-brands fa-react fa-6x"></i>
                        </Col>
                    )}
                    {lang == 7 && (
                        <Col span={24} id="github" align={'center'} style={GithubColor}>
                            <i className="fa-brands fa-github  fa-6x"></i>
                        </Col>
                    )}
                    <Col span={24} align={'center'}>
                     <p>EU SOU O TEXTO DE TESTE</p></Col>
                </Row>
            </div>
        </>
    );
}