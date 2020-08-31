import Head from 'next/head'
import utilStyles from '../components/utilStyles.module.css'
import {Button, Card, DropdownButton,Dropdown, Form} from 'react-bootstrap'

const creareLogo = require('../public/assets/creareLogo.svg')
const video = require('../public/assets/video.svg')
const schedule = require('../public/assets/schedule.svg')

const CreateClass = () =>{

    return(
        <>
            <Head>
                <title>Create Class</title>
            </Head>

            <body>
                <div className='cus-header-shadow cus-desktop-header'>
                    <img src={creareLogo} style={{marginLeft:30}} width="100" height="100" className="d-inline-block align-top"/>
                    <div className='cus-header-content cus-header-start-2'>
                        <h3>Create Class</h3>
                    </div>
                </div>
                <div className='cus-mobile-header text-center'>
                    <h5 className='cus-mobile-header-padding'>Create Class</h5>
                    <hr className='my-4'/>
                </div>

                <div className='d-lg-flex align-items-lg-center justify-content-lg-center d-md-flex align-items-md-center justify-content-md-center cus-full-height'>
                    <div className='cus-mob-text-center'>
                        <div className='cus-header-content'>
                            <Card className='cus-card-shadow cus-create-class-card' >
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={video} className='img-fluid'/>
                                    </div>     
                                </Card.Body>
                            </Card>
                            <div style={{textAlign:'center', marginTop:30}} >
                                <DropdownButton  variant='outline-dark' id="dropdown-basic-button" title="New Meeting">
                                    <Dropdown.Item href="#/action-1"><Form.Check type="checkbox" label="Enable Video" /> </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Copy meeting ID</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>
                        <div className='cus-header-content'>
                            <Card className='cus-card-shadow cus-create-class-card cus-mob-top-margin' >
                                <Card.Body>
                                    <div style={{textAlign:"center"}}>
                                        <img src={schedule} className='img-fluid'/>
                                    </div>
                                </Card.Body>
                            </Card>
                            <div style={{textAlign:'center', marginTop:30}} >
                                <Button>Schedule</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default CreateClass