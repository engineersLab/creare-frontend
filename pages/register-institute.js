import {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Button, Form} from 'react-bootstrap'
import utilStyles from '../components/utilStyles.module.css'
import {storage} from '../components/firebase'

const signInImage = require('../public/assets/login.svg')
const creareSigninLogo = require('../public/assets/creareSigninLogo.svg')

const NewSchoolRegister = () =>{

    const [image, setImage] = useState(null)
    const [flag, setFlag] = useState(false)
    const [idUrl, setIdUrl] = useState(null)
    const idArray = ['Aadhaar', 'PAN', 'Passport']

    const handleChange = e =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]) 
            setFlag(true)    
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
                    })
            }
        )
    }
    if(image && flag){
        handleUpload()
        setFlag(false)
    }
    console.log(idUrl)

    return(
        <div>
            <Head>
                <title>SignIn</title>
            </Head>

            <body className={utilStyles.container} >
                <div className='row align-items-center' style={{height:'100vh'}}>
                    <div className='col' id={utilStyles.image}>
                        <img src={signInImage} className='img-fluid' />
                    </div>
                    <div className='col'>
                        <div style={{textAlign:'center'}} >
                            <img src={creareSigninLogo} className='img-fluid'/>
                        </div>

                        <div style={{width:'70%',marginLeft:'20%'}} >
                        <div style={{marginTop:30,marginBottom:30}}>
                            <b style={{fontSize:25}} >Institute Registration</b>
                        </div>
                        
                        <Form>
                            <Form.Group controlId="formSchoolName">
                                <b style={{fontSize:12}}>INSTITUTE NAME</b>
                                <Form.Control id={utilStyles.formInput} size="sm" type="text" placeholder="Enter your School name here..." />
                            </Form.Group>

                            <Form.Group controlId="formAddressLine1">
                                <b style={{fontSize:12}}>ADDRESS LINE 1</b>
                                <Form.Control id={utilStyles.formInput} size="sm" type="text" placeholder="Enter your address here..." />
                            </Form.Group>

                            <Form.Group controlId="formAddressLine2">
                                <b style={{fontSize:12}}>ADDRESS LINE 2</b>
                                <Form.Control id={utilStyles.formInput} size="sm" type="text" placeholder="Enter your address here..." onChange={(v)=>console.log(v.target.value)} />
                            </Form.Group>

                            <div style={{width:'50%'}}>
                                <Form.Group controlId="formPincode">
                                    <b style={{fontSize:12}}>PINCODE</b>
                                    <Form.Control id={utilStyles.formInput} size="sm" type="text" placeholder="Enter Pincode" onChange={(v)=>console.log(v.target.value)} />
                                </Form.Group>
                            </div>
                            
                            <div style={{width:'100%',display:'inline-block'}}>
                                <div style={{width:'50%', float:'left'}}>
                                    <Form.Group controlId="formIdProof" >
                                        <b style={{fontSize:12}}>ID PROOF</b>
                                        <Form.Control id={utilStyles.formInput} as="select" size="sm" type="text" 
                                            onChange={(val)=>console.log(val.target.value)} >
                                            <option value=""  selected>Select your Role</option>
                                            {idArray.map((id)=>{
                                                return <option key={id} value={id}>{id} </option>;
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                
                                <div style={{width:'45%',float:'right',marginTop:20}}>
                                    {/* <Form.Group controlId="idInput"  > */}
                                        <Form.File 
                                                id="idFile"
                                                label="Upload ID"
                                                custom 
                                                onChange={handleChange} 
                                            />
                                            {/* <input type='file' onChange={handleChange}/> */}
                                           
                                            {/* <input className='custom-file' type="file"/> */}
                                    {/* </Form.Group> */}
                                </div>
                            </div>
                        
                            <div style={{textAlign:'center',marginTop:30}} >
                                <div>
                                    <Link href='/register'>
                                        <Button variant="dark" type="submit" style={{width:'auto'}} >
                                            Register
                                        </Button>
                                    </Link>
                                </div>
                                
                                <div style={{marginTop:20}}>
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

export default NewSchoolRegister