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
                <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                    <span style={{display:'inline-block'}} >
                        <h4 style={{marginLeft:50, marginTop:50}} >Upload  {type} </h4>
                    </span>
                    <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                        {/* <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Preview</Button> */}
                        {/* <Button variant='dark' style={{paddingRight:30,paddingLeft:30}}>Submit</Button> */}
                    </span>
                </div>

                <div >
                    <div className='row'>
                        <div className='col'>
                            <div style={{marginLeft:70, marginTop:50, marginRight:70}}>
                                <Card>
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

                        <div className='col'>
                            <div style={{marginLeft:20 ,marginTop:50}} className='d-flex' >
                                <Card className={utilStyles.card} style={{width:'80%'}} >
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