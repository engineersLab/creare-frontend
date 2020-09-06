import {useState} from 'react'
import Head from 'next/head'
import {Button, Form, Card} from 'react-bootstrap'
import {List, ListItem, Divider} from '@material-ui/core'


const ExamList = () =>{
    return(
        <>
            <Head>
                <title>Exam List</title>
            </Head>
            <body style={{overflowX:'hidden'}}>
                <div className='cus-header-shadow cus-desktop-header'>
                    <div className='cus-header-content cus-header-start-2'>
                        <h3>Prepare Exam Q/A</h3>
                    </div>
                </div>
        
                <div className='cus-mobile-header text-center'>
                    <h5 className='cus-mobile-header-padding'>Prepare Exam Q/A</h5>
                    <hr className='my-4'/>
                </div>
    
                <div className='cus-dashboard-content-2 cus-top-margin'>
                    <Card>
                        <Card.Body>
                            <Card.Title className='cus-card-header-text'>
                                List of Exams Scheduled
                            </Card.Title>
                            <List>
                                <ListItem>
                                    <div className='d-flex justify-content-between' style={{width:'100%'}}>
                                        <span>
                                            <p className='cus-card-text-2'>Class 6</p>
                                        </span>
                                        <span className='cus-inline'>
                                            <span className='cus-bullet'></span>
                                            <p className='cus-card-text-2'>Science Exam</p> 
                                        </span>
                                        <span>
                                            <Button variant='dark' className='cus-card-text-2' >Take Exam</Button>
                                        </span>
                                    </div>
                                </ListItem>
                                <Divider/>
                                <ListItem style={{marginTop:20}}>
                                    <div className='d-flex justify-content-between' style={{width:'100%'}}>
                                        <span>
                                            <p className='cus-card-text-2'>Class 9</p>
                                        </span>
                                        <span className='cus-inline'>
                                            <span className='cus-bullet' ></span>
                                            <p className='cus-card-text-2'>Maths Exam</p> 
                                        </span> 
                                        <span>
                                            <p className='cus-card-text-2' >24 June 2020</p>
                                        </span>                                       
                                    </div>
                                </ListItem>
                                <Divider/>
                                <ListItem style={{marginTop:20}}>
                                    <div className='d-flex justify-content-between' style={{width:'100%'}}>
                                        <span>
                                            <p className='cus-card-text-2'>Class 8</p>
                                        </span>
                                        <span className='cus-inline'>
                                            <span className='cus-bullet'></span>
                                            <p className='cus-card-text-2'>Social Exam</p> 
                                        </span> 
                                        <span>
                                            <p className='cus-card-text-2'>20 June 2020</p>
                                        </span>                                      
                                    </div>
                                </ListItem>
                                <Divider/>
                            </List>
                        </Card.Body>
                    </Card>
                </div>
            </body>
        </>
    )
}

export default ExamList