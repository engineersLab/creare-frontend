import {useState} from 'react'
import Head from 'next/head'
import {Button, Form, Card} from 'react-bootstrap'
import utilStyles from '../../components/utilStyles.module.css'
import {TextField, InputAdornment} from '@material-ui/core'

const ExamStart = () =>{

    return(
        <>
            <Head>
                <title>
                    Exam Start
                </title>

                <body style={{overflowX:'hidden'}}>
                    <div className='cus-header-shadow cus-desktop-header'>
                        <div className='cus-header-content cus-header-start-2'>
                            <h3>Take Exam</h3>
                        </div>
                        <div className='cus-header-content cus-header-end'>
                            {/* <Button variant='outline-dark' style={{marginRight:20}} >Go Live</Button> */}
                            <Button variant='dark' className='cus-horizontal-padding cus-right-margin'>Start</Button>
                        </div>
                     </div>
           
                    <div className='cus-mobile-header text-center'>
                        <h5 className='cus-mobile-header-padding cus-inline-block'>Take Exam</h5>
                        <Button variant='dark' className='cus-horizontal-padding cus-inline-block cus-float-right cus-right-margin cus-mob-top-margin-2'>Start</Button>
                        <hr className='my-4'/>
                    </div>

                    <div>
                        <div className='row cus-top-margin'>
                            <div className='col-sm-12 col-md-12 col-lg-4'>
                                <div className='cus-horizontal-spacing-2'>
                                    <Card className='cus-card-shadow'>
                                        <Card.Body>
                                            <Card.Title className='cus-card-header-text'>
                                                Guidelines:
                                            </Card.Title>
                                            <br/>
                                            <ul>
                                                <li><p className='cus-card-text-3'>Foam ear plugs to reduce noise are allowed and will also be available during the exam.</p></li>
                                                <br/>
                                                <li><p className='cus-card-text-3'>Students may only bring an iPad and pencils/pen to the exam, unless otherwise instructed</p></li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-12 col-lg-8'>
                                <div className='cus-horizontal-spacing-2'>
                                    <Card className='cus-card-shadow'>
                                        <Card.Body>
                                            <div style={{ display:'block',  marginBottom:50}} className='d-flex justify-content-center'  >
                                                <div className='cus-desktop-width' style={{borderRadius:20, padding:30,background:'gray'}} >
                                                    <h2 className='d-flex justify-content-center'>Science Exam</h2>
                                                    <h4 className='d-flex justify-content-center'>Class 6</h4>
                                                </div>
                                                
                                            </div>

                                            <div style={{display:'block'}} className='d-flex justify-content-center' >
                                                <div className='cus-desktop-width' style={{borderRadius:20, padding:30,background:'gray',marginBottom:50}}>
                                                    <p style={{fontSize:20}} className='d-flex justify-content-center'>Time duration (in mins)</p>
                                                    <b style={{fontSize:20}} className='d-flex justify-content-center'>30</b>
                                                </div> 
                                            </div>
                                            <p style={{float:'right'}}>-By Bharathi Vishwanathan</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </Head>
        </>
    )
}

export default ExamStart