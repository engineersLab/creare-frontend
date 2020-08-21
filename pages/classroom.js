import Sidebar from '../components/sidebar'
import {Card, Button, DropdownButton, Dropdown, Table} from 'react-bootstrap'
import Head from 'next/head'
import utilStyles from '../components/utilStyles.module.css'


export default function ClassRoom(){


    return(
        <>
            <Head>
                <title>ClassRoom</title>
            </Head>
            <Sidebar/>
            <body style={{height:'100vh'}}>
                <div style={{marginLeft:100}}>
                    <div style={{width:'100%',display:'inline-block'}}>
                        <div style={{float:"right", marginTop:25}} >
                            <Button variant='outline-dark' style={{marginRight:20}} >Go Live</Button>
                            <Button variant='dark' style={{marginRight:20}} >Create New</Button>
                        </div>
                    </div>
                    <div style={{width:'100%',display:'inline-block'}}>
                        <div style={{float:"left", marginTop:25}} >
                            <DropdownButton variant='outline-dark' style={{display:'inline-block'}} id="dropdown-basic-button" title="Classroom">
                                <Dropdown.Item href="#/action-1">Join Class</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Schedule Class</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                    <div style={{width:'auto', marginTop:30, marginBottom:30}}>
                        <Card className={utilStyles.header_shadow} style={{height:140, width:160,display:'inline-block',marginLeft:10, marginRight:10, cursor:'pointer' }}>
                            <Card.Body>
                                <Card.Title style={{fontSize:16, fontWeight:600}}>Total Students</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={utilStyles.header_shadow} style={{height:140, width:160,display:'inline-block',marginLeft:10, marginRight:10 , cursor:'pointer'}}>
                            <Card.Body>
                                <Card.Title style={{fontSize:16, fontWeight:600}}>Exam Papers</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={utilStyles.header_shadow} style={{height:140, width:160,display:'inline-block',marginLeft:10, marginRight:10, cursor:'pointer' }}>
                            <Card.Body>
                                <Card.Title style={{fontSize:16, fontWeight:600}}>Videos</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={utilStyles.header_shadow} style={{height:140, width:160,display:'inline-block',marginLeft:10, marginRight:10, cursor:'pointer' }}>
                            <Card.Body>
                                <Card.Title style={{fontSize:16, fontWeight:600}}>Quiz</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={utilStyles.header_shadow} style={{height:140, width:160,display:'inline-block',marginLeft:10, marginRight:10, cursor:'pointer' }}>
                            <Card.Body>
                                <Card.Title style={{fontSize:16, fontWeight:600}}>Syllabus</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={utilStyles.header_shadow} style={{height:140, width:160,display:'inline-block',marginLeft:10, marginRight:10, cursor:'pointer' }}>
                            <Card.Body>
                                <Card.Title style={{fontSize:16, fontWeight:600}} >Remainders</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={utilStyles.header_shadow} style={{height:140, width:160,display:'inline-block',marginLeft:10, marginRight:10, cursor:'pointer' }}>
                            <Card.Body >
                                <Card.Title style={{fontSize:16, fontWeight:600}}>Went Live</Card.Title>
                                <Card.Text><b>05</b></Card.Text>
                            </Card.Body>
                        </Card>

                    </div>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>School Name</th>
                                <th>Performance</th>
                                <th>Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>70</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>70</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                <td>70</td>
                            </tr>
                        </tbody>
                    </Table>
                    {/* <Button variant='dark' style={{position:'absolute', bottom:40, right:60}}>Chat</Button> */}
                    
                    {/* <div style={{position:'absolute', right:20, bottom:20,height:'50%', width:'18%'}} >
                        <Card style={{height:'100%'}} >
                            <Card.Body>
                                <b>My Chat</b>
                                <List>
                                    <ListItem alignItems="flex-start" >
                                        <ListItemAvatar>
                                            <Avatar>V</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={<b>Vishwanathan</b>}
                                        secondary={<p>What is the importance of bio enzymes</p>
                                            <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                Ali Connors
                                            </Typography>
                                            {" I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                    <ListItem alignItems="flex-start" >
                                        <ListItemAvatar>
                                            <Avatar>G</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={<b>Ganesh</b>}
                                        secondary={<p>What is the importance of bio enzymes</p>
                                            <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                Ali Connors
                                            </Typography>
                                            {" I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                </List>
                            </Card.Body>
                        </Card>
                    </div> */}
                </div>
            </body>
        </>
    )
}