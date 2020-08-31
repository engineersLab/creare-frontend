import Link from 'next/link'
import Head from 'next/head'
import styles from '../components/styles.module.css'
import utilStyles from '../components/utilStyles.module.css'
import {Card, Button} from 'react-bootstrap'
import {Avatar} from '@material-ui/core'


const creareLogo = require('../public/assets/creareLogo.svg')


const JoinMeeting = () =>{

    return(
        <>
            <Head>
                <title>Join Meeting</title>
            </Head>

            <body>
                <div className='cus-header-shadow cus-desktop-header'>
                    <span style={{display:'inline-block'}} >
                        <img src={creareLogo} style={{marginLeft:30}} width="100" height="100" className="d-inline-block align-top"/>
                        <div style={{ display:'inline-block', marginTop:40, marginLeft:40}}>
                            <h4>Join Meeting</h4>
                        </div>
                    </span>
                    <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                        {/* <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Preview</Button> */}
                        {/* <Button variant='dark' style={{paddingRight:30,paddingLeft:30}}>Ask Question</Button> */}
                    </span>
                </div>

                <div className='cus-mobile-header text-center'>
                    <h4 className='cus-mobile-header-padding'>Join Meeting</h4>
                    <hr className='my-4'/>
                </div>

                <div className='cus-horizontal-spacing'>
                    <div>
                        <div className='cus-top-margin'>
                            <h5>TODAY</h5>
                        </div>
                        <div>
                            <div className='row' >
                                <div className='col-sm-12 col-md-12 col-lg-4'>
                                    <div>
                                        <div>
                                            <Card>
                                                <Card.Body>
                                                    <div className='row'>
                                                        <div className='col d-flex align-items-center justify-content-center' >
                                                            <Avatar style={{height:100, width:100}}>N</Avatar>
                                                        </div>
                                                        <div className='col' >
                                                            <div>
                                                                <p style={{fontWeight:600}}>Name</p>
                                                                <p style={{marginBottom:0}}> Maths Teacher</p>
                                                                <p style={{marginBottom:0}}>St. Johns School</p>
                                                                <span style={{display:'inline-block', background:'green', borderRadius:50, width:10, height:10, marginRight:10}} ></span>
                                                                <p style={{display:'inline', color:'green'}}>Live Now</p> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div style={{textAlign:'center', background:'#0D3D55',cursor:'pointer'}} >
                                            <Link href='#'>
                                                <p style={{padding:5, color:'white'}}>JOIN CLASS</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-12 col-md-12 col-lg-4'>
                                    <div>
                                        <div>
                                            <Card>
                                                <Card.Body>
                                                    <div className='row'>
                                                        <div className='col d-flex align-items-center justify-content-center' >
                                                        <Avatar style={{height:100, width:100}}>N</Avatar>
                                                        </div>
                                                        <div className='col' >
                                                            <div>
                                                                <p style={{fontWeight:600}}>Name</p>
                                                                <p style={{marginBottom:0}}> Maths Teacher</p>
                                                                <p style={{marginBottom:0}}>St. Johns School</p>
                                                                <p style={{display:'inline', color:'gray'}}>Scheduled @ 1PM</p> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div style={{textAlign:'center', background:'gray',cursor:'pointer'}} >
                                            <Link href='#'>
                                                <p style={{padding:5, color:'white'}}>SCHEDULED</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-12 col-md-12 col-lg-4' >
                                    <div>
                                        <div>
                                            <Card>
                                                <Card.Body>
                                                    <div className='row'>
                                                        <div className='col d-flex align-items-center justify-content-center' >
                                                            <Avatar style={{height:100, width:100}}>N</Avatar>
                                                        </div>
                                                        <div className='col' >
                                                            <div>
                                                                <p style={{fontWeight:600}}>Name</p>
                                                                <p style={{marginBottom:0}}> Maths Teacher</p>
                                                                <p style={{marginBottom:0}}>St. Johns School</p>
                                                                {/* <span style={{display:'inline-block', background:'green', borderRadius:50, width:10, height:10, marginRight:10}} ></span> */}
                                                                <p style={{display:'inline', color:'gray'}}>Scheduled @ 2PM</p> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div style={{textAlign:'center', background:'gray',cursor:'pointer'}} >
                                            <Link href='#'>
                                                <p style={{padding:5, color:'white'}}>SCHEDULED</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row' >
                                <div className='col-sm-12 col-md-12 col-lg-4'>
                                    <div>
                                        <div>
                                            <Card>
                                                <Card.Body>
                                                    <div className='row'>
                                                        <div className='col d-flex align-items-center justify-content-center' >
                                                            <Avatar style={{height:100, width:100}}>N</Avatar>
                                                        </div>
                                                        <div className='col' >
                                                            <div>
                                                                <p style={{fontWeight:600}}>Name</p>
                                                                <p style={{marginBottom:0}}> Maths Teacher</p>
                                                                <p style={{marginBottom:0}}>St. Johns School</p>
                                                                {/* <span style={{display:'inline-block', background:'green', borderRadius:50, width:10, height:10, marginRight:10}} ></span> */}
                                                                <p style={{display:'inline', color:'gray'}}>Scheduled at 3PM</p> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div style={{textAlign:'center', background:'#0D3D55',cursor:'pointer'}} >
                                            <Link href='#'>
                                                <p style={{padding:5, color:'white'}}>JOIN CLASS</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-12 col-md-12 col-lg-4'>
                                    <div>
                                        <div>
                                            <Card>
                                                <Card.Body>
                                                    <div className='row'>
                                                        <div className='col d-flex align-items-center justify-content-center' >
                                                            <Avatar style={{height:100, width:100}}>N</Avatar>
                                                        </div>
                                                        <div className='col' >
                                                            <div>
                                                                <p style={{fontWeight:600}}>Name</p>
                                                                <p style={{marginBottom:0}}> Maths Teacher</p>
                                                                <p style={{marginBottom:0}}>St. Johns School</p>
                                                                {/* <span style={{display:'inline-block', background:'green', borderRadius:50, width:10, height:10, marginRight:10}} ></span> */}
                                                                <p style={{display:'inline', color:'gray'}}>Scheduled at 3PM</p>  
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div style={{textAlign:'center', background:'gray',cursor:'pointer'}} >
                                            <Link href='#'>
                                                <p style={{padding:5, color:'white'}}>SCHEDULED</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-12 col-md-12 col-lg-4' >
                                    <div>
                                        <div>
                                            <Card>
                                                <Card.Body>
                                                    <div className='row'>
                                                        <div className='col d-flex align-items-center justify-content-center' >
                                                            <Avatar style={{height:100, width:100}}>N</Avatar>
                                                        </div>
                                                        <div className='col' >
                                                            <div>
                                                                <p style={{fontWeight:600}}>Name</p>
                                                                <p style={{marginBottom:0}}> Maths Teacher</p>
                                                                <p style={{marginBottom:0}}>St. Johns School</p>
                                                                {/* <span style={{display:'inline-block', background:'green', borderRadius:50, width:10, height:10, marginRight:10}} ></span> */}
                                                                <p style={{display:'inline', color:'gray'}}>Scheduled at 3PM</p>  
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div style={{textAlign:'center', background:'#FF5C5C',cursor:'pointer'}} >
                                            <Link href='#'>
                                                <p style={{padding:5, color:'white'}}>MISSED</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div >
                            <h5>UPCOMING</h5>
                        </div>
                        <div style={{paddingBottom:30}} >
                            <div className='row' >
                                <div className='col-sm-12 col-md-12 col-lg-4'>
                                    <div>
                                        <div>
                                            <Card>
                                                <Card.Body>
                                                    <div className='row'>
                                                        <div className='col d-flex align-items-center justify-content-center' >
                                                            <Avatar style={{height:100, width:100}}>N</Avatar>
                                                        </div>
                                                        <div className='col' >
                                                            <div>
                                                                <p style={{fontWeight:600}}>Name</p>
                                                                <p style={{marginBottom:0}}> Maths Teacher</p>
                                                                <p style={{marginBottom:0}}>St. Johns School</p>
                                                                <span style={{display:'inline-block', background:'green', borderRadius:50, width:10, height:10, marginRight:10}} ></span>
                                                                <p style={{display:'inline', color:'green'}}>Live Now</p> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div style={{textAlign:'center', background:'#0D3D55',cursor:'pointer'}} >
                                            <Link href='#'>
                                                <p style={{padding:5, color:'white'}}>JOIN CLASS</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-12 col-md-12 col-lg-4'>
                                    <div>
                                        <div>
                                            <Card>
                                                <Card.Body>
                                                    <div className='row'>
                                                        <div className='col d-flex align-items-center justify-content-center' >
                                                        <Avatar style={{height:100, width:100}}>N</Avatar>
                                                        </div>
                                                        <div className='col' >
                                                            <div>
                                                                <p style={{fontWeight:600}}>Name</p>
                                                                <p style={{marginBottom:0}}> Maths Teacher</p>
                                                                <p style={{marginBottom:0}}>St. Johns School</p>
                                                                <p style={{display:'inline', color:'gray'}}>Scheduled @ 1PM</p> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div style={{textAlign:'center', background:'gray',cursor:'pointer'}} >
                                            <Link href='#'>
                                                <p style={{padding:5, color:'white'}}>SCHEDULED</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-12 col-md-12 col-lg-4' >
                                    <div>
                                        <div>
                                            <Card>
                                                <Card.Body>
                                                    <div className='row'>
                                                        <div className='col d-flex align-items-center justify-content-center' >
                                                            <Avatar style={{height:100, width:100}}>N</Avatar>
                                                        </div>
                                                        <div className='col' >
                                                            <div>
                                                                <p style={{fontWeight:600}}>Name</p>
                                                                <p style={{marginBottom:0}}> Maths Teacher</p>
                                                                <p style={{marginBottom:0}}>St. Johns School</p>
                                                                {/* <span style={{display:'inline-block', background:'green', borderRadius:50, width:10, height:10, marginRight:10}} ></span> */}
                                                                <p style={{display:'inline', color:'gray'}}>Scheduled @ 2PM</p> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div style={{textAlign:'center', background:'gray',cursor:'pointer'}} >
                                            <Link href='#'>
                                                <p style={{padding:5, color:'white'}}>SCHEDULED</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row' >
                                <div className='col-sm-12 col-md-12 col-lg-4'>
                                    <div>
                                        <div>
                                            <Card>
                                                <Card.Body>
                                                    <div className='row'>
                                                        <div className='col d-flex align-items-center justify-content-center' >
                                                            <Avatar style={{height:100, width:100}}>N</Avatar>
                                                        </div>
                                                        <div className='col' >
                                                            <div>
                                                                <p style={{fontWeight:600}}>Name</p>
                                                                <p style={{marginBottom:0}}> Maths Teacher</p>
                                                                <p style={{marginBottom:0}}>St. Johns School</p>
                                                                {/* <span style={{display:'inline-block', background:'green', borderRadius:50, width:10, height:10, marginRight:10}} ></span> */}
                                                                <p style={{display:'inline', color:'gray'}}>Scheduled at 3PM</p> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div style={{textAlign:'center', background:'#0D3D55',cursor:'pointer'}} >
                                            <Link href='#'>
                                                <p style={{padding:5, color:'white'}}>JOIN CLASS</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-12 col-md-12 col-lg-4'>
                                    <div>
                                        <div>
                                            <Card>
                                                <Card.Body>
                                                    <div className='row'>
                                                        <div className='col d-flex align-items-center justify-content-center' >
                                                            <Avatar style={{height:100, width:100}}>N</Avatar>
                                                        </div>
                                                        <div className='col' >
                                                            <div>
                                                                <p style={{fontWeight:600}}>Name</p>
                                                                <p style={{marginBottom:0}}> Maths Teacher</p>
                                                                <p style={{marginBottom:0}}>St. Johns School</p>
                                                                {/* <span style={{display:'inline-block', background:'green', borderRadius:50, width:10, height:10, marginRight:10}} ></span> */}
                                                                <p style={{display:'inline', color:'gray'}}>Scheduled at 3PM</p>  
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div style={{textAlign:'center', background:'gray',cursor:'pointer'}} >
                                            <Link href='#'>
                                                <p style={{padding:5, color:'white'}}>SCHEDULED</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-12 col-md-12 col-lg-4' >
                                    <div>
                                        <div>
                                            <Card>
                                                <Card.Body>
                                                    <div className='row'>
                                                        <div className='col d-flex align-items-center justify-content-center' >
                                                            <Avatar style={{height:100, width:100}}>N</Avatar>
                                                        </div>
                                                        <div className='col' >
                                                            <div>
                                                                <p style={{fontWeight:600}}>Name</p>
                                                                <p style={{marginBottom:0}}> Maths Teacher</p>
                                                                <p style={{marginBottom:0}}>St. Johns School</p>
                                                                {/* <span style={{display:'inline-block', background:'green', borderRadius:50, width:10, height:10, marginRight:10}} ></span> */}
                                                                <p style={{display:'inline', color:'gray'}}>Scheduled at 3PM</p>  
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div style={{textAlign:'center', background:'gray',cursor:'pointer'}} >
                                            <Link href='#'>
                                                <p style={{padding:5, color:'white'}}>SCHEDULED</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default JoinMeeting