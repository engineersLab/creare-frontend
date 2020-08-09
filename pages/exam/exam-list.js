import {useState} from 'react'
import Head from 'next/head'
import {Button, Form, Card} from 'react-bootstrap'
import utilStyles from '../../components/utilStyles.module.css'
import {TextField, InputAdornment, InputBase, List, ListItem, Divider} from '@material-ui/core'


const ExamList = () =>{
    return(
        <>
            <Head>
                <title>Exam List</title>
            </Head>
            <body style={{overflowX:'hidden' }}>
            <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                <span style={{display:'inline-block'}} >
                    <h4 style={{marginLeft:50, marginTop:50}} >Prepare Exam Q/A</h4>
                </span>
                {/* <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                    <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Preview</Button>
                    <Button variant='dark' style={{paddingRight:30,paddingLeft:30}}>Publish</Button>
                </span> */}
            </div>
                <div style={{width:'100%', height:'100%', marginTop:50, marginLeft:50}} >
                    <Card style={{width:'50%'}} >
                        <Card.Body>
                            <Card.Title>
                                List of Exams Scheduled
                            </Card.Title>
                            <List >
                                <ListItem >
                                    <div className='d-flex justify-content-md-between' style={{width:'100%'}}>
                                        <p style={{display:'inline', marginLeft:20, marginRight:10}}>Class 6</p>
                                        <span style={{display:'inline'}} >
                                            <span style={{display:'inline-block', background:'#858585', borderRadius:50, width:10, height:10, marginLeft:20, marginRight:10}} ></span>
                                            <p style={{display:'inline'}}>Science Exam</p> 
                                        </span>
                                        <Button variant='dark' style={{display:'inline', float:'right'}} >Take Exam</Button>
                                    </div>
                                </ListItem>
                                <Divider/>
                                <ListItem style={{marginTop:20}}>
                                    <div className='d-flex justify-content-md-between' style={{width:'100%'}}>
                                        <p style={{display:'inline', marginLeft:20, marginRight:10}}>Class 9</p>
                                        <span style={{display:'inline'}} >
                                            <span style={{display:'inline-block', background:'#858585', borderRadius:50, width:10, height:10, marginLeft:20, marginRight:10}} ></span>
                                            <p style={{display:'inline'}}>Maths Exam</p> 
                                        </span>                                       
                                        <p style={{display:'inline', float:'right'}} >24 June 2020</p>
                                    </div>
                                </ListItem>
                                <Divider/>
                                <ListItem style={{marginTop:20}}>
                                    <div className='d-flex justify-content-md-between' style={{width:'100%'}}>
                                        <p style={{display:'inline', marginLeft:20, marginRight:10}}>Class 8</p>
                                        <span style={{display:'inline'}} >
                                            <span style={{display:'inline-block', background:'#858585', borderRadius:50, width:10, height:10, marginLeft:20, marginRight:10}} ></span>
                                            <p style={{display:'inline'}}>Social Exam</p> 
                                        </span>                                       
                                        <p style={{display:'inline', float:'right'}} >20 June 2020</p>
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