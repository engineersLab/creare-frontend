import React, {useState} from 'react'
import Head from 'next/head'
import Sidebar from '../../components/sidebar'
import {Button, Card, Table} from 'react-bootstrap'
import utilStyles from '../../components/utilStyles.module.css'


const Remainders = () =>{

    
    return(
        <>
            <Head>
                <title>Remainders</title>
            </Head>
            <Sidebar pageName='remainder'/>
            <body>
                <div className='cus-header-shadow cus-desktop-header'>
                    <div className='cus-header-content cus-header-start'>
                        <h3>Remainders</h3>
                    </div>
                    <div className='cus-header-content cus-header-end'>
                        <Button variant='outline-dark' style={{marginRight:20}} >Go Live</Button>
                        <Button variant='dark' style={{marginRight:20}} >Create Remainder</Button>
                    </div>
                </div>
                <div className='cus-mobile-header text-center'>
                    <h5 className='cus-mobile-header-padding'>Remainders</h5>
                    <hr className='my-4'/>
                </div>
               
                <div className='cus-dashboard-content cus-top-margin'>
                    <div>
                        <Card className='cus-sub-display-card-2 cus-card-shadow'>
                            <Card.Body>
                                <Card.Title style={{fontSize:16, fontWeight:600}}>Today</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='cus-sub-display-card-2 cus-card-shadow'>
                            <Card.Body>
                                <Card.Title style={{fontSize:16, fontWeight:600}}>Upcoming</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='cus-sub-display-card-2 cus-card-shadow'>
                            <Card.Body>
                                <Card.Title style={{fontSize:16, fontWeight:600}}>Completed</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='cus-sub-display-card-2 cus-card-shadow'>
                            <Card.Body>
                                <Card.Title style={{fontSize:16, fontWeight:600}}>Missed</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='cus-mobile-view'>
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Scheduled</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Go live at 2 PM</td>
                                <td>Sunday</td>
                                <td><Button variant='dark' style={{float:'right'}} >Mark as Completed</Button></td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Maths Exam</td>
                                <td>Tuesday</td>
                                <td><Button variant='dark' style={{float:'right'}} >Mark as Completed</Button></td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td >Science Exam</td>
                                <td>Monday</td>
                                <td><Button variant='dark' style={{float:'right'}} >Mark as Completed</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </body>  
        </>
    )
}

export default Remainders

