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
                <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                    <span style={{display:'inline-block'}} >
                        <img src={creareLogo} style={{marginLeft:30}} width="100" height="100" className="d-inline-block align-top"/>
                        <div style={{ display:'inline-block', marginTop:40, marginLeft:40}}>
                        <h3>Schedule Class</h3>
                        </div>
                        
                    </span>
                    <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                        {/* <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Preview</Button> */}
                        {/* <Button variant='dark' style={{paddingRight:30,paddingLeft:30}}>Ask Question</Button> */}
                    </span>
                </div>

                <div style={{marginLeft:100, marginRight:100, marginTop:70}} >
                    <div className='row' >
                        <div className='col' >
                            <div>
                                <Form>
                                    <Form.Group controlId="formTopic">
                                        <Form.Label style={{fontWeight:600}} >Topic</Form.Label>
                                        <Form.Control id={utilStyles.formInput} type="text" placeholder="Topic of meeting" />
                                    </Form.Group>

                                    <Form.Group controlId="formSpeaker">
                                        <Form.Label style={{fontWeight:600}} >Guest Speaker</Form.Label>
                                        <Form.Control id={utilStyles.formInput} type="text" placeholder="Guest Speaker" />
                                    </Form.Group>
                                    <Form.Label style={{fontWeight:600}} >Start</Form.Label>
                                    <Row> 
                                        <Col>
                                        <Form.Control id={utilStyles.formInput} as="select" >
                                            <option selected disabled > Date</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                        </Col>

                                        <Col>
                                        <Form.Control id={utilStyles.formInput} as="select" >
                                            <option selected disabled >Time</option>
                                            <option>00:00</option>
                                            <option>01:00</option>
                                            <option>02:00</option>
                                            <option>03:00</option>
                                            <option>04:00</option>
                                        </Form.Control>
                                        </Col>
                                    </Row>

                                    <Form.Label style={{fontWeight:600, marginTop:15}} >Duration</Form.Label>
                                    <Row> 
                                        <Col>
                                        <Form.Control id={utilStyles.formInput} as="select" >
                                            <option selected disabled > HRS</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                        </Col>

                                        <Col>
                                        <Form.Control id={utilStyles.formInput} as="select" >
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
                                        <Form.Check type="checkbox" label="Recurring Meeting" />
                                    </Form.Group>
                                </Form>
                                <Button style={{marginTop:30}} variant='dark'>Schedule Meeting</Button>
                            </div>
                        </div>

                        <div className='col' >
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