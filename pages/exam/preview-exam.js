import Head from 'next/head'
import {Button, Card} from 'react-bootstrap'
import utilStyles from '../../components/utilStyles.module.css'


const PreviewExam = () =>{

    return(
        <>
        <Head>
            <title>Preview Exam</title>
        </Head>

        <body style={{overflowX:'hidden'}}>
            <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                <span style={{display:'inline-block'}} >
                    <h4 style={{marginLeft:50, marginTop:50}} >Prepare Exam Q/A</h4>
                </span>
                <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                    {/* <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Preview</Button> */}
                    <Button variant='dark' style={{paddingRight:30,paddingLeft:30}}>Publish</Button>
                </span>
            </div>

            <div style={{marginBottom:50}}>
                <div className='row' >

                    <div className='col col-md-4' >
                        <div style={{marginLeft:70, marginTop:50, marginRight:30}}>
                            <Card className={utilStyles.card}>
                                <Card.Body>
                                    <div className='row' style={{marginBottom:20}} >
                                        <span className='col'>Class</span>
                                        <span className='col'>Class 6</span>
                                    </div>
                                    <div className='row' style={{marginBottom:20}} >
                                        <span className='col'>Time Duration (in mins)</span>
                                        <span className='col'>60</span>
                                    </div>
                                    <div>
                                        <p>Guidelines:</p>
                                        <ul>
                                            <li>Foam ear plugs to reduce noise are allowed and will also be available during the exam.</li>
                                            <li>Students may only bring an iPad and pencils/pen to the exam, unless otherwise instructed</li>
                                        </ul>
                                    </div>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className='col col-md-8' >
                        <div style={{marginRight:70, marginTop:50, marginLeft:30}}>
                            <Card>
                                <Card.Body>
                                    <div className='row'>
                                        <span className='col'>
                                            Section A
                                        </span>
                                        <span className='col d-flex justify-content-end'>
                                            <p style={{color:'blue'}}>Edit</p>
                                        </span>
                                    </div>

                                    <Card>
                                        <Card.Body>
                                            <Card.Text>Q1 Pick the odd one</Card.Text>
                                            <div style={{marginBottom:10}} className='d-flex flex-column flex-md-row'>
                                                <input  type='radio' checked disabled />
                                                <p style={{marginLeft:20,marginTop:14, color:'darkgreen'}} >Fish</p>
                                            </div>
                                            <div style={{marginBottom:10}} className='d-flex flex-column flex-md-row'>
                                                <input  type='radio' disabled />
                                                <p style={{marginLeft:20,marginTop:14, color:'red'}} >Tiger</p>
                                            </div>
                                            <div style={{marginBottom:10}} className='d-flex flex-column flex-md-row'>
                                                <input  type='radio' disabled />
                                                <p style={{marginLeft:20,marginTop:14, color:'red'}} >Lion</p>
                                            </div>
                                        </Card.Body>
                                    </Card>

                                    <Card>
                                        <Card.Body>
                                            <Card.Text>Q2 Pick the odd one</Card.Text>
                                            <div style={{marginBottom:10}} className='d-flex flex-column flex-md-row'>
                                                <input  type='radio'  disabled />
                                                <p style={{marginLeft:20,marginTop:14, color:'red'}} >Car</p>
                                            </div>
                                            <div style={{marginBottom:10}} className='d-flex flex-column flex-md-row'>
                                                <input  type='radio' checked disabled />
                                                <p style={{marginLeft:20,marginTop:14, color:'darkgreen'}} >Ship</p>
                                            </div>
                                            <div style={{marginBottom:10}} className='d-flex flex-column flex-md-row'>
                                                <input  type='radio' disabled />
                                                <p style={{marginLeft:20,marginTop:14, color:'red'}} >Bike</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    
                                </Card.Body>
                            </Card>
                        </div>  
                    </div>
                </div>
            </div>
            </body>
        </>
    )
}

export default PreviewExam