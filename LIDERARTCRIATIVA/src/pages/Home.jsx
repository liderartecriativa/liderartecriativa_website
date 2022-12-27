
import { Col, Row } from 'antd';
import { Button, Space } from 'antd';


export const Home = () => {


    return (
        <div id="content">

            <Row justify={'center'}  gutter={[48, 8]}>
                <Col flex={'auto'}>
                    <div align={'center'}>
                        <img src="src/assets/logo.png" id="logo"/>
                    </div>
                    <div id="title" align={'center'}>
                        <h1>Desenvolvedores <br/> de Software  DE ELITE
                            <br /> sob demanda!</h1>
                    </div>
                    <div id="paragraph" align={'center'}>
                        <p>A maneira mais inteligente possível <br /> de adquirir uma produto de alto desempenho.</p>
                    </div>
                    <div align={'center'}>
                        <Space wrap>
                            <Button type="primary" id='button-Home'>VAMOS CONVERSAR</Button>
                        </Space>
                    </div>
                    <div  align={'center'}>
                    <img src="src/assets/logo.png" id="logo2"/>
                    </div>
                </Col>
                <Col flex={'auto'} align={'center'} >

                    <div id='circle'>
                        <img src="src/assets/equip.svg" width="500" />
                    </div>

                </Col>
            </Row>
        </div>
    );
}