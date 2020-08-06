import Head from 'next/head'
import Link from 'next/link'
import {Button, Form} from 'react-bootstrap'
import utilStyles from '../../components/utilStyles.module.css'


const signInImage = require('../../public/assets/login.svg')
const creareSigninLogo = require('../../public/assets/creareSigninLogo.svg')

const getStarted = () =>{
    return(
        <div>
            <Head>
                <title>Get Started</title>
            </Head>

            <body className={utilStyles.container} >
                <div className='row align-items-center' style={{height:'90vh'}}>
                    <div className='col'>
                        <img src={signInImage} className='img-fluid' />
                    </div>
                    <div className='col' style={{top:'-10%'}}>
                        <div style={{textAlign:'center'}} >
                            <img src={creareSigninLogo} className='img-fluid'/>
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
                                <div className='d-flex justify-content-md-between' style={{marginBottom:50}}>
                                    <span>
                                        <input name='instituteType' type='radio' value='school' checked /> School
                                    </span>
                                    <span>
                                        <input name='instituteType' type='radio' value='university' /> University
                                    </span>
                                    <span>
                                        <input name='instituteType' type='radio' value='others' /> Others
                                    </span>
                                </div>
                                
                                <div style={{textAlign:'center',marginTop:30}} >
                                    <div>
                                        <Link href='/screens/registerDomesticSchool' >
                                            <Button variant="dark" type="submit" style={{width:'auto'}} >
                                                Domestic School
                                            </Button>
                                        </Link>
                                        <span style={{marginLeft:20,marginRight:20}} >
                                            (or)
                                        </span>
                                        <Link href='/screens/registerOverseasSchool' >
                                            <Button variant="dark" type="submit" style={{width:'auto'}} >
                                                Overseas School
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default getStarted