import Sidebar from '../components/sidebar'
import Head from 'next/head'
import utilStyles from '../components/utilStyles.module.css'
import {Card, Button} from 'react-bootstrap'
import {List, ListItem, ListItemText,Divider} from '@material-ui/core'

const Notification = () =>{

    return(
        <>
            <Head>
                <title>Notification</title>
            </Head>
            <Sidebar pageName='notification' />
            <body style={{height:'90vh'}}>
                <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                    <span style={{display:'inline-block'}} >
                        <h3 style={{marginLeft:135, marginTop:50}} >Notifications</h3>
                    </span>
                    <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                        {/* <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Preview</Button> */}
                        {/* <Button onClick={()=>setQShow(true)} variant='dark' style={{paddingRight:30,paddingLeft:30}}>Ask Question</Button> */}
                    </span>
                </div>

                <div>
                    <Card className={utilStyles.card} style={{ marginLeft:135,marginTop:20, marginRight:50, marginBottom:20}}>
                        <Card.Body>
                            <div>
                                <Card.Title style={{fontSize:20, fontWeight:600}}>Notifications</Card.Title>
                                <List>
                                    <p style={{fontWeight:600}}>Today</p>
                                    <ListItem >
                                        <ListItemText primary={<span style={{fontSize:13}}>You have received your timetable</span>}  />
                                        <Button variant='light' size='sm' >Download</Button>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem >
                                        <ListItemText primary={<span style={{fontSize:13}}>You have received your timetable</span>}  />
                                        <Button variant='light' size='sm' >Download</Button>
                                    </ListItem>
                                    <Divider/>
                                </List>

                                <List>
                                    <p style={{fontWeight:600}}>Yesterday</p>
                                    <ListItem >
                                        <ListItemText primary={<span style={{fontSize:13}}>You have received your timetable</span>}  />
                                        <Button variant='light' size='sm' >Download</Button>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem >
                                        <ListItemText primary={<span style={{fontSize:13}}>You have received your timetable</span>}  />
                                        <Button variant='light' size='sm' >Download</Button>
                                    </ListItem>
                                    <Divider/>
                                </List>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </body>
        </>
    )
}

export default Notification