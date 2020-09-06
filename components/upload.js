import {useEffect} from 'react'
import Head from 'next/head'
import { Card, Button,Form, Toast} from 'react-bootstrap'
import utilStyles from './utilStyles.module.css'
import {TextField} from '@material-ui/core'



const success = require('../public/assets/examSub.svg')


const Upload = ({type}) =>{

    const grades = ['Class 1', 'Class 2', 'Class 3']

    useEffect(()=>{
        const calleffect = async()=>{
            const {default: bsCustomFileInput} = await import ('bs-custom-file-input')
            bsCustomFileInput.init()
        }
        calleffect()
    },[])


    return(
        <>
            <Head>
                <title>Upload</title>
            </Head>
            <body style={{overflowX:'hidden'}}>
                <div className='cus-header-shadow cus-desktop-header'>
                    <div className='cus-header-content cus-header-start-2'>
                        <h3>Upload {type}</h3>
                    </div>
                </div>
        
                <div className='cus-mobile-header text-center'>
                    <h5 className='cus-mobile-header-padding'>Upload {type}</h5>
                    <hr className='my-4'/>
                </div>

                <div >
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-6'>
                            <div className='cus-horizontal-spacing cus-top-margin'>
                                <Card className='cus-card-shadow'>
                                    <Card.Body>
                                        <p>1. Select the class</p>
                                        <Form.Control 
                                            id={utilStyles.formInput} size="sm" as="select" style={{marginBottom:20}} >
                                            <option value="" disabled selected>Select Class</option>
                                            {grades.map((r)=>{
                                                return <option key={r} >{r}</option>;
                                            })}
                                        </Form.Control>

                                        <p>2. {type} title</p>
                                        <TextField style={{marginBottom:20}} id="outlined-basic" placeholder={type + ' title'} variant="outlined" fullWidth size='small' />

                                        <p>3. Description (optional)</p>
                                        <TextField
                                            id="outlined-multiline-static"
                                            fullWidth
                                            multiline
                                            rows={4}
                                            placeholder="Description"
                                            variant="outlined"
                                            />
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                        <div className='col-sm-12 col-md-12 col-lg-6'>
                            <div className='cus-horizontal-spacing cus-top-margin'>
                                <Card className='cus-card-shadow'>
                                    <Card.Body>
                                        <div style={{textAlign:'center', padding:30}} >
                                            <Form.File 
                                                    id="idFile"
                                                    label={"Upload " + type}
                                                    custom 
                                                    // onChange={handleChange} 
                                                />                                
                                            </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </body>
        </>
    )
}

export default Upload