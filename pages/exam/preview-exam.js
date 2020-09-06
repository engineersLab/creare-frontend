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
            
            <div className='cus-header-shadow cus-desktop-header'>
                <div className='cus-header-content cus-header-start-2'>
                    <h3>Prepare Exam Q/A</h3>
                </div>
                <div className='cus-header-content cus-header-end'>
                    {/* <Button variant='outline-dark' style={{marginRight:20}} >Go Live</Button> */}
                    <Button variant='dark' className='cus-horizontal-padding cus-right-margin'>Publish</Button>
                </div>
            </div>
    
            <div className='cus-mobile-header text-center'>
                <h5 className='cus-mobile-header-padding cus-inline-block'>Prepare Exam Q/A</h5>
                <Button variant='dark' className='cus-horizontal-padding cus-inline-block cus-float-right cus-right-margin cus-mob-top-margin-2'>Publish</Button>
                <hr className='my-4'/>
            </div>

            <div>
                <div className='row cus-top-margin' >
                    <div className='col-sm-12 col-md-12 col-lg-4' >
                        <Card className='cus-card-shadow cus-horizontal-spacing-2'>
                            <Card.Body>
                                <div className='row' style={{marginBottom:20}} >
                                    <span className='col cus-card-text-3'>Class</span>
                                    <span className='col cus-card-text-3'>Class 6</span>
                                </div>
                                <div className='row' style={{marginBottom:20}} >
                                    <span className='col cus-card-text-3'>Time Duration (in mins)</span>
                                    <span className='col cus-card-text-3'>60</span>
                                </div>
                                <div>
                                    <p className='cus-card-text-3'>Guidelines:</p>
                                    <ul>
                                        <li><p className='cus-card-text-3'>Foam ear plugs to reduce noise are allowed and will also be available during the exam.</p></li>
                                        <li><p className='cus-card-text-3'>Students may only bring an iPad and pencils/pen to the exam, unless otherwise instructed</p></li>
                                    </ul>
                                </div>
                                
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-sm-12 col-md-12 col-lg-8' >
                        <Card className='cus-card-shadow cus-horizontal-spacing-2'>
                            <Card.Body>
                                <div className='row'>
                                    <span className='col'>
                                        Section A
                                    </span>
                                    <span className='col d-flex justify-content-end'>
                                        <p style={{color:'blue'}}>Edit</p>
                                    </span>
                                </div>

                                <Card className='cus-top-margin-2'>
                                    <Card.Body>
                                        <Card.Text>Q1 Pick the odd one</Card.Text>
                                        <div style={{marginBottom:10}}>
                                            <input style={{marginTop:6}} className='cus-inline' type='radio' checked disabled />
                                            <p style={{marginLeft:20, color:'darkgreen'}} className='cus-inline' >Fish</p>
                                        </div>
                                        <div style={{marginBottom:10}}>
                                            <input style={{marginTop:6}} className='cus-inline' type='radio' disabled />
                                            <p style={{marginLeft:20,color:'red'}} className='cus-inline' >Tiger</p>
                                        </div>
                                        <div style={{marginBottom:10}}>
                                            <input style={{marginTop:6}} className='cus-inline' type='radio' disabled />
                                            <p style={{marginLeft:20, color:'red'}} className='cus-inline' >Lion</p>
                                        </div>
                                    </Card.Body>
                                </Card>

                                <Card className='cus-top-margin-2'>
                                    <Card.Body>
                                        <Card.Text>Q2 Pick the odd one</Card.Text>
                                        <div style={{marginBottom:10}}>
                                            <input style={{marginTop:6}} className='cus-inline' type='radio'  disabled />
                                            <p style={{marginLeft:20, color:'red'}} className='cus-inline'  >Car</p>
                                        </div>
                                        <div style={{marginBottom:10}}>
                                            <input style={{marginTop:6}} className='cus-inline' type='radio' checked disabled />
                                            <p style={{marginLeft:20, color:'darkgreen'}} className='cus-inline'>Ship</p>
                                        </div>
                                        <div style={{marginBottom:10}}>
                                            <input style={{marginTop:6}} className='cus-inline' type='radio' disabled />
                                            <p style={{marginLeft:20, color:'red'}} className='cus-inline'>Bike</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                                
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            </body>
        </>
    )
}

export default PreviewExam