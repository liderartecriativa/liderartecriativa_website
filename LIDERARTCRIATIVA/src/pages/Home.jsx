
import { Col, Row } from 'antd';
import { Button, Space } from 'antd';


export const Home = () => {


    return (
        <div id="content">
            <Row justify={'center'}  gutter={[48, 8]}>
                <Col flex={'auto'}>
                    <div align={'center'} id='code'>
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="12.8391" height="34.0596" rx="6.41955" transform="matrix(-1 0 0 1 15.1351 0)" fill="#548DBF" />
                            <rect width="13.1018" height="34.0596" rx="6.5509" transform="matrix(-0.5 -0.866025 -0.866025 0.5 36.3032 19.4937)" fill="#548DBF" />
                        </svg>
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
                    <div id="code2" align={'center'}><svg id="rotate" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="12.8391" height="34.0596" rx="6.41955" transform="matrix(-1 0 0 1 15.1351 0)" fill="#548DBF" />
                        <rect width="13.1018" height="34.0596" rx="6.5509" transform="matrix(-0.5 -0.866025 -0.866025 0.5 36.3032 19.4937)" fill="#548DBF" />
                    </svg>
                    </div>
                </Col>
                <Col flex={'auto'} align={'center'}  >
                    <div align={'end'} id='code3'>
                        <svg viewBox="0 0 37 37" width="37" height="37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="12.8391" height="34.0596" rx="6.41955" transform="matrix(-1 0 0 1 15.1351 0)" fill="#548DBF" />
                            <rect width="13.1018" height="34.0596" rx="6.5509" transform="matrix(-0.5 -0.866025 -0.866025 0.5 36.3032 19.4937)" fill="#548DBF" />
                        </svg>
                    </div>
                    <div className='circle'>
                        <img src="src/assets/equip.svg" width="500" />
                    </div>
                    <div align={'start'} id="code4" ><svg id="rotate2" width="88.93" height="90.11" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="12.8391" height="34.0596" rx="6.41955" transform="matrix(-1 0 0 1 15.1351 0)" fill="#548DBF" />
                        <rect width="13.1018" height="34.0596" rx="6.5509" transform="matrix(-0.5 -0.866025 -0.866025 0.5 36.3032 19.4937)" fill="#548DBF" />
                    </svg>
                    </div>
                </Col>
            </Row>
        </div>
    );
}