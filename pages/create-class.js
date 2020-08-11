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
                <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                    <span style={{display:'inline-block'}} >
                        <img src={creareLogo} style={{marginLeft:30}} width="100" height="100" className="d-inline-block align-top"/>
                        <div style={{ display:'inline-block', marginTop:40, marginLeft:40}}>
                            <h3  >Create Class</h3>
                        </div>
                    </span>
                    <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                        {/* <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Preview</Button> */}
                        {/* <Button variant='dark' style={{paddingRight:30,paddingLeft:30}}>Ask Question</Button> */}
                    </span>
                </div>

                <div style={{zIndex:2, position:'fixed',height:'100%',width:'100%', left:0, top:0, bottom:0, right:0}} className='d-flex align-items-center justify-content-center'  >
                    <div style={{position:'absolute'}}>
                        <div style={{display:'inline-block',}}>
                        <Card className={utilStyles.card} style={{ padding:30, marginRight:30, width:250}} >
                            <Card.Body>
                                <div style={{textAlign:'center'}} >
                                <img src={video} className='img-fluid'/>
                                </div>     
                            </Card.Body>
                        </Card>
                        <div style={{textAlign:'center', marginTop:30}} >
                            <DropdownButton variant='outline-dark' style={{display:'inline-block'}} id="dropdown-basic-button" title="New Meeting">
                                <Dropdown.Item href="#/action-1"><Form.Check type="checkbox" label="Enable Video" /> </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Copy meeting ID</Dropdown.Item>
                            </DropdownButton>
                        </div>
                       
                        </div>
                        <div style={{display:'inline-block',}}>
                        <Card className={utilStyles.card} style={{ padding:30, marginLeft:30, width:250}}>
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