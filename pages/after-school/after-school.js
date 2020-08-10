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
            <body  >
                <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                    <span style={{display:'inline-block'}} >
                        <h3 style={{marginLeft:135, marginTop:50}} >After School</h3>
                    </span>
                    <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                        {/* <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Preview</Button> */}
                        {/* <Button onClick={()=>setQShow(true)} variant='dark' style={{paddingRight:30,paddingLeft:30}}>Ask Question</Button> */}
                    </span>
                </div>

                <div style={{marginLeft:135, marginTop:30, marginRight:60}} >
                    <div className='row flex-column flex-md-row'>
                        <div className='col'>
                            <Card className={utilStyles.card} style={{height:210, cursor:'pointer'}}  >
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={Brainclub} className='img-fluid'/>
                                        <p style={{marginTop:10}} > Brain Club</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col' >
                            <Card className={utilStyles.card} style={{height:210, cursor:'pointer'}}>
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={ArtClub} className='img-fluid'/>
                                        <p style={{marginTop:10}} > Cultural Club</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col' >
                            <Card className={utilStyles.card} style={{height:210, cursor:'pointer'}}>
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={Bulletin} className='img-fluid'/>
                                        <p style={{marginTop:10}} > Coding Club</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col' >
                            <Card className={utilStyles.card} style={{height:210, cursor:'pointer'}} >
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={LanguageClub} className='img-fluid'/>
                                        <p style={{marginTop:10}} > Language Club</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className='row flex-column flex-md-row' style={{marginTop:30}}>
                        <div className='col'>
                            <Card className={utilStyles.card} style={{height:210, cursor:'pointer'}}  >
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={ArtClub} className='img-fluid'/>
                                        <p style={{marginTop:10}} > Art Club</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col' >
                            <Card className={utilStyles.card} style={{height:210, cursor:'pointer'}}>
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={GamesClub} className='img-fluid'/>
                                        <p style={{marginTop:10}} > Games Club</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col' >
                            <Card className={utilStyles.card} style={{height:210, cursor:'pointer'}}>
                                <Card.Body>
                                    <div style={{textAlign:'center'}} >
                                        <img src={AptitudeClub} className='img-fluid'/>
                                        <p style={{marginTop:10}} > Aptitude Club</p>
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col' >
                            <Card className={utilStyles.card} style={{height:210, cursor:'pointer'}} >
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