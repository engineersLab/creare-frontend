import Head from 'next/head'
import {Button, Card} from 'react-bootstrap'
import utilStyles from '../../components/utilStyles.module.css'


const ExamOn = () =>{

    return(
        <>
        <Head>
            <title>Science Exam</title>
        </Head>

        <body style={{overflowX:'hidden'}}>
            <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                <span style={{display:'inline-block'}} >
                    <h4 style={{marginLeft:50, marginTop:50}} >Science Exam</h4>
                </span>
                <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                    {/* <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Preview</Button> */}
                    <Button variant='dark' style={{paddingRight:30,paddingLeft:30}}>Submit</Button>
                </span>
            </div>

            <div >
                <div style={{marginLeft:70, marginTop:50, marginRight:30}}>
                    <Card>
                            <Card.Body>
                                <div style={{padding:20}}>
                                    <h4 style={{marginBottom:10}}>Section A</h4>
                                    
                                    <h5>10 Questions</h5>
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
            </body>
        </>
    )
}

export default ExamOn