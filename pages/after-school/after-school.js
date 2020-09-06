import Sidebar from '../../components/sidebar'
import Head from 'next/head'
import utilStyles from '../../components/utilStyles.module.css'
import {Card, Button} from 'react-bootstrap'
import {List, ListItem, ListItemText,Divider} from '@material-ui/core'

const Brainclub = require('../../public/assets/brainclub.svg')
const ArtClub = require('../../public/assets/culturalclub.svg')
const LanguageClub = require('../../public/assets/languageclub.svg')
const GamesClub = require('../../public/assets/gamesclub.svg')
const AptitudeClub = require('../../public/assets/aptitudeclub.svg')
const Bulletin = require('../../public/assets/bulletin.svg')

const AfterSchool = () =>{

    return(
        <>
            <Head>
                <title>After School</title>
            </Head>
            <Sidebar/>
            <body>
                <div className='cus-header-shadow cus-desktop-header'>
                    <div className='cus-header-content cus-header-start'>
                        <h3>After School</h3>
                    </div>
                </div>
        
                <div className='cus-mobile-header text-center'>
                    <h5 className='cus-mobile-header-padding'>After School</h5>
                    <hr className='my-4'/>
                </div>

                <div className='cus-dashboard-content cus-top-margin'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-3'>
                            <Card className='cus-card-shadow' style={{height:210, cursor:'pointer'}}  >
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={Brainclub} className='img-fluid'/>
                                        <p style={{marginTop:10}} > Brain Club</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-3' >
                            <Card className='cus-card-shadow' style={{height:210, cursor:'pointer'}}>
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={ArtClub} className='img-fluid'/>
                                        <p style={{marginTop:10}} > Cultural Club</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-3' >
                            <Card className='cus-card-shadow' style={{height:210, cursor:'pointer'}}>
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={Bulletin} className='img-fluid'/>
                                        <p style={{marginTop:10}} > Coding Club</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-3' >
                            <Card className='cus-card-shadow' style={{height:210, cursor:'pointer'}} >
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={LanguageClub} className='img-fluid'/>
                                        <p style={{marginTop:10}} > Language Club</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className='row' style={{marginTop:30}}>
                        <div className='col-sm-12 col-md-6 col-lg-3'>
                            <Card className='cus-card-shadow' style={{height:210, cursor:'pointer'}}  >
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={ArtClub} className='img-fluid'/>
                                        <p style={{marginTop:10}} > Art Club</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-3' >
                            <Card className='cus-card-shadow' style={{height:210, cursor:'pointer'}}>
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={GamesClub} className='img-fluid'/>
                                        <p style={{marginTop:10}} > Games Club</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-3' >
                            <Card className='cus-card-shadow' style={{height:210, cursor:'pointer'}}>
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={AptitudeClub} className='img-fluid'/>
                                        <p style={{marginTop:10}} > Aptitude Club</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-3' >
                            <Card className='cus-card-shadow' style={{height:210, cursor:'pointer'}} >
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={Bulletin} className='img-fluid'/>
                                        <p style={{marginTop:10}} > BulletIn Board</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    
                </div>
            </body>
        </>
    )
}

export default AfterSchool