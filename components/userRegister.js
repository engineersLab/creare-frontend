import React,{useState, useContext} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Button, Form, Toast, Card} from 'react-bootstrap'
import utilStyles from './utilStyles.module.css'
import {Context as ApiContext} from '../context/ApiContext'
import {Provider} from '../context/ApiContext'
import {TextField, List, ListItem} from '@material-ui/core'
import {AiOutlineClose} from 'react-icons/ai'
import {IconContext} from 'react-icons'


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
    const [show, setShow] = useState(false)
    const [showInstitutes,  setShowInstitutes] = useState(false)
    const [schools, setSchools] = useState(["HolyCross","GlazeBrooke","Acharya","Shrishti Vidyashram","VetriVikas","HolyCross","GlazeBrooke","Acharya","Shrishti Vidyashram","VetriVikas"])
    const totalSchool = ["HolyCross","GlazeBrooke","Acharya","Shrishti Vidyashram","VetriVikas",,"HolyCross","GlazeBrooke","Acharya","Shrishti Vidyashram","VetriVikas"]
    const roles = ["Student","Teacher","Admin"]

    const checkPassword = (pass) =>{
        setCPassword(pass)
        if(password != pass){
            setError("Password does not match")
        }else{
            setError(null)
        }
    }

    const searchSchool = (val) =>{
        console.log(val)
        let x,y
        let temparray = []
        for(x in totalSchool){
            y = totalSchool[x]
            if(y.startsWith(val) || y.toLowerCase().startsWith(val)){
                temparray.push(y)
                setSchools(temparray)
                console.log(y)
            }
        }
    }

    return(
        <>
            <Head>
                <title>Register</title>
            </Head>

            <body>
                <div className='row align-items-center' style={{height:'100vh'}}>
                    <div className='col cus-desktop-header text-center'>
                        <img src={signInImage} className='img-fluid' />
                    </div>
                    <div className='col' >
                        <div className='text-center'>
                            <img src={creareSigninLogo} className='img-fluid cus-mob-top-margin' style={{width:'10%',height:'10%'}} />   
                        </div>
                        <div className='text-center cus-bottom-margin'>
                            <b className='cus-form-header-text'>User Registration</b>
                        </div>
                        <div className='cus-horizontal-spacing'>
                            <Form>
                                <div style={{width:'100%',display:'inline-block'}}>
                                    <div style={{width:'46%', float:'left'}} >
                                        <Form.Group >
                                            <b className='cus-card-text'>First Name</b>
                                            <Form.Control className='cus-card-text'
                                                id={utilStyles.formInput} size="sm" type="text" 
                                                placeholder="Enter First Name here..." onChange={(val)=>setFirstName(val.target.value)} />
                                        </Form.Group>
                                    </div>
                                    <div style={{width:'46%',float:'right'}}>
                                        <Form.Group >
                                            <b className='cus-card-text'>Last Name</b>
                                            <Form.Control className='cus-card-text'
                                                id={utilStyles.formInput} size="sm" type="text" 
                                                placeholder="Enter Last Name here..." onChange={(val)=>setLastName(val.target.value)} />
                                        </Form.Group>
                                    </div>
                                </div>
                                
                                <Form.Group >
                                    <b className='cus-card-text'>Email address</b>
                                    <Form.Control className='cus-card-text cus-form-input'
                                        size="sm" type="email" 
                                        placeholder="Enter Email Id here..." onChange={(val)=>setEmail(val.target.value)} />
                                </Form.Group>

                                <Form.Group >
                                    <b className='cus-card-text'>Password</b>
                                    <Form.Control className='cus-card-text cus-form-input'
                                        size="sm" type="password"
                                        placeholder="Enter Password here..." onChange={(val)=>setPassword(val.target.value)} />
                                </Form.Group>

                                <Form.Group>
                                    <b className='cus-card-text'>Confirm Password</b>
                                    <Form.Control className='cus-card-text cus-form-input'
                                        size="sm" type="password" 
                                        placeholder="Enter Password here..." onChange={(val)=>checkPassword(val.target.value)}  />
                                        {error ? <p style={{color:'red', fontSize:10}} >{error}</p> : null}
                                </Form.Group>

                                <Form.Group  >
                                    <b className='cus-card-text'>Select {schoolType} School</b>
                                    <Form.Control className='cus-card-text cus-form-input'
                                        value={school} onClick={()=>setShowInstitutes(true)} size="sm" 
                                        placeholder='Select School'
                                         >
                                             
                                         </Form.Control>
                                </Form.Group>
                                <Form.Group >
                                    <b className='cus-card-text'>Select Role</b>
                                    <Form.Control className='cus-card-text cus-form-input'
                                        size="sm" as="select" 
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
                                            <Form.Check className='cus-text'
                                                type="checkbox" label={`I Accept Terms and Conditions`} 
                                                checked={checked} onChange={()=>!checked ? setChecked(true) : setChecked(false)} />
                                        </Form.Group>
                                    </span>
                                    
                                    <span>
                                            <Button 
                                                disabled={!checked } variant="dark" 
                                                className='cus-text'
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
                                        <Link href='/signIn' >
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
                {
                    showInstitutes
                    ?
                    <div style={{zIndex:2, position:'fixed',height:'100%',width:'100%', left:0, top:0, bottom:0, right:0, backgroundColor: 'rgba(0,0,0,0.5)'}} className='d-flex align-items-center justify-content-center'>
                        <Card style={{position:'absolute',width:400, minHeight:400, maxHeight:400, overflowY:'scroll'}}   >
                            <Card.Body>
                                <TextField  onChange={(val)=>searchSchool(val.target.value)} fullWidth size='small' id="filled-basic" label="Institute Name"  />
                                <IconContext.Provider  value={{ color: "gray", size:'1.3em' }}>
                                    <AiOutlineClose style={{position:'absolute',top:40, right:20, cursor:'pointer'}} onClick={()=>setShowInstitutes(false)} /> 
                                </IconContext.Provider>
                                
                                {/* <Button variant='dark' style={{marginTop:30, float:'right'}} >Publish</Button> */}
                                <List>
                                {schools.map((s)=>{
                                    return <ListItem onClick={()=>{setSchool(s),setShowInstitutes(false)}} button>
                                                <p>{s}</p>
                                            </ListItem>
                                            
                                    })}
                                </List>
                            </Card.Body>
                        </Card>
                    </div>
                :
                null
                }
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