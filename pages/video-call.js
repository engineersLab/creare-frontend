import Head from 'next/head'
import {Card, Button,} from 'react-bootstrap'
import utilStyles from '../components/utilStyles.module.css'
import {IoIosSend} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'
import {IconContext} from 'react-icons'

const video = require('../public/assets/videocall.svg')

const AdminDashboard = ()=>{
    return(
        <>
            <Head>
                <title>Live Meeting</title>
            </Head>
            {/* <Sidebar/> */}
            
            <body style={{overflowX:'hidden'}} >
                <div className='cus-header-shadow cus-desktop-header'>
                    <div className='cus-header-content cus-header-start-2'>
                        <h3>Live Meeting</h3>
                    </div>
                </div>
        
                <div className='cus-mobile-header text-center'>
                    <h5 className='cus-mobile-header-padding'>Live Meeting</h5>
                    <hr className='my-4'/>
                </div>
                <div className='cus-horizontal-spacing cus-top-margin'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-8'>
                            <Card>
                                <Card.Body>
                                    <div className='row' >
                                        <div className='col d-flex justify-content-md-around '>
                                            <img style={{height:150}} src={video} className='img-fluid'/>
                                        </div>
                                        <div className='col d-flex justify-content-md-around'>
                                            <img style={{height:150}} src={video} className='img-fluid'/>
                                        </div>
                                        <div className='col d-flex justify-content-md-around'>
                                            <img style={{height:150}} src={video} className='img-fluid'/>
                                        </div>
                                    </div>

                                    <div style={{marginTop:30}} className='row' >
                                        <div className='col d-flex justify-content-md-around'>
                                            <img style={{height:150}} src={video} className='img-fluid'/>
                                        </div>
                                        <div className='col d-flex justify-content-md-around'>
                                            <img style={{height:150}} src={video} className='img-fluid'/>
                                        </div>
                                        <div className='col d-flex justify-content-md-around'>
                                            <img style={{height:150}} src={video} className='img-fluid'/>
                                        </div>
                                    </div>

                                    <div style={{marginTop:30}} className='row' >
                                        <div className='col d-flex justify-content-md-around'>
                                            <img style={{height:150}} src={video} className='img-fluid'/>
                                        </div>
                                        <div className='col d-flex justify-content-md-around'>
                                            <img style={{height:150}} src={video} className='img-fluid'/>
                                        </div>
                                        <div className='col d-flex justify-content-md-around'>
                                            <img style={{height:150}} src={video} className='img-fluid'/>
                                        </div>
                                    </div>      
                                </Card.Body>
                            </Card>
                        </div>
                        <div  className='col-sm-12 col-md-12 col-lg-4'>
                            <Card className='cus-mob-top-margin' style={{ height:300}}  >
                                <Card.Body>
                                    <h5>Class 6</h5>
                                    <div>
                                        <span style={{display:'inline-block', background:'#858585', borderRadius:50, width:10, height:10, marginLeft:20, marginRight:10}} ></span>
                                        <p style={{display:'inline'}}>Arthy</p> 
                                    </div>
                                    <div>
                                        <span style={{display:'inline-block', background:'#858585', borderRadius:50, width:10, height:10, marginLeft:20, marginRight:10}} ></span>
                                        <p style={{display:'inline'}}>Arjun</p> 
                                    </div>
                                    <div>
                                        <span style={{display:'inline-block', background:'#858585', borderRadius:50, width:10, height:10, marginLeft:20, marginRight:10}} ></span>
                                        <p style={{display:'inline'}}>Belinda</p> 
                                    </div>
                                    <div>
                                        <span style={{display:'inline-block', background:'#858585', borderRadius:50, width:10, height:10, marginLeft:20, marginRight:10}} ></span>
                                        <p style={{display:'inline'}}>Ganesh</p> 
                                    </div>
                                    <div>
                                        <span style={{display:'inline-block', background:'#858585', borderRadius:50, width:10, height:10, marginLeft:20, marginRight:10}} ></span>
                                        <p style={{display:'inline'}}>Sarvesh</p> 
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className='cus-top-margin-2' style={{height:300}} >
                                <Card.Body>
                                    <h5>Forum</h5>
                                    <div>
                                        <p style={{fontSize:13,marginBottom:0, color:'gray'}} >Arjun</p>
                                        <p style={{color:'blue'}}>Raised the hand</p>
                                    </div>
                                    <div style={{background:'gray', borderRadius:5, position:'absolute',left:0, bottom:0, width:'100%'}}>
                                        <p style={{display:'inline-block', marginLeft:20, fontWeight:600    }}>Can you explain this concept again?</p>
                                            <IconContext.Provider  value={{ color: "blue", size:'1.6em' }}>
                                                <IoIosSend style={{display:'inline', marginLeft:20,cursor:'pointer'}} onClick={()=>setVisible(!visible)}/> 
                                            </IconContext.Provider>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default AdminDashboard