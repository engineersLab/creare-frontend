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
            <title>DashBoard</title>
            </Head>
            <Sidebar pageName='dashboard' />
            <body style={{overflowX:'hidden', background:'#ebebeb'}}>
                <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                    <div style={{marginLeft:135,float:'left', marginTop:50}}>
                        <h3>Home</h3>
                    </div>
                    <div style={{float:'right', marginTop:50}}>
                        <Button style={{display:'inline-block'}} onClick={()=>setQShow(true)}  variant='dark' style={{display:"inline",marginRight:20}} >Create New</Button>
                        <DropdownButton variant='light' style={{display:'inline-block', marginRight:50}} id="dropdown-basic-button" title="Classroom">
                            <Dropdown.Item href="#/action-1">Join Class</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Schedule Class</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <div style={{marginLeft:135, marginRight:40}} className='row flex-column flex-md-row'>
                    <div style={{marginTop:20}} className='col col-md-5'>
                        <Card className={utilStyles.card} style={{ marginBottom:20}}>
                            <Card.Body>
                            <div>
                                <Card.Title>Notifications</Card.Title>
                                <List>
                                    <ListItem >
                                        <ListItemText primary={<span style={{fontSize:13}}>You have received your timetable</span>}  />
                                        <Button variant='light' size='sm' >Download</Button>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem >
                                        <ListItemText primary={<span style={{fontSize:13}}>You have received your timetable</span>}  />
                                        <Button variant='light' size='sm' >Download</Button>
                                    </ListItem>
                                    <Divider/>
                                </List>
                            </div>
                            </Card.Body>
                        </Card>
                        
                        <Card className={utilStyles.card} style={{marginBottom:20}}>
                            <Card.Body>
                                <div>
                                    <Card.Title>Scheduled for today</Card.Title>
                                    <p style={{fontSize:12, color:'gray'}}>Task and remainders set for today will appear here</p>
                                    <Card style={{ width:'100%', height:'auto', marginBottom:20 }}>
                                        <Card.Body>
                                            <div>
                                                <p style={{display:'inline'}} >Exam Scheduled</p> 
                                                <p style={{display:'inline', marginLeft:10, marginRight:10}}>Class 6</p>
                                                <span style={{display:'inline-block', background:'#858585', borderRadius:50, width:10, height:10, marginLeft:20, marginRight:10}} ></span>
                                                <p style={{display:'inline'}}>Science Exam</p> 
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width:'100%', height:'auto' }}>
                                        <Card.Body>
                                            <div>
                                                <Card.Title >Remainder</Card.Title> 
                                                <p style={{display:'inline', fontSize:14}}>Take Seminar on Geometry, Chapter 8 </p>
                                                <Button style={{float:"right"}} size="sm" variant='light'>Mark as Completed</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div style={{marginTop:20}} className='col col-md-7'>
                        <Card className={utilStyles.card} style={{ width:'100%', height:'auto', marginBottom:20}}>
                            <Card.Body>
                                <div>
                                    <Card.Title>Statistics</Card.Title> 
                                    <Card className={utilStyles.card} style={{display:'inline-block', height:130, width:150, marginLeft:10, marginRight:10}} >
                                        <Card.Body>
                                            <div style={{ textAlign:'center'}} >
                                                <span class="rounded-circle border border-dark"  style={{display:'inline-block', width:60, height:60}}><p style={{marginTop:15}}>70</p></span>
                                                <p style={{fontSize:13, color:'gray', marginTop:7}}>Meetings</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className={utilStyles.card} style={{display:'inline-block', height:130, width:150, marginLeft:10, marginRight:10}}>
                                        <Card.Body>
                                            <div style={{ textAlign:'center'}} >
                                            <span class="rounded-circle border border-dark"  style={{display:'inline-block', width:60, height:60}}><p style={{marginTop:15}}>70</p></span>
                                                <p style={{fontSize:13, color:'gray', marginTop:7}}>No of Videos</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className={utilStyles.card} style={{display:'inline-block', height:130, width:150, marginLeft:10, marginRight:10}}>
                                        <Card.Body>
                                            <div style={{ textAlign:'center'}} >
                                            <span class="rounded-circle border border-dark"  style={{display:'inline-block', width:60, height:60}}><p style={{marginTop:15}}>10</p></span>
                                                <p style={{fontSize:13, color:'gray', marginTop:7}}>No of Exams</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className={utilStyles.card} style={{display:'inline-block', height:130, width:150, marginLeft:10, marginRight:10}}>
                                        <Card.Body>
                                            <div style={{ textAlign:'center'}} >
                                            <span class="rounded-circle border border-dark"  style={{display:'inline-block', width:60, height:60}}><p style={{marginTop:15}}>2</p></span>
                                                <p style={{fontSize:13, color:'gray', marginTop:7}}>No of Seminars</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card style={{marginBottom:100}} className={utilStyles.card}>
                            <Card.Body>
                                <Card.Title>My Class</Card.Title>
                                <Card className={utilStyles.card}>
                                    <Card.Body>
                                        <Card.Title>Maths Class</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">No of Students <b>05</b></Card.Subtitle>
                                        <Divider/>
                                        <div className='row align-items-center flex-column flex-md-row' style={{marginTop:30}}>
                                            <div className='col' style={{textAlign:'center'}} >
                                                <p>No of Meetings</p>
                                                <p>10</p>
                                            </div>
                                            <div className='col' style={{textAlign:'center'}} >
                                                <p>No of Videos</p>
                                                <p>25</p>
                                            </div>
                                            <div className='col' style={{textAlign:'center'}} >
                                                <p>No of Exams</p>
                                                <p>05</p>
                                            </div>
                                            <div className='col' style={{textAlign:'center'}} >
                                                <p>No of Handouts</p>
                                                <p>15</p>
                                            </div>
                                        </div>
                                        <div style={{width:'100%', height:'auto', background:'#dbdbdb',borderRadius:10}}>
                                            <div style={{display:'inline-block', marginInline:20, padding:20}} >
                                                <b>Upcoming Exams</b>
                                                <p>01 JUL 2020,01:00 PM IST</p>
                                            </div>
                                            <div style={{display:'inline-block'}} >
                                                <b>Meetings Scheduled</b>
                                                <p>01 JUL 2020,01:00 PM IST</p>
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
