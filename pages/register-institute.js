import {useState, useContext} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Button, Form, Toast} from 'react-bootstrap'
import utilStyles from '../components/utilStyles.module.css'
import {storage} from '../components/firebase'
import bsCustomFileInput from 'bs-custom-file-input'
import $ from 'jquery'
import {Provider} from '../context/ApiContext'
import {Context} from '../context/ApiContext'


const signInImage = require('../public/assets/login.svg')
const creareSigninLogo = require('../public/assets/creareSigninLogo.svg')

const NewInstituteRegister = () =>{

    const {registerInstitute} = useContext(Context)
    const [image, setImage] = useState(null)
    const [flag, setFlag] = useState(false)
    const [input, setInput] = useState(null)
    const [failure, setFaliure] = useState(false);
    const [success, setSuccess] = useState(false);
    const [msg, setMsg]= useState(null)
    const [idProof, setIdProof] = useState([])
    const [idCheck, setIdCheck] = useState([])

    //Form input
    const instituteTypes = ['School', 'College', 'University', 'Others']
    const idArray = ['Aadhar', 'PAN', 'Passport']
    const [cities,setCities] = useState(['Salem','Chennai'])
    const [states,setStates] = useState(['Tamilnadu','Kerela'])
    const [countries,setCountries] = useState(['India','USA'])


    //Form data
    const [insName, setInsName] = useState(null)
    const [insType, setInsType] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [altPhone, setAltPhone] = useState(null)
    const [addOne, setAddOne] = useState(null)
    const [addTwo, setAddTwo] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)
    const [pincode, setPincode] = useState(null)
    const [country, setCountry] = useState(null)
    const [idType, setIdType] = useState(null)
    const [idUrl, setIdUrl] = useState(null)
    

    const handleChange = e =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]) 
            setFlag(true)  
            setIdCheck([...idCheck,idType])
        }
    }
    
    const handleUpload = () =>{
        const uploadTask = storage.ref(`idProofs/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot=>{},
            error =>{
                console.log(error)
            },
            async ()=>{
                await storage
                    .ref("idProofs")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url=>{
                        setIdUrl(url)
                        setIdProof([...idProof,{
                            "kind" : idType.toLowerCase(), 
                            "uploadUrl" : url
                    }])
                    })
                    setMsg("Document Uploaded")
                    setSuccess(true)
            }
        )
    }
    if(image && flag){
        handleUpload()
        setFlag(false)
    }


    const genNewInput = () =>{
        if(!input){
            setInput([
                <div style={{width:'100%',display:'inline-block'}}>
                    <div style={{width:'50%', float:'left'}}>
                        <Form.Group  >
                            <b style={{fontSize:12}}>ID Proof</b>
                            <Form.Control id={utilStyles.formInput} as="select" size="sm" type="text" 
                                onChange={(val)=>setIdType(val.target.value)} >
                                <option value="" disabled  selected>Proof type</option>
                                {idArray.map((id)=>{
                                    if(!idCheck.includes(id)){
                                        return <option key={id} >{id} </option>;
                                    }
                                    
                                })}
                            </Form.Control>
                        </Form.Group>
                    </div>
                    
                    <div style={{width:'45%',float:'right',marginTop:20}}>
                        <Form.File 
                                id="idFile"
                                label="Upload ID"
                                custom 
                                onChange={handleChange} 
                            />
                    </div>
                </div>
            ]   
            ) 
        }else{
            setInput([...input,
                <div style={{width:'100%',display:'inline-block'}}>
                    <div style={{width:'50%', float:'left'}}>
                        <Form.Group  >
                            <b style={{fontSize:12}}>ID Proof</b>
                            <Form.Control id={utilStyles.formInput} as="select" size="sm" type="text" 
                                onChange={(val)=>setIdType(val.target.value)} >
                                <option value="" disabled  selected>Proof type</option>
                                {idArray.map((id)=>{
                                    if(!idCheck.includes(id)){
                                        return <option key={id} value={id}>{id} </option>;
                                    }
                                    
                                })}
                            </Form.Control>
                        </Form.Group>
                    </div>
                    
                    <div style={{width:'45%',float:'right',marginTop:20}}>
                        <Form.File 
                                id="idFile"
                                label="Upload ID"
                                custom 
                                onChange={handleChange} 
                            />
                    </div>
                </div>
            ])
        }
        
    }

    console.log(idUrl)

    $(document).ready(function () {
        bsCustomFileInput.init()
      })

    return(
        <>
            <Head>
                <title>SignIn</title>
            </Head>

            <body className={utilStyles.container} >
                <div className='row align-items-center' style={{height:'100vh'}}>
                    <div className='col' id={utilStyles.image} style={{marginBottom:150,paddingLeft:50}}>
                        <img src={signInImage} className='img-fluid' />
                    </div>
                    <div className='col'>
                        <div style={{textAlign:'center',marginTop:20,marginLeft:'10%'}} >
                            <img src={creareSigninLogo} className='img-fluid'/>
                        </div>

                        <div style={{width:'75%',marginLeft:'20%'}} >
                        <div style={{marginTop:30,marginBottom:30}}>
                            <b style={{fontSize:25}} >Institute Registration</b>
                        </div>
                        
                        <Form>
                            <Form.Group >
                                <b style={{fontSize:12}}>Institute Name</b>
                                <Form.Control 
                                    id={utilStyles.formInput} size="sm" type="text" 
                                    placeholder="Enter your School name here..." onChange={(val)=>setInsName(val.target.value.toLowerCase())} />
                            </Form.Group>

                            <Form.Group >
                                <b style={{fontSize:12}}>Institute Type</b>
                                <Form.Control 
                                    id={utilStyles.formInput} size="sm" as="select" 
                                    onChange={(val)=>setInsType(val.target.value.toLowerCase())} >
                                    <option value="" disabled selected>Select your Institute type</option>
                                    {instituteTypes.map((i)=>{
                                        return <option key={i} >{i}</option>;
                                    })}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group >
                                <b style={{fontSize:12}}>Email address</b>
                                <Form.Control 
                                    id={utilStyles.formInput} size="sm" type="email" 
                                    placeholder="Enter Email Id here..." onChange={(val)=>setEmail(val.target.value.toLowerCase())} />
                            </Form.Group>

                            <div style={{width:'100%',display:'inline-block'}}>
                                <div style={{width:'46%', float:'left'}}>
                                    <Form.Group  >
                                        <b style={{fontSize:12}}>Phone No</b>
                                        <Form.Control 
                                            id={utilStyles.formInput} size="sm" type='text'
                                            placeholder="Enter Phone No here..." onChange={(val)=>setPhone(val.target.value)} />
                                    </Form.Group>
                                </div>
                                
                                <div style={{width:'46%',float:'right'}}>
                                    <Form.Group  >
                                        <b style={{fontSize:12}}>Alt Phone No</b>
                                        <Form.Control 
                                            id={utilStyles.formInput} size="sm" type='text'
                                            placeholder="Enter Phone No here..." onChange={(val)=>setAltPhone(val.target.value)} />
                                    </Form.Group>
                                </div>
                            </div>

                            <Form.Group >
                                <b style={{fontSize:12}}>Address Line 1</b>
                                <Form.Control 
                                    id={utilStyles.formInput} size="sm" type="text" 
                                    placeholder="Enter your address here..." onChange={(val)=>setAddOne(val.target.value.toLowerCase())} />
                            </Form.Group>

                            <Form.Group >
                                <b style={{fontSize:12}}>Address Line 2</b>
                                <Form.Control 
                                    id={utilStyles.formInput} size="sm" type="text" 
                                    placeholder="Enter your address here..." onChange={(val)=>setAddTwo(val.target.value.toLowerCase())} />
                            </Form.Group>

                            <div style={{width:'100%',display:'inline-block'}}>
                                <div style={{width:'46%', float:'left'}}>
                                <Form.Group  >
                                        <b style={{fontSize:12}}>City</b>
                                        <Form.Control id={utilStyles.formInput} as="select" size="sm" type="text" 
                                            onChange={(val)=>setCity(val.target.value.toLowerCase())} >
                                            <option value=""  selected>Select City</option>
                                            {cities.map((id)=>{
                                                return <option key={id} value={id}>{id} </option>;
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                
                                <div style={{width:'46%',float:'right'}}>
                                    <Form.Group  >
                                        <b style={{fontSize:12}}>State</b>
                                        <Form.Control id={utilStyles.formInput} as="select" size="sm" type="text" 
                                            onChange={(val)=>setState(val.target.value.toLowerCase())} >
                                            <option value=""  selected>Select State</option>
                                            {states.map((id)=>{
                                                return <option key={id} value={id}>{id} </option>;
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                            </div>
                            <div style={{width:'100%',display:'inline-block' }}>
                                <div style={{width:'46%', float:'left'}}>
                                    <Form.Group >
                                        <b style={{fontSize:12}}>Pincode</b>
                                        <Form.Control 
                                            id={utilStyles.formInput} size="sm" type="text" 
                                            placeholder="Enter Pincode" onChange={(val)=>setPincode(val.target.value)} />
                                    </Form.Group>
                                </div>
                                
                                <div style={{width:'46%',float:'right'}}>
                                    <Form.Group  >
                                        <b style={{fontSize:12}}>Country</b>
                                        <Form.Control id={utilStyles.formInput} as="select" size="sm" type="text" 
                                            onChange={(val)=>setCountry(val.target.value.toLowerCase())} >
                                            <option value=""  selected>Select Country</option>
                                            {countries.map((id)=>{
                                                return <option key={id} value={id}>{id} </option>;
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                            </div>
                            
                            <div style={{width:'100%',display:'inline-block'}}>
                                <div style={{width:'50%', float:'left'}}>
                                    <Form.Group  >
                                        <b style={{fontSize:12}}>ID Proof</b>
                                        <Form.Control id={utilStyles.formInput} as="select" size="sm" type="text" 
                                            onChange={(val)=>setIdType(val.target.value)} >
                                            <option value="" disabled selected>Proof type</option>
                                            {idArray.map((id)=>{
                                                return <option key={id} >{id} </option>;
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                
                                <div style={{width:'45%',float:'right',marginTop:20}}>
                                    <Form.File 
                                            id="idFile"
                                            label="Upload ID"
                                            custom 
                                            onChange={handleChange} 
                                        />
                                </div>
                            </div>
                            {input?input:null}
                            <div>
                                <Button variant='light' style={{margin:0,float:"left"}} onClick={genNewInput}>{'\u002b'} Add more proof</Button>
                            </div>
                            
                            <div style={{textAlign:'center'}} >
                                <div>
                                    <Button variant="dark"  style={{width:'auto'}}
                                        onClick={()=>{
                                            if( !insName || !insType || !email || !phone || !altPhone || !addOne ||
                                                !addTwo || !city || !state || !pincode || !country || !idType || !image  ){
                                                    setMsg("Provide All the Details")
                                                    setFaliure(true)
                                                }
                                            else{
                                                registerInstitute({
                                                    insName, insType, email, phone, altPhone, addOne, addTwo,
                                                    city, state, pincode, country, idProof
                                                })
                                            }
                                        }}
                                        >
                                        Register
                                    </Button>
                                </div>
                                
                                <div style={{marginTop:20,marginBottom:20}}>
                                    <Link href='/screens/signIn' >
                                        <a>Already have an account? <b>Log In</b> now</a>
                                    </Link>
                                </div>
                            </div>
                        </Form>
                        </div>
                    </div>
                    
                </div>
                <Toast style={{position:'absolute', right:'45%', bottom:'-20%',borderWidth:1, borderColor:'red'}}   onClose={() => setFaliure(false)} show={failure} delay={3000} autohide>
                    <Toast.Body>{msg}</Toast.Body>
                </Toast>
                <Toast style={{position:'absolute', right:'45%', bottom:'-20%',borderWidth:1, borderColor:'green'}}   onClose={() => setSuccess(false)} show={success} delay={3000} autohide>
                    <Toast.Body>{msg}</Toast.Body>
                </Toast>
            </body>
        </>
    )
}

export default () =>{
    return(
        <Provider>
            <NewInstituteRegister/>
        </Provider>
    )
} 