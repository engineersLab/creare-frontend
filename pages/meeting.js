import Link from 'next/link'
import Head from 'next/head'
import styles from '../components/styles.module.css'
import utilStyles from '../components/utilStyles.module.css'
import {Card, Button} from 'react-bootstrap'
import {IconContext} from 'react-icons'
import {BsFillMicFill, BsMic, BsMicMuteFill,BsCameraVideoFill} from 'react-icons/bs'
import {GrNotes} from 'react-icons/gr'
import {AiOutlineWechat} from 'react-icons/ai'
import {FaHandPaper} from 'react-icons/fa'


const creareLogo = require('../public/assets/creareLogo.svg')
const callImage = require('../public/assets/videocall.svg')


const Meeting = () =>{

    return(
        <>
            <Head>
                <title>Meeting</title>
            </Head>

            <body>
                <div className='cus-header-shadow cus-desktop-header'>
                    <span style={{display:'inline-block'}} >
                        <img src={creareLogo} style={{marginLeft:30}} width="100" height="100" className="d-inline-block align-top"/>
                        <div style={{ display:'inline-block', marginTop:40, marginLeft:40}}>
                            <h4>Mr.Vishwanath's virtual classroom</h4>
                        </div>
                    </span>
                    <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:40}} >
                        {/* <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Preview</Button> */}
                        <Button variant='dark' style={{paddingRight:30,paddingLeft:30}}>End Call</Button>
                    </span>
                </div>

                <div className='cus-mobile-header text-center'>
                    <h5 className='cus-mobile-header-padding'>Mr.Vishwanath's virtual classroom</h5>
                    <hr className='my-4'/>
                </div>

                <div>
                    <div style={{marginRight:100, marginLeft:100, marginTop:30}}>
                        <div className='row' >
                            <div className='col' style={{background:'aliceblue'}}>
                                <div style={{padding:100}} className='d-flex align-items-center justify-content-center'>
                                    <img style={{width:120}} src={callImage} className='img-fluid'/>
                                </div>
                            </div>

                            <div className='col' style={{background:'aliceblue'}}>
                                <div style={{padding:100}} className='d-flex align-items-center justify-content-center'>
                                    <img style={{width:120}} src={callImage} className='img-fluid'/>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:20}}>
                            <div>
                                <p style={{fontWeight:600}}>Participants</p>
                            </div>
                            <div>
                                <div className='row' >
                                    <div className='col'>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <img style={{width:100}} src={callImage} className='img-fluid'/>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <img style={{width:100}} src={callImage} className='img-fluid'/>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <img style={{width:100}} src={callImage} className='img-fluid'/>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <img style={{width:100}} src={callImage} className='img-fluid'/>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <img style={{width:100}} src={callImage} className='img-fluid'/>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>

                        <div style={{marginTop:30}}>
                            <div style={{display:'inline-block'}}>
                                <div style={{display:'inline-block', marginRight:15}}>
                                    <Button variant='outline-dark' style={{padding:10}}>
                                        <IconContext.Provider  value={{ size:'1.4em' }}>
                                            <BsFillMicFill style={{cursor:'pointer'}}/> 
                                        </IconContext.Provider>
                                    </Button>
                                </div>
                                <div style={{display:'inline-block', marginRight:15}}>
                                    <Button variant='outline-dark' style={{padding:10}}>
                                        <IconContext.Provider  value={{ size:'1.4em' }}>
                                            <BsCameraVideoFill style={{cursor:'pointer'}}/> 
                                        </IconContext.Provider>
                                    </Button>
                                </div>
                                <div style={{display:'inline-block'}}>
                                    <p style={{fontWeight:600,color:'#0d3d55'}}>Screen Share</p>
                                </div>
                            </div>

                            <div style={{display:'inline-block', float:'right'}}>
                                <div style={{display:'inline-block', marginRight:15}}>
                                    <Button variant='outline-dark' style={{padding:10}}>
                                        Show Participants View
                                    </Button>
                                </div>
                                <div style={{display:'inline-block', marginRight:15}}>
                                    <Button variant='outline-dark' style={{padding:10}}>
                                        <IconContext.Provider  value={{ size:'1.4em' }}>
                                            <GrNotes style={{cursor:'pointer'}}/> 
                                        </IconContext.Provider>
                                    </Button>
                                </div>
                                <div style={{display:'inline-block', marginRight:15}}>
                                    <Button variant='outline-dark' style={{padding:10}}>
                                        <IconContext.Provider  value={{ size:'1.4em' }}>
                                            <FaHandPaper style={{cursor:'pointer'}}/> 
                                        </IconContext.Provider>
                                    </Button>
                                </div>
                                <div style={{display:'inline-block', marginRight:15}}>
                                    <Button variant='outline-dark' style={{padding:10}}>
                                        <IconContext.Provider  value={{ size:'1.4em' }}>
                                            <AiOutlineWechat style={{cursor:'pointer'}}/> 
                                        </IconContext.Provider>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Meeting