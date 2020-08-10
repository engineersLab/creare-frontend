import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar'
import utilStyles from '../components/utilStyles.module.css'

const journey = require('../public/assets/journey.svg')
const pravin = require('../public/assets/pravin.png')
const facebook = require('../public/assets/facebook.svg')
const instagram = require('../public/assets/instagram.svg')
const linkedIn = require('../public/assets/linkedin.svg')
const twitter = require('../public/assets/twitter.svg')
const youtube = require('../public/assets/youtube.svg')

const Journey = () =>{
    return(
        <>
            <Head>
                <title>
                    Journey
                </title>
            </Head>
            <Navbar/>
            <body style={{overflowX:'hidden'}} >
                <section style={{height:'90vh'}} >
                    <div >
                        <h1 style={{marginTop:150, marginLeft:100}}>Journey</h1>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={journey} className='img-fluid'/>
                    </div>
                </section>
                
                <section className={utilStyles.container} >
                    <div className='row' >
                        <div className='col col-md-5'>
                            {/* <h1>Hi</h1> */}
                            <img src={pravin} className='img-fluid'/>
                        </div>

                        <div className='col col-md-7' >
                            <p style={{fontSize:18, marginTop:70}}>Everyone has their own story. Well, here is mine.</p>

                            <p style={{fontSize:18}}>My journey started when I was 10. My father was a civil engineer running a small company. And I used to spend most of the time on the construction site which made me learn many things. Lesser I know of being an entrepreneur but learning in and out of the construction process was very fascinating. My parents were running cab services for the corporate and bagged distributorship for a few top FMCG companies. Being an entrepreneur was my dream and I started my entrepreneurial journey when I was 19. The maiden project was on building renovation. Being good at building customer relationships I bagged 6 continuous projects related to real-estate. I soon had to pause and pursue my under-graduation. Having pursued diploma after 10th grade I had to study only 3 years of engineering. I still haven't secured my degree, only have my course completion. I never wanted to settle for a desk job and my search was big. 
                                For 2 years straight I only worked on projects that fascinated me but nothing clicked.</p>
                        </div>
                    </div>
                    <p style={{fontSize:18}}>Everything was just in papers as project reports. However, I landed up in a job having prior experience with real-estate. Joined the firm as an executive but managed to secure the post of Asst. Manager - HR in four months time with my continued support and ideology towards the success of the company. The job routine put me in distress. I dropped papers on the month of January 2020 to begin my entrepreneurial journey again where I paused. But the pandemic happened. Being inside four walls is like romancing with a devil. To have a diversion I started working on possibilities of my journey post-COVID. I started spending more time on LinkedIn and people really kept posting about the courses they were pursuing online. This overwhelmed me with too many questions about the industry. With so many e-learning platforms helping us with extensive experience to gain knowledge, one thing that struck my mind was if the educational institutions were providing a better education experience, a student would be ever ready to tackle all the hardships in the future when he/she graduates from college. That's how the thought behind the crearé foundation was initiated.
                        Crearé Foundation.</p>

                    <p style={{fontSize:18}}>The word Crearé is derived from Latin, meaning Create.</p>

                    <p style={{fontSize:18}}>The implementation of this vision is a spark to many. It's a start-up of educating students through technology. A platform that not only focuses on imparting knowledge to students but also pays emphasis on guiding them to accept the challenges in every walk of life by holding onto the promise to not only make them learn the syllabus but in shaping their character and personality to face the reality of life. Crearé Foundation takes an oath to give the best services no matter what the situation is.</p>

                    <p style={{fontSize:18}}>India has around billions of teacher where the quality of education needs an optimization. India has a whopping 258 million students who are the future and essence of our country. Keeping this in mind a strong educational framework and backbone is to be developed country. Crearé Foundation is here to coach the younger generation which helps them to choose the right path along with helping them in making the right decision and encouraging them to grow as responsible citizens to lead the nation. Education will be their root, penetrating so strong that they will never weaken. Across the globe, we hold their hand virtually, to have a great future.</p>

                    <p style={{fontSize:18}}>This platform not only focuses on imparting knowledge to students but also pays emphasis on guiding them to accept the challenges in every walk of life by holding onto the promise to not only make them learn the syllabus but in shaping their character and personality to face the reality of life. Crearé Foundation is here to hold the hands of the younger generation virtually in this current situation and help them to have a great future.</p>

                    <p style={{fontSize:18}}>To every Institution / Student / Parent.</p>
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

export default Journey