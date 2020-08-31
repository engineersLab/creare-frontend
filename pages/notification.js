import Sidebar from '../components/sidebar'
import Head from 'next/head'
import {Card, Button} from 'react-bootstrap'
import {List, ListItem, ListItemText,Divider} from '@material-ui/core'

const Notification = () =>{

    return(
        <>
            <Head>
                <title>Notification</title>
            </Head>
            <Sidebar pageName='notification' />
            <body style={{height:'100vh'}}>
                <div className='cus-header-shadow cus-desktop-header'>
                    <div className='cus-header-content cus-header-start'>
                        <h3>Notifications</h3>
                    </div>
                </div>
        
                <div className='cus-mobile-header text-center'>
                    <h5 className='cus-mobile-header-padding'>Notifications</h5>
                    <hr className='my-4'/>
                </div>

                <div className='cus-dashboard-content'>
                    <Card className='cus-dashboard-card'>
                        <Card.Body>
                            <div>
                                <Card.Title className='cus-card-header-text'>Notifications</Card.Title>
                                <List>
                                    <Card.Title className='cus-card-sub-header-text' >Today</Card.Title>
                                    <ListItem >
                                        <ListItemText primary={<span className='cus-card-text'>You have received your timetable</span>}  />
                                        <Button className='cus-card-text' variant='light' size='sm' >Download</Button>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem >
                                        <ListItemText primary={<span className='cus-card-text'>You have received your timetable</span>}  />
                                        <Button className='cus-card-text' variant='light' size='sm' >Download</Button>
                                    </ListItem>
                                    <Divider/>
                                </List>

                                <List>
                                    <Card.Title className='cus-card-sub-header-text' >Yesterday</Card.Title>
                                    <ListItem >
                                        <ListItemText primary={<span className='cus-card-text'>You have received your timetable</span>}  />
                                        <Button className='cus-card-text' variant='light' size='sm' >Download</Button>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem >
                                        <ListItemText primary={<span className='cus-card-text'>You have received your timetable</span>}  />
                                        <Button className='cus-card-text' variant='light' size='sm' >Download</Button>
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