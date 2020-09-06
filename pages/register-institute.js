import {useState, useContext, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Button, Form, Toast} from 'react-bootstrap'
import {storage} from '../components/firebase'
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
    
    useEffect(()=>{
        const calleffect = async()=>{
            const {default: bsCustomFileInput} = await import ('bs-custom-file-input')
            bsCustomFileInput.init()
        }
        calleffect()
    },[])

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
                            <b className='cus-card-text'>ID Proof</b>
                            <Form.Control className='cus-card-text cus-form-input' as="select" size="sm" type="text" 
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
                            <b className='cus-card-text'>ID Proof</b>
                            <Form.Control className='cus-card-text cus-form-input' as="select" size="sm" type="text" 
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

    return(
        <>
            <Head>
                <title>SignIn</title>
            </Head>

            <body>
                <div className='row align-items-center' style={{height:'100vh'}}>
                    <div className='col cus-desktop-header text-center'>
                        <img src={signInImage} className='img-fluid' />
                    </div>
                    <div className='col'>
                        <div className='text-center cus-top-margin'>
                            <img src={creareSigninLogo} className='img-fluid cus-mob-top-margin' style={{width:'10%',height:'10%'}} />   
                        </div>
                        <div className='text-center cus-bottom-margin'>
                            <b className='cus-form-header-text'>Institute Registration</b>
                        </div>

                        <div className='cus-horizontal-spacing' >
                        <Form>
                            <Form.Group >
                                <b className='cus-card-text'>Institute Name</b>
                                <Form.Control 
                                    className='cus-card-text cus-form-input' size="sm" type="text" 
                                    placeholder="Enter your School name here..." onChange={(val)=>setInsName(val.target.value.toLowerCase())} />
                            </Form.Group>

                            <Form.Group >
                                <b className='cus-card-text'>Institute Type</b>
                                <Form.Control 
                                    className='cus-card-text cus-form-input' size="sm" as="select" 
                                    onChange={(val)=>setInsType(val.target.value.toLowerCase())} >
                                    <option value="" disabled selected>Select your Institute type</option>
                                    {instituteTypes.map((i)=>{
                                        return <option key={i} >{i}</option>;
                                    })}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group >
                                <b className='cus-card-text'>Email address</b>
                                <Form.Control 
                                    className='cus-card-text cus-form-input' size="sm" type="email" 
                                    placeholder="Enter Email Id here..." onChange={(val)=>setEmail(val.target.value.toLowerCase())} />
                            </Form.Group>

                            <div style={{width:'100%',display:'inline-block'}}>
                                <div style={{width:'46%', float:'left'}}>
                                    <Form.Group  >
                                        <b className='cus-card-text'>Phone No</b>
                                        <Form.Control 
                                            className='cus-card-text cus-form-input' size="sm" type='text'
                                            placeholder="Enter Phone No here..." onChange={(val)=>setPhone(val.target.value)} />
                                    </Form.Group>
                                </div>
                                
                                <div style={{width:'46%',float:'right'}}>
                                    <Form.Group  >
                                        <b className='cus-card-text'>Alt Phone No</b>
                                        <Form.Control 
                                            className='cus-card-text cus-form-input' size="sm" type='text'
                                            placeholder="Enter Phone No here..." onChange={(val)=>setAltPhone(val.target.value)} />
                                    </Form.Group>
                                </div>
                            </div>

                            <Form.Group >
                                <b className='cus-card-text'>Address Line 1</b>
                                <Form.Control 
                                    className='cus-card-text cus-form-input' size="sm" type="text" 
                                    placeholder="Enter your address here..." onChange={(val)=>setAddOne(val.target.value.toLowerCase())} />
                            </Form.Group>

                            <Form.Group >
                                <b className='cus-card-text'>Address Line 2</b>
                                <Form.Control 
                                    className='cus-card-text cus-form-input' size="sm" type="text" 
                                    placeholder="Enter your address here..." onChange={(val)=>setAddTwo(val.target.value.toLowerCase())} />
                            </Form.Group>

                            <div style={{width:'100%',display:'inline-block'}}>
                                <div style={{width:'46%', float:'left'}}>
                                <Form.Group  >
                                        <b className='cus-card-text'>City</b>
                                        <Form.Control className='cus-card-text cus-form-input' as="select" size="sm" type="text" 
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
                                        <b className='cus-card-text'>State</b>
                                        <Form.Control className='cus-card-text cus-form-input' as="select" size="sm" type="text" 
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
                                        <b className='cus-card-text'>Pincode</b>
                                        <Form.Control 
                                            className='cus-card-text cus-form-input' size="sm" type="text" 
                                            placeholder="Enter Pincode" onChange={(val)=>setPincode(val.target.value)} />
                                    </Form.Group>
                                </div>
                                
                                <div style={{width:'46%',float:'right'}}>
                                    <Form.Group  >
                                        <b className='cus-card-text'>Country</b>
                                        <Form.Control className='cus-card-text cus-form-input' as="select" size="sm" type="text" 
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
                                        <b className='cus-card-text'>ID Proof</b>
                                        <Form.Control className='cus-card-text cus-form-input' as="select" size="sm" type="text" 
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
                                            className='cus-text'
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