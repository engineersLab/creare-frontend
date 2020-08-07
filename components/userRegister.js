import React,{useState, useContext} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Button, Form, Toast} from 'react-bootstrap'
import utilStyles from './utilStyles.module.css'
import {Context as ApiContext} from '../context/ApiContext'
import {Provider} from '../context/ApiContext'


const signInImage = require('../public/assets/login.svg')
const creareSigninLogo = require('../public/assets/creareSigninLogo.svg')

const InstituteRegister = ({schoolType}) =>{

    const {registerUser} = useContext(ApiContext)

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [school, setSchool] = useState(null)
    const [role, setRole] = useState(null)
    const [checked, setChecked] = useState(false)
    const [error,setError] = useState(null)
    const [show, setShow] = useState(false);
    
    const schools=["India","USA"]

    const roles = ["Student","Teacher","Admin"]

    const checkPassword = (pass) =>{
        setCPassword(pass)
        if(password != pass){
            setError("Password does not match")
        }else{
            setError(null)
        }
    }

    return(
        <>
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

                        <div style={{width:'90%',marginLeft:'10%'}}>
                            <div style={{marginBottom:30}}>
                                <b style={{fontSize:25}} >User Registration</b>
                            </div>
                            
                            <Form>
                                <div style={{width:'100%',display:'inline-block'}}>
                                    <div style={{width:'46%', float:'left'}} >
                                        <Form.Group >
                                            <b style={{fontSize:12}}>First Name</b>
                                            <Form.Control 
                                                id={utilStyles.formInput} size="sm" type="text" 
                                                placeholder="Enter First Name here..." onChange={(val)=>setFirstName(val.target.value)} />
                                        </Form.Group>
                                    </div>
                                    <div style={{width:'46%',float:'right'}}>
                                    <Form.Group >
                                            <b style={{fontSize:12}}>Last Name</b>
                                            <Form.Control 
                                                id={utilStyles.formInput} size="sm" type="text" 
                                                placeholder="Enter Last Name here..." onChange={(val)=>setLastName(val.target.value)} />
                                        </Form.Group>
                                    </div>
                                </div>
                                
                                <Form.Group >
                                    <b style={{fontSize:12}}>Email address</b>
                                    <Form.Control 
                                        id={utilStyles.formInput} size="sm" type="email" 
                                        placeholder="Enter Email Id here..." onChange={(val)=>setEmail(val.target.value)} />
                                </Form.Group>

                                <Form.Group >
                                    <b style={{fontSize:12}}>Password</b>
                                    <Form.Control 
                                        id={utilStyles.formInput} size="sm" type="password"
                                        placeholder="Enter Password here..." onChange={(val)=>setPassword(val.target.value)} />
                                </Form.Group>

                                <Form.Group>
                                    <b style={{fontSize:12}}>Confirm Password</b>
                                    <Form.Control 
                                        id={utilStyles.formInput} size="sm" type="password" 
                                        placeholder="Enter Password here..." onChange={(val)=>checkPassword(val.target.value)}  />
                                        {error ? <p style={{color:'red', fontSize:10}} >{error}</p> : null}
                                </Form.Group>

                                <Form.Group >
                                    <b style={{fontSize:12}}>Select {schoolType} School</b>
                                    <Form.Control 
                                        id={utilStyles.formInput} size="sm" as="select" 
                                        onChange={(val)=>setSchool(val.target.value)} >
                                        <option value="" disabled selected>Select your School</option>
                                        {schools.map((s)=>{
                                            return <option key={s} >{s}</option>;
                                        })}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group >
                                    <b style={{fontSize:12}}>Select Role</b>
                                    <Form.Control 
                                        id={utilStyles.formInput} size="sm" as="select" 
                                        onChange={(val)=>setRole(val.target.value)}  >
                                        <option value="" disabled selected>Select your Role</option>
                                        {roles.map((r)=>{
                                            return <option key={r} >{r}</option>;
                                        })}
                                    </Form.Control>
                                </Form.Group>
                                <div style={{textAlign:'center',marginTop:30}} >
                                    <span>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check 
                                                type="checkbox" label={`I Accept Terms and Conditions`} 
                                                checked={checked} onChange={()=>!checked ? setChecked(true) : setChecked(false)} />
                                        </Form.Group>
                                    </span>
                                    
                                    <span>
                                            <Button 
                                                disabled={!checked } variant="dark" 
                                                style={{width:'auto'}}
                                                onClick={()=>{
                                                    if(!firstName || !lastName || !role || !school || !email ){
                                                        setShow(true)
                                                    }else if (password.length < 8) {
                                                        setError("Password must be grater than 8 characters")
                                                    }else if (password != cPassword) {
                                                        setError("Passwords does not match")
                                                    }else{
                                                        registerUser({
                                                            firstName,lastName,role,school,password,email
                                                        })
                                                    }
                                                } }  >
                                                Register
                                            </Button>
                                    </span>
                                    
                                    
                                    <div style={{marginTop:30}}>
                                        <Link href='/screens/signIn' >
                                            <a>Already have an account? <b>Log In</b> now</a>
                                        </Link>
                                    </div>                  
                                </div>
                            </Form>
                        </div>
                    </div>
                        <Toast style={{position:'absolute', right:'45%', bottom:'10%',borderWidth:1, borderColor:'red'}}   onClose={() => setShow(false)} show={show} delay={3000} autohide>
                            <Toast.Body>Provide all the details</Toast.Body>
                        </Toast>
                </div>
                {/* <div style={{position:'absolute', textAlign:'center'}} >
                    
                </div> */}
                
            </body>
        </>
    )
}

export default ()=>{
    return(
        <Provider>
            <InstituteRegister/>
        </Provider>
    )  
} 