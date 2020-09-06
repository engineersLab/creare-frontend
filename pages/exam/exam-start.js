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
            <div className='cus-header-shadow cus-desktop-header'>
                <div className='cus-header-content cus-header-start-2'>
                    <h3>Science Exam</h3>
                </div>
                <div className='cus-header-content cus-header-end'>
                    {/* <Button variant='outline-dark' style={{marginRight:20}} >Go Live</Button> */}
                    <Button variant='dark' className='cus-horizontal-padding cus-right-margin'>Submit</Button>
                </div>
            </div>
    
            <div className='cus-mobile-header text-center'>
                <h5 className='cus-mobile-header-padding cus-inline-block'>Science Exam</h5>
                <Button variant='dark' className='cus-horizontal-padding cus-inline-block cus-float-right cus-right-margin cus-mob-top-margin-2'>Submit</Button>
                <hr className='my-4'/>
            </div>

            <div>
                <div className='cus-horizontal-spacing cus-top-margin'>
                    <Card>
                        <Card.Body>
                            <div style={{padding:20}}>
                                <h4 style={{marginBottom:10}}>Section A</h4>
                                
                                <h5>10 Questions</h5>
                            </div>

                            <Card className='cus-card-shadow'>
                                <Card.Body>
                                    <Card.Text>Q1 Pick the odd one</Card.Text>
                                    <div style={{marginBottom:10}}>
                                        <input style={{marginTop:6}} className='cus-inline'  type='radio' checked/>
                                        <p style={{marginLeft:20, color:'darkgreen'}} className='cus-inline'>Fish</p>
                                    </div>
                                    <div style={{marginBottom:10}}>
                                        <input style={{marginTop:6}} className='cus-inline'  type='radio' />
                                        <p style={{marginLeft:20, color:'red'}} className='cus-inline' >Tiger</p>
                                    </div>
                                    <div style={{marginBottom:10}} >
                                        <input style={{marginTop:6}} className='cus-inline'  type='radio'/>
                                        <p style={{marginLeft:20, color:'red'}} className='cus-inline'>Lion</p>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card className='cus-card-shadow'>
                                <Card.Body>
                                    <Card.Text>Q2 Pick the odd one</Card.Text>
                                    <div style={{marginBottom:10}}>
                                        <input style={{marginTop:6}} className='cus-inline' type='radio' />
                                        <p style={{marginLeft:20, color:'red'}} className='cus-inline'>Car</p>
                                    </div>
                                    <div style={{marginBottom:10}} >
                                        <input style={{marginTop:6}} className='cus-inline' type='radio' checked />
                                        <p style={{marginLeft:20, color:'darkgreen'}} className='cus-inline' >Ship</p>
                                    </div>
                                    <div style={{marginBottom:10}}>
                                        <input style={{marginTop:6}} className='cus-inline' type='radio' />
                                        <p style={{marginLeft:20, color:'red'}} className='cus-inline' >Bike</p>
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