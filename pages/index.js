import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar'
import utilStyles from '../components/utilStyles.module.css'
import styles from '../components/styles.module.css'
import {Button, Form, Accordion, Carousel} from 'react-bootstrap'
import {Provider} from '../context/ApiContext'
import {FiPlusSquare} from 'react-icons/fi'
import {IconContext} from 'react-icons'


//homepage images

const heroImage = require('../public/assets/heroImage.svg')
const carousel_1 = require('../public/assets/carousel/img1.svg')
const carousel_2 = require('../public/assets/carousel/img2.svg')
const carousel_3 = require('../public/assets/carousel/img3.svg')
const carousel_4 = require('../public/assets/carousel/img4.svg')

const parachute = require('../public/assets/parachute.jpg')
const ourJourney = require('../public/assets/ourJourney.jpg')
const creareAtAGlance = require('../public/assets/creareataglance.jpg')
const iPhone = require('../public/assets/app.png')
const playStore = require('../public/assets/playstore.svg')
const appStore = require('../public/assets/appstore.svg')

//footer social icon
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
          <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
        </Head>
        <Navbar/>
        <body>
        
          {/* <section className='container-fluid'>
            <div>
              <Carousel >
                <Carousel.Item>
                  <img style={{width:'100%', height:'100%'}} src={heroImage} className='img-fluid' />
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{width:'100%', height:'100%'}} src={heroImage} className='img-fluid' />
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{width:'100%', height:'100%'}} src={heroImage} className='img-fluid' />
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{width:'100%', height:'100%'}} src={heroImage} className='img-fluid' />
                </Carousel.Item>
              </Carousel>
            </div>
          </section> */}
          <div id="slides" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#slides" data-slide-to="0" class="active"></li>
              <li data-target="#slides" data-slide-to="1"></li>
              <li data-target="#slides" data-slide-to="2"></li>
            </ul>

            <div class='carousel-inner'>
              <div class="carousel-item active">
                <img width="100%" src={heroImage}/>
              </div>
              <div class="carousel-item">
                <img width="100%" src="img/bootstrap.jpg"/>
            </div>
            <div class="carousel-item">
                <img width="100%" src="img/bootstrap.jpg"/>
            </div>
            </div>
          </div>

          <section>
            <div class='container-fluid' >
              <div className='row padding d-flex align-items-center flex-lg-row flex-column-reverse'  >
                <div className='col-lg-6' >
                  <div>
                    <div className="d-lg-flex justify-content-lg-end d-flex justify-content-center">
                      <h1 className='cus-header-text'>Features Offered by Creare</h1>
                    </div>
                    <div className="d-lg-flex justify-content-lg-end d-flex justify-content-center">
                      <p className='cus-sub-text'>Creare offers a wide range of services by both online and offline mode. The object of both modes of service is to..</p>
                    </div>
                    <div className="d-lg-flex justify-content-lg-end d-flex justify-content-center">
                      <Button>Explore</Button>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6' >
                    <div className='d-lg-flex justify-content-lg-start d-flex justify-content-center'>
                      <img src={parachute} className='img-fluid cus-img' />
                    </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div>
              <div className='row padding d-flex align-items-center' >
                <div className='col-lg-6' >
                  <div className='d-lg-flex justify-content-lg-end d-flex justify-content-center'>
                      <img src={ourJourney} className='img-fluid cus-img' />
                    </div>
                </div>

                <div className='col-lg-6' >
                  <div>
                    <div className="d-lg-flex justify-content-lg-start d-flex justify-content-center" >
                      <h1 className='cus-header-text'>Our Journey</h1>
                    </div>
                    <div className="d-lg-flex justify-content-lg-start d-flex justify-content-center">
                      <p className='cus-sub-text'>Creare offers a wide range of services by both online and offline mode. The object of both modes of service is to..</p>
                    </div>
                    <div className="d-lg-flex justify-content-lg-start d-flex justify-content-center">
                      <Link href='/register-user' >
                        <Button>Sign Up</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='row d-flex flex-column-reverse flex-md-row'>
              <div className='col-lg-6 d-flex justify-content-center'>
                <div className='d-flex align-items-center'>
                  <div>
                    <h1 style={{marginBottom:50, textShadow:'5px 5px 5px'}} >Crearé at a glance</h1>
                    <div>
                      
                      {/* <Accordion>
                          <div style={{marginTop:30}}>
                            <Accordion.Toggle as={Button} variant="light" eventKey="0">
                              <IconContext.Provider value={{size:'1.5em'}}>
                                <FiPlusSquare style={{display:'inline', marginRight:20}}/>
                              </IconContext.Provider>
                              <p style={{display:'inline', fontSize:22}}>Why Crearé foundation?</p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <p style={{marginLeft:10,marginTop:20, width:350}} >My journey started when I was 10. My father was a civil engineer running a small company. And I used to spend most of the time on the construction site which made me learn many things. Lesser I know of being an entrepreneur but learning in and out of the construction process was very fascinating. My parents were running cab services for the corporate and bagged distributorship for a few top FMCG companies.</p>
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
                              <p style={{marginLeft:10,marginTop:20, width:350}} >My journey started when I was 10. My father was a civil engineer running a small company. And I used to spend most of the time on the construction site which made me learn many things. Lesser I know of being an entrepreneur but learning in and out of the construction process was very fascinating. My parents were running cab services for the corporate and bagged distributorship for a few top FMCG companies.</p>
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
                            <p style={{marginLeft:10,marginTop:20, width:350}} >My journey started when I was 10. My father was a civil engineer running a small company. And I used to spend most of the time on the construction site which made me learn many things. Lesser I know of being an entrepreneur but learning in and out of the construction process was very fascinating. My parents were running cab services for the corporate and bagged distributorship for a few top FMCG companies.</p>
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
                            <p style={{marginLeft:10,marginTop:20, width:350}} >My journey started when I was 10. My father was a civil engineer running a small company. And I used to spend most of the time on the construction site which made me learn many things. Lesser I know of being an entrepreneur but learning in and out of the construction process was very fascinating. My parents were running cab services for the corporate and bagged distributorship for a few top FMCG companies.</p>
                            </Accordion.Collapse>
                          </div> 
                      </Accordion> */}
                    </div>
                  </div>           
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='d-lg-flex justify-content-lg-start d-flex justify-content-center'>
                  <img src={creareAtAGlance} className='img-fluid cus-img'/>    
                </div>
              </div>
            </div>
          </section>

          <section>
            <div>
              <div className='row d-flex align-items-center' >
                <div className='col-lg-6'>
                  <div className='d-lg-flex justify-content-lg-end d-flex justify-content-center'>
                    <img src={iPhone} className='img-fluid cus-img-1'/>
                  </div>
                </div>

                <div className='col-lg-6 text-center' >
                  <div>
                    <div>
                      <h1 className='cus-header-text'>Coming Soon...</h1>
                    </div>
                    <div>
                      <p>- "The world of Education in your hands."</p>
                    </div>
                    <div>
                      <a href='#'>
                        <img src={playStore} className='img-fluid cus-download-button' />
                      </a>
                    </div>
                    <div>
                      <a href='#'>
                        <img src={playStore} className='img-fluid cus-download-button' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <footer style={{background:'#0E3C54', color:'white', marginTop:100}}>
            <div id={styles.footer_content}>
              <div className='row flex-column flex-md-row'>
                <div id={styles.footer_subcontent} className='col'>
                  <div>
                    <div>
                      <p style={{color:'orange'}} >SITEMAP</p>
                    </div>
                    <div>
                      <Link href='#'>
                        <p>Event</p>
                      </Link>
                    </div>
                    <div>
                      <Link href='#'>
                        <p>Webinar</p>
                      </Link>
                    </div>
                    <div>
                      <Link href='#'>
                        <p>Sign In</p>
                      </Link>
                    </div>
                    <div>
                      <Link href='#'>
                        <p>Register Yourself</p>
                      </Link>
                    </div>
                    <div>
                      <Link href='#'>
                        <p>Register Institute</p>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='col' >
                  <div id={styles.footer_subcontent}>
                    <div>
                      <p style={{color:'orange'}} >FOLLOW US</p>
                    </div>
                    <div>
                      <a href='#'>
                        <img src={facebook} style={{height:20, marginRight:10}} className='img-fluid' />
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
                    <div style={{marginTop:30}} >
                      <p style={{color:'orange'}} >INSTALL APP</p>
                    </div>
                    <div>
                      <a href='#' >
                        <img src={playStore} style={{width:100}} className='img-fluid'/>
                      </a>
                    </div>
                    <div>
                      <a href='#'>
                        <img src={playStore} style={{width:100}} className='img-fluid'/>
                      </a>
                    </div>
                    <div>
                  </div>
                  </div> 
                </div>

                <div className='col'>
                  <div id={styles.footer_subcontent}>
                    <div>
                      <p style={{color:'orange'}} >COMPANY</p>
                    </div>
                    <div>
                      <Link href='#'>
                        <p>About Us</p>
                      </Link>
                    </div>
                    <div>
                      <Link href='#'>
                        <p>Contact Us</p>
                      </Link>
                    </div>
                    <div>
                      <Link href='#'>
                        <p>Privacy Policy</p>
                      </Link>
                    </div>
                    <div>
                      <Link href='#'>
                        <p>Terms and Conditions</p>
                      </Link>
                    </div>
                    <div>
                      <Link href='#'>
                        <p>Refund Policy</p>
                      </Link>
                    </div>
                    <div>
                      <Link href='#'>
                        <p>FAQ</p>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='col'>
                <div id={styles.footer_subcontent}>
                    <div>
                      <p style={{color:'orange'}} >LEAVE US MESSAGE</p>
                    </div>
                    <div>
                      <Form>
                        <Form.Group controlId="formEmail">
                          <Form.Label>EMAIL ID</Form.Label>
                          <Form.Control size='sm' type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control size='sm' type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                          <Form.Label>Password</Form.Label>
                          <Form.Control size='sm' placeholder="Message" />
                        </Form.Group>
                        <div style={{textAlign:'center'}} >
                          <Button size='sm' variant="primary">
                            Send Message
                          </Button>
                        </div>
                      </Form>
                    </div>
                </div>
                </div>
              </div>
              {/*row ends*/}
              <div id={styles.footer_subcontent} style={{marginTop:30}}>
                <div>
                  <p style={{fontWeight:800}} >Why Creare?</p>
                </div>
                <div>
                  <p style={{fontWeight:600}}>Study at ease</p>
                </div>
                <div>
                  <p>Content</p>
                </div>
                <div>
                  <p style={{fontWeight:600}}>One stop destination</p>
                </div>
                <div>
                  <p>Content</p>
                </div>
                <div>
                  <p style={{fontWeight:800}}>How is it going to impact?</p>
                </div>
                <div>
                  <p>Content</p>
                </div>
                <div>
                  <p style={{fontWeight:800}}>Necessary steps to get affiliated</p>
                </div>
                <div>
                  <p>Content</p>
                </div>
                <div>
                  <p style={{fontWeight:800}}>How is it going to impact?</p>
                </div>
                <div>
                  <p>Content</p>
                </div>
              </div>

              <div style={{marginTop:30, fontWeight:600}}>
                <span >
                  <Link href='#'>
                    Disclaimer
                  </Link>
                </span>
                <span style={{marginLeft:10, marginRight:10}}>|</span>
                <span >
                  <Link href='#'>
                    Privacy Policy 
                  </Link>
                </span>
                <span style={{marginLeft:10, marginRight:10}}>|</span>
                <span >
                  <Link href='#'>
                    Terms and Conditions
                  </Link>
                </span>
                <span style={{marginLeft:10, marginRight:10}}>|</span>
                <span>
                  <Link href='#'>
                    Sitemap  
                  </Link>
                </span>
              </div>

            </div>
          </footer>
          
          {/* <footer style={{marginTop:100}}>
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
          </footer> */}
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