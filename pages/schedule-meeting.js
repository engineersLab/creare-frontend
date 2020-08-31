import Head from 'next/head'
import utilStyles from '../components/utilStyles.module.css'
import {Form, Row, Col, Button} from 'react-bootstrap'


const creareLogo = require('../public/assets/creareLogo.svg')
const letsCreare = require('../public/assets/login.svg')

const ScheduleMeeting = () =>{

    return(
        <>
            <Head>
                <title>Schedule Meeting</title>
            </Head>

            <body style={{overflowX:'hidden'}} >
                <div className='cus-header-shadow cus-desktop-header'>
                    <img src={creareLogo} style={{marginLeft:30}} width="100" height="100" className="d-inline-block align-top"/>
                    <div className='cus-header-content cus-header-start-2'>
                        <h3>Schedule Meeting</h3>
                    </div>
                </div>
                <div className='cus-mobile-header text-center'>
                    <h5 className='cus-mobile-header-padding'>Schedule Meeting</h5>
                    <hr className='my-4'/>
                </div>

                <div className='cus-dashboard-content cus-top-margin-3' >
                    <div className='row' >
                        <div className='col' >
                            <div>
                                <Form>
                                    <Form.Group controlId="formTopic">
                                        <b className='cus-card-text'>Topic</b>
                                        <Form.Control className='cus-card-text cus-form-input' type="text" placeholder="Topic of meeting" />
                                    </Form.Group>

                                    <Form.Group controlId="formSpeaker">
                                    <b className='cus-card-text'>Guest Speaker</b>
                                        <Form.Control className='cus-card-text cus-form-input' type="text" placeholder="Guest Speaker" />
                                    </Form.Group>
                                    <b className='cus-card-text'>Start</b>
                                    <Row> 
                                        <Col>
                                        <Form.Control className='cus-card-text cus-form-input' as="select" >
                                            <option selected disabled > Date</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                        </Col>

                                        <Col>
                                        <Form.Control className='cus-card-text cus-form-input' as="select" >
                                            <option selected disabled >Time</option>
                                            <option>00:00</option>
                                            <option>01:00</option>
                                            <option>02:00</option>
                                            <option>03:00</option>
                                            <option>04:00</option>
                                        </Form.Control>
                                        </Col>
                                    </Row>

                                    <b className='cus-card-text cus-top-margin'>Duration</b>
                                    <Row> 
                                        <Col>
                                        <Form.Control className='cus-card-text cus-form-input' as="select" >
                                            <option selected disabled > HRS</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                        </Col>

                                        <Col>
                                        <Form.Control className='cus-card-text cus-form-input' as="select" >
                                            <option selected disabled >MIN</option>
                                            <option>00:00</option>
                                            <option>01:00</option>
                                            <option>02:00</option>
                                            <option>03:00</option>
                                            <option>04:00</option>
                                        </Form.Control>
                                        </Col>
                                    </Row>
                                    <Form.Group style={{marginTop:30}} controlId="formRecurring">
                                        <Form.Check className='cus-text' type="checkbox" label="Recurring Meeting" />
                                    </Form.Group>
                                </Form>
                                <Button className='cus-text' style={{marginTop:30}} variant='dark'>Schedule Meeting</Button>
                            </div>
                        </div>

                        <div className='col cus-desktop-header' >
                            <div className='d-flex justify-content-center'>
                                <img src={letsCreare} className='img-fluid' />
                            </div>
                        </div>

                    </div>
                </div>
            </body>
        </>
    )
}

export default ScheduleMeeting