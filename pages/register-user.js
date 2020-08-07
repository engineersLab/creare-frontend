import {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Button, Form} from 'react-bootstrap'
import utilStyles from '../components/utilStyles.module.css'


const signInImage = require('../public/assets/login.svg')
const creareSigninLogo = require('../public/assets/creareSigninLogo.svg')

const getStarted = () =>{
   
    const [instituteType,setInstituteType] = useState('School')

    return(
        <div>
            <Head>
                <title>Register</title>
            </Head>

            <body className={utilStyles.container} >
                <div className='row align-items-center' style={{height:'100vh'}}>
                    <div className='col' id={utilStyles.image}>
                        <img src={signInImage} className='img-fluid'  />
                    </div>
                    <div className='col' style={{top:'-10%'}}>
                        <div style={{textAlign:'center'}} >
                            <img src={creareSigninLogo} className='img-fluid' style={{marginTop:'10%'}}/>
                        </div>
                        <div style={{width:'70%',marginLeft:'20%'}} >
                            <div style={{marginTop:30,marginBottom:50}}>
                                <b style={{fontSize:25}} >Get Started</b><br/>
                                <Link href='/screens/signIn'>
                                    <a >Already have an account? <b>Log In</b> now</a>
                                </Link>
                            </div>
                            <Form>
                                <div>Let’s Crearé</div>
                                <br/>
                                <div className='d-flex justify-content-md-between flex-column flex-md-row' style={{marginBottom:50}}>
                                    <span>
                                        <input 
                                            name='instituteType' 
                                            type='radio' 
                                            value='school' 
                                            checked={instituteType==='School'}
                                            onChange={()=>setInstituteType('School')} /> School
                                    </span>
                                    <span>
                                        <input 
                                            name='instituteType' 
                                            type='radio' 
                                            value='college' 
                                            checked={instituteType==='College'}
                                            onChange={()=>setInstituteType('College')} /> College
                                    </span>
                                    <span>
                                        <input 
                                            name='instituteType' 
                                            type='radio' 
                                            value='university'
                                            checked={instituteType==='University'}
                                            onChange={()=>setInstituteType('University')} /> University
                                    </span>
                                    <span>
                                        <input 
                                            name='instituteType' 
                                            type='radio' 
                                            value='others'
                                            checked={instituteType==='Others'}
                                            onChange={()=>setInstituteType('Others')} /> Others
                                    </span>
                                </div>
                                {
                                    instituteType=='Others'
                                    ?
                                    <div style={{textAlign:'center',marginTop:30}} >
                                        <Link href='/register-domestic-school' >
                                            <Button variant="dark" type="submit" style={{width:'auto'}} >
                                                Continue
                                            </Button>
                                        </Link>
                                    </div>
                                    :
                                    <div className='flex-column flex-md-row d-flex justify-content-md-around'>
                                        <span  >
                                            <Link href={{pathname: '/register-domestic-user',query:{instType:instituteType}}}  >
                                                <Button variant="dark" type="submit" style={{width:'auto'}} >
                                                    Domestic {instituteType}
                                                </Button>
                                            </Link>
                                        </span>
                                        
                                        <span >
                                            (or)
                                        </span>
                                        <span>
                                            <Link href='/register-overseas-user' >
                                                <Button variant="dark" type="submit" style={{width:'auto'}} >
                                                    Overseas {instituteType}
                                                </Button>
                                            </Link>
                                        </span>
                                    </div>
                                }
                            </Form>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default getStarted