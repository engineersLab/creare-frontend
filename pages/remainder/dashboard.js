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
                <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                    <span style={{display:'inline-block'}} >
                        <h3 style={{marginLeft:135, marginTop:50}} >Remainders</h3>
                    </span>
                    <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                        {/* <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Preview</Button> */}
                        <Button variant='dark' style={{paddingRight:30,paddingLeft:30}}>Create Remainder</Button>
                    </span>
                </div>

                <div style={{width:'auto',marginLeft:135, marginTop:30, marginBottom:30}}>
                        <Card className={utilStyles.header_shadow} style={{height:140, width:160,display:'inline-block',marginLeft:20, marginRight:20  }}>
                            <Card.Body>
                                <Card.Title style={{fontSize:16, fontWeight:600}}>Today</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={utilStyles.header_shadow} style={{height:140, width:160,display:'inline-block',marginLeft:20, marginRight:20 }}>
                            <Card.Body>
                                <Card.Title style={{fontSize:16, fontWeight:600}}>Upcoming</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={utilStyles.header_shadow} style={{height:140, width:160,display:'inline-block',marginLeft:20, marginRight:20 }}>
                            <Card.Body>
                                <Card.Title style={{fontSize:16, fontWeight:600}}>Completed</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={utilStyles.header_shadow} style={{height:140, width:160,display:'inline-block',marginLeft:20, marginRight:20 }}>
                            <Card.Body>
                                <Card.Title style={{fontSize:16, fontWeight:600}}>Missed</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{marginLeft:135, marginRight:50}} >
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
                    
            </body>
            
        </>
    )
}

export default Remainders

