import {useState} from 'react'
import Sidebar from '../components/sidebar'
import Head from 'next/head'
import utilStyles from '../components/utilStyles.module.css'
import {Button, Card} from 'react-bootstrap'
import {FaComment} from 'react-icons/fa'
import {IoIosSend} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'
import {IconContext} from 'react-icons'
import {TextField} from '@material-ui/core'


const QAForum = () =>{

    const [visible, setVisible] = useState(false)
    const [qShow, setQShow] = useState(false)

    return(
        <>
            <Head>
                <title>Q/A Forum</title>
            </Head>
            <Sidebar/>
            <body>
                <div className='cus-header-shadow cus-desktop-header'>
                    <div className='cus-header-content cus-header-start'>
                        <h3>Q/A Forum</h3>
                    </div>
                    <div className='cus-header-content cus-header-end'>
                        <Button onClick={()=>setQShow(true)} variant='dark' className='cus-horizontal-padding cus-right-margin' >Ask Question</Button>
                    </div>
                </div>
        
                <div className='cus-mobile-header text-center'>
                    <h5 className='cus-mobile-header-padding'>Q/A Forum</h5>
                    <hr className='my-4'/>
                </div>
                

                <div className='cus-dashboard-content cus-top-margin'>
                    <div>
                        <Card className='cus-lg-width'>
                            <Card.Body>
                                <p style={{fontSize:11, color:'gray'}}>Q: Santhosh Grade 5 25 July 2020</p>
                                <b style={{color:'#0D3D55'}} >How many primary colors do we have ?</b>
                                <div style={{marginBottom:20}}>
                                    <p style={{display:'inline',fontSize:13, color:'gray'}}>A: We have 2 primary colors</p>
                                    <IconContext.Provider  value={{ color: "gray", size:'1.3em' }}>
                                        <FaComment style={{display:'inline',float:'right',cursor:'pointer'}} onClick={()=>setVisible(!visible)}/> 
                                    </IconContext.Provider>
                                </div>
                                {
                                    visible
                                    ?
                                    <div>
                                        <div>
                                            <p style={{fontSize:11,marginBottom:0, color:'gray'}}>Mr. Ganesh</p>
                                            <p style={{fontSize:13,fontWeight:'600'}}>2 primary colors</p>
                                        </div>
                                        <div>
                                            <p style={{fontSize:11,marginBottom:0, color:'gray'}}>Mr. Senthil</p>
                                            <p style={{fontSize:13,fontWeight:'600'}}>Black and White</p>
                                        </div>
                                        <div>
                                            <p style={{fontSize:11,marginBottom:0, color:'gray'}}>Samyuktha</p>
                                            <p style={{fontSize:13, fontWeight:'600'}}>Primary colors</p>
                                        </div>
                                        <div>
                                            <TextField size='small' fullWidth style={{display:'inline-block', width:'90%'}} id="filled-basic" label="Your answer..." variant="filled" />
                                                <IconContext.Provider  value={{ color: "blue", size:'1.6em' }}>
                                                    <IoIosSend style={{display:'inline',float:'right',cursor:'pointer', marginTop:20}} onClick={()=>setVisible(!visible)}/> 
                                                </IconContext.Provider>
                                        </div>
                                    </div>
                                    :
                                    null
                                }
                                
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card className='cus-lg-width cus-top-margin'>
                            <Card.Body>
                                <p style={{fontSize:11, color:'gray'}}>Q: Santhosh Grade 5 25 July 2020</p>
                                <b style={{color:'#0D3D55'}} >How many primary colors do we have ?</b>
                                <div>
                                    <p style={{display:'inline',fontSize:13, color:'gray'}}>A: We have 2 primary colors</p>
                                    <IconContext.Provider  value={{ color: "gray", size:'1.3em' }}>
                                        <FaComment style={{display:'inline',float:'right',cursor:'pointer'}} onClick={()=>setVisible(!visible)} /> 
                                    </IconContext.Provider>
                                </div>
                            </Card.Body>
                        </Card>
                    </div> 
                </div>

                {
                    qShow
                    ?
                    <div style={{zIndex:2, position:'fixed',height:'100%',width:'100%', left:0, top:0, bottom:0, right:0, backgroundColor: 'rgba(0,0,0,0.5)'}} className='d-flex align-items-center justify-content-center'>
                    <Card style={{position:'absolute',width:400}}   >
                        <Card.Body>
                            <Card.Title style={{display:'inline'}} >Q/A Forum</Card.Title>
                            <IconContext.Provider  value={{ color: "gray", size:'1.3em' }}>
                                <AiOutlineClose style={{display:'inline',float:'right', cursor:'pointer'}} onClick={()=>setQShow(false)} /> 
                            </IconContext.Provider>
                            {/* <p style={{display:'inline', float:'right'}}>Close</p> */}
                            <TextField fullWidth size='small' id="filled-basic" label="Ask question"  />
                            <Button variant='dark' style={{marginTop:30, float:'right'}} >Publish</Button>
                        </Card.Body>
                    </Card>
                </div>
                :
                null}
            </body>
        </>
    )
}

export default QAForum