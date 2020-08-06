import {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Button, Form} from 'react-bootstrap'
import utilStyles from './utilStyles.module.css'


const signInImage = require('../public/assets/login.svg')
const creareSigninLogo = require('../public/assets/creareSigninLogo.svg')

const InstituteRegister = ({schoolType}) =>{

    const [data, setData] = useState([
        { value: 'USA', name: 'USA' },
        { value: 'CANADA', name: 'CANADA' }            
    ])

    return(
        <div>
            <Head>
                <title>Register</title>
            </Head>

            <body className={utilStyles.container} >
                <div className='row align-items-center' style={{height:'100vh'}}>
                    <div className='col'>
                        <img src={signInImage} className='img-fluid' />
                    </div>
                    <div className='col' >
                        <div style={{marginLeft:'20%'}}>
                            <img src={creareSigninLogo} className='img-fluid' style={{width:'10%',height:'10%'}} />
                        </div>

                        <div style={{width:'75%',marginLeft:'20%'}}>
                        <div style={{marginBottom:30}}>
                            <b style={{fontSize:25}} >Registration</b>
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

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password here..." />
                            </Form.Group>

                            <Form.Group controlId="formSchoolSelect">
                                <Form.Label>SELECT {schoolType} SCHOOL</Form.Label>
                                <Form.Control as="select" value={data} >
                                    <option value="" disabled selected>Select your School from the list</option>
                                    {data.map((e,key)=>{
                                        return <option key={key} value={e.value}>{e.name}</option>;
                                    })}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formRoleSelect">
                                <Form.Label>SELECT ROLE</Form.Label>
                                <Form.Control as="select" value={data} >
                                    <option value="" disabled selected>Select your Role from the list</option>
                                    {data.map((e,key)=>{
                                        return <option key={key} value={e.value}>{e.name}</option>;
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <div style={{textAlign:'center',marginTop:30}} >
                                <div>
                                    <Link href='/login' >
                                        <Button variant="dark" type="submit" style={{width:'20%'}} >
                                            Register
                                        </Button>
                                    </Link>
                                </div>
                                
                                <div style={{marginTop:30}}>
                                    <Link href='/screens/signIn' >
                                        <a>Already have an account? <b>Log In</b> now</a>
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

export default InstituteRegister