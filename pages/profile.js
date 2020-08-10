import Head from 'next/head'
import Sidebar from '../components/sidebar'
import {Card} from 'react-bootstrap'
import {TextField} from '@material-ui/core'

const profileImage = require('../public/assets/profile.svg')

const Profile = () =>{

    return(
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <Sidebar/>
            <body>
                <div>
                    <div style={{display:'inline-block'}}>
                        <h3 style={{marginLeft:135, marginTop:50}} >Profile</h3>
                    </div>
                    <div style={{marginLeft:135, marginRight:50, marginTop:40}} >
                        <Card>
                            <Card.Body>
                                <div className='row'>
                                    <div className='col col-md-4'>
                                        <div style={{textAlign:'center'}} >
                                            <img src={profileImage} style={{marginBottom:10}} className='img-fluid'/>
                            
                                            <p style={{fontSize:13, color:'blue'}} >Change Picture</p>
                                        </div>
                                    </div>

                                    <div className='col col-md-8 '>
                                        <div className='row  ' >
                                            <div className='col col-md-2' >
                                                <p style={{marginTop:5, color:'gray'}}>Name</p>
                                            </div>
                                            <div className='col col-md-6 d-flex justify-content-start'  >
                                                <TextField fullWidth size='small' id="outlined-basic" placeholder="Name" defaultValue='Mythreyi K' variant="outlined" />
                                            </div>
                                        </div>

                                        <div className='row' >
                                            <div className='col col-md-2' >
                                            <p style={{marginTop:5, color:'gray'}}>Age</p>
                                            </div>
                                            <div className='col col-md-6 d-flex justify-content-start' >
                                            <TextField fullWidth size='small' id="outlined-basic" placeholder="Age" defaultValue='14' variant="outlined" />
                                            </div>
                                        </div>

                                        <div className='row' >
                                            <div className='col col-md-2' >
                                            <p style={{marginTop:5, color:'gray'}}>School</p>
                                            </div>
                                            <div className='col col-md-6 d-flex justify-content-start' >
                                            <TextField fullWidth size='small' id="outlined-basic" placeholder='School' defaultValue='Shrishti Vidyashram' variant="outlined" />
                                            </div>
                                        </div>

                                        <div className='row' >
                                            <div className='col col-md-2' >
                                            <p style={{marginTop:5, color:'gray'}}>Registration ID</p>
                                            </div>
                                            <div className='col col-md-6 d-flex justify-content-start' >
                                            <TextField fullWidth size='small' id="outlined-basic" placeholder="Registration ID" defaultValue='5656 8787 4545' variant="outlined" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Profile