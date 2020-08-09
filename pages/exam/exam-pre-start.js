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
                    <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                        <span style={{display:'inline-block'}} >
                            <h4 style={{marginLeft:50, marginTop:50}} >Take Exam</h4>
                        </span>
                        <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                            <Button variant='dark' style={{paddingRight:30,paddingLeft:30}}>Start</Button>
                        </span>
                    </div>

                    <div>
                        <div className='row'>
                            <div className='col col-md-4'>
                                <div style={{marginLeft:70, marginTop:50, marginRight:30}}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>
                                                Guidelines:
                                            </Card.Title>
                                            <br/>
                                            <ul>
                                                <li>Foam ear plugs to reduce noise are allowed and will also be available during the exam.</li>
                                                <br/>
                                                <li>Students may only bring an iPad and pencils/pen to the exam, unless otherwise instructed</li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className='col col-md-8'>
                                <div style={{marginRight:70, marginTop:50, marginLeft:30}}>
                                    <Card>
                                        <Card.Body>
                                            <div style={{ display:'block',  marginBottom:50}} className='d-flex justify-content-center'  >
                                                <div style={{width:'50%',borderRadius:20, padding:30,background:'gray'}} >
                                                    <h2 className='d-flex justify-content-center'>Science Exam</h2>
                                                    <h4 className='d-flex justify-content-center'>Class 6</h4>
                                                </div>
                                                
                                            </div>

                                            <div style={{display:'block'}} className='d-flex justify-content-center' >
                                                <div style={{width:'50%',borderRadius:20, padding:30,background:'gray',marginBottom:50}}>
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