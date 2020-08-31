import Sidebar from '../components/sidebar'
import Head from 'next/head'
import {Card, Button, DropdownButton, Dropdown, Form} from 'react-bootstrap'
import utilStyles from '../components/utilStyles.module.css'
import {List,ListItem,ListItemText,Divider, TextField} from '@material-ui/core'
import { useState } from 'react'
import {IconContext} from 'react-icons'
import {AiOutlineClose} from 'react-icons/ai'


export default function dashboard(){

    const [qShow, setQShow] = useState(false)
    const [teacher, setTeacher] = useState(null)

    return(
        <>
            <Head>
            <title>Dashboard</title>
            </Head>
            <Sidebar pageName='dashboard' />
            <body className='cus-dashboard'>
                <div className='cus-header-shadow cus-desktop-header'>
                    <div className='cus-header-content cus-header-start'>
                        <h3>Home</h3>
                    </div>
                    <div className='cus-header-content cus-header-end'>
                        <Button style={{display:'inline-block'}} onClick={()=>setQShow(true)}  variant='dark' style={{display:"inline",marginRight:20}} >Create New</Button>
                        <DropdownButton variant='light' style={{display:'inline-block', marginRight:50}} id="dropdown-basic-button" title="Classroom">
                            <Dropdown.Item href="#/action-1">Join Class</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Schedule Class</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>

                <div className='cus-mobile-header text-center'>
                    <h5 className='cus-mobile-header-padding'>Home</h5>
                    <hr className='my-4'/>
                </div>

                <div className='row cus-dashboard-content'>
                    <div className='col-sm-12 col-md-12 col-lg-5'>
                        <Card className='cus-card-shadow cus-dashboard-card'>
                            <Card.Body>
                            <div>
                                <Card.Title className='cus-card-header-text'>Notifications</Card.Title>
                                <List>
                                    <ListItem >
                                        <ListItemText primary={<span className='cus-card-text'>You have received your timetable</span>}  />
                                        <Button variant='light' className='cus-card-text' size='sm' >Download</Button>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem >
                                        <ListItemText primary={<span className='cus-card-text'>You have received your timetable</span>}  />
                                        <Button variant='light' className='cus-card-text' size='sm' >Download</Button>
                                    </ListItem>
                                    <Divider/>
                                </List>
                            </div>
                            </Card.Body>
                        </Card>
                        
                        <Card className='cus-card-shadow cus-dashboard-card'>
                            <Card.Body>
                                <div>
                                    <Card.Title className='cus-card-header-text'>Scheduled for today</Card.Title>
                                    <p style={{fontSize:12, color:'gray'}}>Task and remainders set for today will appear here</p>
                                    <Card style={{ width:'100%', height:'auto', marginBottom:20 }}>
                                        <Card.Body>
                                            <div>
                                                <p className='cus-card-text-2' >Exam Scheduled</p> 
                                                <p className='cus-card-text-2 cus-horizontal-spacing-2'>Class 6</p>
                                                <span className='cus-bullet' ></span>
                                                <p className='cus-card-text-2'>Science Exam</p> 
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width:'100%', height:'auto' }}>
                                        <Card.Body>
                                            <div>
                                                <Card.Title className='cus-card-sub-header-text' >Remainder</Card.Title> 
                                                <List>
                                                    <ListItem >
                                                        <ListItemText primary={<p className='cus-card-text'>Take Seminar on Geometry, Chapter 8</p>}  />
                                                        <Button variant='light' size='sm' className='cus-card-text' >Mark as Completed</Button>
                                                    </ListItem>
                                                    <Divider/>
                                                </List>
                                                {/* <p style={{display:'inline', fontSize:14}}>Take Seminar on Geometry, Chapter 8 </p>
                                                <Button style={{float:"right"}} size="sm" variant='light'>Mark as Completed</Button> */}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-sm-12 col-md-12 col-lg-7'>
                        <Card className='cus-card-shadow cus-dashboard-card'>
                            <Card.Body>
                                <div>
                                    <Card.Title className='cus-card-header-text'>Statistics</Card.Title> 
                                    <Card className='cus-card-shadow cus-sub-display-card'>
                                        <Card.Body>
                                            <div style={{ textAlign:'center'}} >
                                                <span className="rounded-circle border border-dark"  style={{display:'inline-block', width:60, height:60}}><p style={{marginTop:15}}>70</p></span>
                                                <p className='cus-card-text cus-top-margin-2'>Meetings</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className='cus-card-shadow cus-sub-display-card'>
                                        <Card.Body>
                                            <div style={{ textAlign:'center'}} >
                                            <span class="rounded-circle border border-dark"  style={{display:'inline-block', width:60, height:60}}><p style={{marginTop:15}}>70</p></span>
                                                <p className='cus-card-text cus-top-margin-2'>No of Videos</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className='cus-card-shadow cus-sub-display-card'>
                                        <Card.Body>
                                            <div style={{ textAlign:'center'}} >
                                            <span class="rounded-circle border border-dark"  style={{display:'inline-block', width:60, height:60}}><p style={{marginTop:15}}>10</p></span>
                                                <p className='cus-card-text cus-top-margin-2'>No of Exams</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className='cus-card-shadow cus-sub-display-card'>
                                        <Card.Body>
                                            <div style={{ textAlign:'center'}} >
                                            <span class="rounded-circle border border-dark"  style={{display:'inline-block', width:60, height:60}}><p style={{marginTop:15}}>2</p></span>
                                                <p className='cus-card-text cus-top-margin-2'>No of Seminars</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Card.Body>
                        </Card>
                        
                        <Card className='cus-card-shadow cus-dashboard-card'>
                            <Card.Body>
                                <Card.Title className='cus-card-header-text'>My Class</Card.Title>
                                <Card className={utilStyles.card}>
                                    <Card.Body>
                                        <Card.Title className='cus-card-sub-header-text'>Maths Class</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted cus-card-sub-header-text">No of Students <b>05</b></Card.Subtitle>
                                        <Divider/>
                                        <div className='row align-items-center flex-column flex-md-row' style={{marginTop:30}}>
                                            <div className='col' style={{textAlign:'center'}} >
                                                <p className='cus-card-text'>No of Meetings</p>
                                                <p className='cus-card-text'>10</p>
                                            </div>
                                            <div className='col' style={{textAlign:'center'}} >
                                                <p className='cus-card-text'>No of Videos</p>
                                                <p className='cus-card-text'>25</p>
                                            </div>
                                            <div className='col' style={{textAlign:'center'}} >
                                                <p className='cus-card-text'>No of Exams</p>
                                                <p className='cus-card-text'>05</p>
                                            </div>
                                            <div className='col' style={{textAlign:'center'}} >
                                                <p className='cus-card-text'>No of Handouts</p>
                                                <p className='cus-card-text'>15</p>
                                            </div>
                                        </div>
                                        <div style={{width:'100%', height:'auto', background:'#dbdbdb',borderRadius:10}}>
                                            <div style={{display:'inline-block', marginInline:20, padding:20}} >
                                                <b className='cus-card-sub-header-text'>Upcoming Exams</b>
                                                <p className='cus-card-text'>01 JUL 2020,01:00 PM IST</p>
                                            </div>
                                            <div style={{display:'inline-block'}} >
                                                <b className='cus-card-sub-header-text cus-left-margin'>Meetings Scheduled</b>
                                                <p className='cus-card-text cus-left-margin'>01 JUL 2020,01:00 PM IST</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                {
                    qShow
                    ?
                    <div style={{zIndex:2, position:'fixed',height:'100%',width:'100%', left:0, top:0, bottom:0, right:0, backgroundColor: 'rgba(0,0,0,0.5)'}} className='d-flex align-items-center justify-content-center'>
                        <Card style={{position:'absolute',width:400}}   >
                            <Card.Body>
                                <Card.Title style={{display:'inline'}} >Join meeting</Card.Title>
                                <IconContext.Provider  value={{ color: "gray", size:'1.3em' }}>
                                    <AiOutlineClose style={{display:'inline',float:'right', cursor:'pointer'}} onClick={()=>setQShow(false)} /> 
                                </IconContext.Provider>
                                {/* <p style={{display:'inline', float:'right'}}>Close</p> */}
                                {/* <TextField fullWidth size='small' id="filled-basic" label="Ask question"  />
                                */}
                                <Form.Control 
                                            id={utilStyles.formInput} size="sm" as="select" style={{marginTop:20}}
                                            onChange={(val)=>setTeacher(val.target.value)}  >
                                            <option value="" disabled selected>Join Meeting</option>
                                            <option>Sumathi</option>
                                            <option>Venkat</option>
                                        </Form.Control>
                                        <Button variant='dark' style={{marginTop:30, float:'right'}} >Go Live</Button>
                            </Card.Body>
                        </Card>
                    </div>
                :
                null
                }
            </body>        
        </>    
    )
}
