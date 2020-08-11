import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar'
import utilStyles from '../components/utilStyles.module.css'
import {Button, Form, Accordion, Card} from 'react-bootstrap'
import {Provider} from '../context/ApiContext'
import {FiPlusSquare} from 'react-icons/fi'
import {IconContext} from 'react-icons'


const letsCreare = require('../public/assets/login.svg')
const features = require('../public/assets/features.svg')
const journey = require('../public/assets/journey.svg')
const facebook = require('../public/assets/facebook.svg')
const instagram = require('../public/assets/instagram.svg')
const linkedIn = require('../public/assets/linkedin.svg')
const twitter = require('../public/assets/twitter.svg')
const youtube = require('../public/assets/youtube.svg')

function Home() {
  
  return (
      <>
      <Head>
        <title>Creare</title>
      </Head>
      <Navbar />
      <body className={utilStyles.overflow} >
        <section>
          <div className={utilStyles.container}  style={{marginTop:150}}>
              <div className="row align-items-center flex-column flex-md-row" style={{height:'80vh'}}  >
                <div className="col " >
                  <h6 style={{color:'#F16C21'}} >LEARN ANYWHERE</h6>
                  <h1 style={{fontSize:100,color:'#0D3D55'}}>Let’s Crearé</h1>
                  <Link href='/register-institute' >
                    <Button variant='dark'>Register Institute</Button>
                  </Link> 
                  <br/>
                  <div style={{marginTop:10}} >
                    <Link href='/makeDifference'>
                      <a style={{color:'#0D3D55'}} >Want to make a difference?</a>
                    </Link>
                  </div>
                  
                </div>
                <div className="col d-flex justify-content-center"  >
                  <img src={letsCreare} alt="Image could not Load" className='img-fluid' className={utilStyles.image} />
                </div>
              </div>
          </div>  
        </section>

        <div className={utilStyles.section_2}>
          <section className={utilStyles.view_height_2}  >
            <div className={utilStyles.container} >
              <div>
                <span>
                  <b className={utilStyles.header} > The Journey  </b>
                </span>
                <span>
                  <Link href='/theJourney'>
                    <a>Know More>></a>
                  </Link> 
                </span>
                </div>
                <div style={{textAlign:'center',marginTop:20}} >
                  <img src={journey} className='img-fluid' />
                </div>
            </div>
          </section>

          <section className={utilStyles.view_height} >
            <div className={utilStyles.container}  style={{marginTop:150}}>
                <div className="row align-items-center flex-column flex-md-row"   >
                  <div className="col-sm-4 d-flex justify-content-center">
                    <h1 className={utilStyles.header} style={{color:'#0D3D55'}}>Our Features</h1>
                  </div>
                  <div className="col-sm-8 d-flex justify-content-center " >
                    <img src={features} alt="Image coulld" className='img-fluid' />
                  </div>
                </div>
            </div>  
          </section>
        </div>
        
        <section className={utilStyles.view_height_3}>
          <div className='row' style={{height:'100%'}}>
            <div className='col d-flex justify-content-center' >
              <div className='d-flex align-items-center' >
                <img src={letsCreare} className='img-fluid '  />            
              </div>
            </div>

            <div className='col d-flex justify-content-center'>
              <div style={{marginTop:100}} >
              <h1 style={{marginBottom:50}} >Crearé at a glance</h1>
              <div>
                <Accordion  >
                    <div style={{marginTop:30}}>
                      <Accordion.Toggle as={Button} variant="light" eventKey="0">
                        <IconContext.Provider value={{size:'1.5em'}}>
                          <FiPlusSquare style={{display:'inline', marginRight:20}}/>
                        </IconContext.Provider>
                        <p style={{display:'inline', fontSize:22}}>Why Crearé foundation?</p>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <p>Hello! I'm the body</p>
                      </Accordion.Collapse>
                    </div>
                    
                    <div style={{marginTop:30}}>
                      <Accordion.Toggle as={Button} variant="light" eventKey="1">
                        <IconContext.Provider  value={{size:'1.5em'}}>
                          <FiPlusSquare style={{display:'inline', marginRight:20}}/>
                        </IconContext.Provider>
                        <p style={{display:'inline', fontSize:22}}>How is it going to impact?</p>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="1">
                        <p style={{marginLeft:40,marginTop:20, width:350}} >My journey started when I was 10. My father was a civil engineer running a small company. And I used to spend most of the time on the construction site which made me learn many things. Lesser I know of being an entrepreneur but learning in and out of the construction process was very fascinating. My parents were running cab services for the corporate and bagged distributorship for a few top FMCG companies.</p>
                      </Accordion.Collapse>
                    </div>

                    <div style={{marginTop:30}}>
                      <Accordion.Toggle as={Button} variant="light" eventKey="2">
                        <IconContext.Provider  value={{size:'1.5em'}}>
                          <FiPlusSquare style={{display:'inline', marginRight:20}}/>
                        </IconContext.Provider>
                        <p style={{display:'inline', fontSize:22}}>Necessary steps to get affiliated</p>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="2">
                        <p>Hello! I'm the body</p>
                      </Accordion.Collapse>
                    </div>

                    <div style={{marginTop:30}}>
                      <Accordion.Toggle as={Button} variant="light" eventKey="3">
                        <IconContext.Provider  value={{size:'1.5em'}}>
                          <FiPlusSquare style={{display:'inline', marginRight:20}}/>
                        </IconContext.Provider>
                        <p style={{display:'inline', fontSize:22}}>Get ready for the future</p>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="3">
                      <p style={{marginLeft:40,marginTop:20, width:350}} >My journey started when I was 10. My father was a civil engineer running a small company. And I used to spend most of the time on the construction site which made me learn many things. Lesser I know of being an entrepreneur but learning in and out of the construction process was very fascinating. My parents were running cab services for the corporate and bagged distributorship for a few top FMCG companies.</p>
                      </Accordion.Collapse>
                    </div> 
                </Accordion>
              </div>
              </div>

            </div>

          </div>
          
        </section>

        <section>
          <div style={{textAlign:'center'}} >
            <span>
              <p style={{fontSize:100,color:'#0D3D55'}}>Let’s Crearé</p>
            </span>
            <span>
              <Link href='/launch-event'>
                <Button variant='dark' >Launch Event</Button>
              </Link>
            </span>
            <p style={{fontSize:50,color:'#0D3D55'}}>Contact Us</p>
            </div>
            <div style={{position:'relative',width:'100%'}}>
              <div className={utilStyles.form}>
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label >NAME</Form.Label>
                    <Form.Control placeholder="Enter your name here..." />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>EMAIL ID</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email here..." />
                  </Form.Group>

                  <Form.Group controlId="formPhoneNo">
                    <Form.Label >PHONE NO.</Form.Label>
                    <Form.Control placeholder="Enter your phone no here..." />
                  </Form.Group>

                  <Form.Group controlId="formDescription">
                    <Form.Label >DESCRIPTION</Form.Label>
                    <Form.Control placeholder="Enter your description here..." />
                  </Form.Group>
                  <div style={{textAlign:'center'}} >
                    <Button  variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
        </section>
        
        <footer style={{marginTop:100}}>
          <div className={utilStyles.footer} style={{backgroundColor:'#0E3C54',color:'white'}} >
            <div className='row align-items-center flex-column flex-md-row'>
              <div className='col'  >
                <p style={{textAlign:'center'}} >Follow US</p>
                <div style={{textAlign:'center'}}>
                  <a href='#'>
                  <img src={facebook} style={{height:20,marginLeft:10, marginRight:10}} className='img-fluid' />
                  </a>
                  <a href='#'>
                  <img src={instagram} style={{height:20,marginLeft:10, marginRight:10}} className='img-fluid' />
                  </a>
                  <a href='#'>
                  <img src={linkedIn} style={{height:20,marginLeft:10, marginRight:10}} className='img-fluid' />
                  </a>
                  <a href='#'>
                  <img src={twitter} style={{height:20,marginLeft:10, marginRight:10}} className='img-fluid' />
                  </a>
                  <a href='#'>
                  <img src={youtube} style={{height:20,marginLeft:10, marginRight:10}} className='img-fluid' />
                  </a>
                  
                </div>    
              </div>
              <div className='col d-flex justify-content-center' >
                <div className={utilStyles.footer_text}>
                  <p>Email Id</p>
                  <p>info@crearefoundation.com</p>
                </div> 
              </div>
              <div className='col d-flex justify-content-center' >
                <div className={utilStyles.footer_text}>
                  <p>Phone Number</p>
                  <p>+91 893 989 0562</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
      </>
  )

}

export default ()=>{
  return(
    <Provider>
      <Home/>
    </Provider>
  )
}
