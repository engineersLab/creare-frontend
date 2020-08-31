import Head from 'next/head'
import Link from 'next/link'
import {Button, Form} from 'react-bootstrap'
import utilStyles from '../components/utilStyles.module.css'


const signInImage = require('../public/assets/login.svg')
const creareSigninLogo = require('../public/assets/creareSigninLogo.svg')

const signIn = () =>{

    return(
        <div>
            <Head>
                <title>SignIn</title>
            </Head>

            <body className={utilStyles.container} >
                <div className='row align-items-center' style={{height:'90vh'}}>
                    <div className='col cus-desktop-header'>
                        <img src={signInImage} className='img-fluid' />
                    </div>
                    <div className='col'>
                        <div style={{textAlign:'center'}} >
                            <img src={creareSigninLogo} className='img-fluid cus-mob-top-margin'/>
                        </div>

                        <div>
                        <div className='cus-vertical-margin'>
                            <b style={{fontSize:25}} >Log In</b>
                        </div>
                        
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter EMAIL ID here..." />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password here..." />
                            </Form.Group>
                            <div style={{textAlign:'center',marginTop:30}} >
                                <div>
                                    <Link href='/login' >
                                        <Button variant="dark" type="submit" style={{width:'20%'}} >
                                            LogIn
                                        </Button>
                                    </Link>
                                </div>
                                
                                <div style={{marginTop:30}}>
                                    <Link href='/register-user' >
                                        <a>Don't have an account? <b>Register</b> now</a>
                                    </Link>
                                </div>
                                
                                <div style={{marginTop:20}}>
                                    <Link href='/register-institute' >
                                        <a>Your Institute not listed? <b>Register Institute</b> now</a>
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

export default signIn