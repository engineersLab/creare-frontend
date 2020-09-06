import {useState} from 'react'
import Head from 'next/head'
import {Button, Form, Card} from 'react-bootstrap'
import utilStyles from '../../components/utilStyles.module.css'
import {TextField, InputAdornment} from '@material-ui/core'

const ScheduleExam = () =>{

    const [grade, setGrade] = useState(null)
    const [duration, setDuration] = useState('30')
    const [noOfQuestions, setNoOfQuestions] = useState('1')
    const [option, setOption] = useState('0')
    const [questions, setQuestions] = useState(null)
    const [examType, setExamType] = useState(null)

    const grades = ['Class 1', 'Class 2', 'Class 3']

    const genMCQQuestions = (totalQns) =>{
        let qArray = []
        for(let i=1; i<=totalQns; i++){
            qArray.push(
                <div className='cus-top-margin cus cus-horizontal-spacing'>
                            <Card>
                                <Card.Body>
                                <TextField
                                    id="standard-full-width"
                                    placeholder="Type your question here"
                                    fullWidth
                                    margin="normal"
                                    style={{marginBottom:30}}
                                    InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            Q{i}
                                          </InputAdornment>
                                        ),
                                      }}
                                    />
                <div>
                    <div>
                        <input name='option' type='radio' value='1' className='cus-inline' checked={option==='1'} onChange={()=>setOption('1')} />
                        <TextField id="standard-full-width" className='cus-inline' placeholder="Option 1" className='cus-full-width'  style={{marginLeft:20}}/>  
                    </div>
                    <div>
                        <input name='option' type='radio' value='2' className='cus-inline' checked={option==='2'} onChange={()=>setOption('2')} />
                        <TextField id="standard-full-width" className='cus-inline' placeholder="Option 2" className='cus-full-width' style={{marginLeft:20}}  />  
                    </div>
                    <div>
                        <input name='option' type='radio' value='3' checked={option==='3'} className='cus-inline' onChange={()=>setOption('3')} />
                        <TextField id="standard-full-width"  placeholder="Option 3" className='cus-inline cus-full-width' style={{marginLeft:20}}/>  
                    </div>
                </div>
                </Card.Body>
                            </Card>
                        </div>
            )
        setQuestions(qArray)
        }
    }

   return(
       <>
        <Head>
            <title>Schedule Exam</title>
        </Head>

        <body style={{overflowX:'hidden'}}>
            <div className='cus-header-shadow cus-desktop-header'>
                <div className='cus-header-content cus-header-start-2'>
                    <h3>Prepare Exam Q/A</h3>
                </div>
                <div className='cus-header-content cus-header-end'>
                    <Button variant='dark' className='cus-horizontal-padding cus-right-margin'>Preview</Button>
                </div>
            </div>
    
            <div className='cus-mobile-header text-center'>
                <h5 className='cus-mobile-header-padding cus-inline-block'>Prepare Exam Q/A</h5>
                <Button variant='dark' className='cus-horizontal-padding cus-inline-block cus-float-right cus-right-margin cus-mob-top-margin cus-card-text'>Preview</Button>
                <hr className='my-4'/>
            </div>

            <div style={{marginBottom:50}}>
                <div className='row' >
                    <div className='col-sm-12 col-md-12 col-lg-4' >
                        <div className='cus-top-margin cus cus-horizontal-spacing'>
                            <p>Select the Class</p>
                            <Form>
                            <Form.Control 
                                    size="sm" as="select" 
                                    onChange={(val)=>setGrade(val.target.value.toLowerCase())} >
                                    <option value="" disabled selected>Select Class</option>
                                    {grades.map((i)=>{
                                        return <option key={i} >{i}</option>;
                                    })}
                                </Form.Control>
                            </Form>
                        </div>
                        
                        <div className='cus-top-margin cus cus-horizontal-spacing'>
                            <p>Time Duration (in mins)</p>
                            <div className='d-flex justify-content-md-around flex-column flex-md-row' style={{marginBottom:50}}>
                                    <span>
                                        <input 
                                            name='duration' 
                                            type='radio' 
                                            value='30' 
                                            checked={duration==='30'}
                                            onChange={()=>setDuration('30')} /> 30
                                    </span>
                                    <span>
                                        <input 
                                            name='duration' 
                                            type='radio' 
                                            value='60' 
                                            checked={duration==='60'}
                                            onChange={()=>setDuration('60')} /> 60
                                    </span>
                                    <span>
                                        <input 
                                            name='duration' 
                                            type='radio' 
                                            value='180'
                                            checked={duration==='180'}
                                            onChange={()=>setDuration('180')} /> 180
                                    </span>
                                </div>
                        </div>

                        <div className='cus-top-margin cus cus-horizontal-spacing'>
                            <p>Description (optional)</p>
                            <TextField
                                id="outlined-multiline-static"
                                fullWidth
                                multiline
                                rows={4}
                                placeholder="Description"
                                variant="outlined"
                                />
                        </div>

                        <div className='cus-top-margin cus cus-horizontal-spacing'>
                            <p>Guidelines</p>
                            <TextField
                                id="outlined-multiline-static"
                                fullWidth
                                multiline
                                rows={6}
                                placeholder="Guidelines"
                                variant="outlined"
                                />
                        </div>

                        <div className='cus-top-margin cus cus-horizontal-spacing'>
                            <p>Exam Due On</p>
                            <Form>
                                <Form.Control 
                                    size="sm" as="select" 
                                    onChange={(val)=>setGrade(val.target.value.toLowerCase())} >
                                    <option value="" disabled selected>Select Date</option>
                                    {grades.map((i)=>{
                                        return <option key={i} >{i}</option>;
                                    })}
                                </Form.Control>
                            </Form>
                        </div>

                    </div>


                    <div className='col-sm-12 col-md-12 col-lg-8'>
                        <div className='cus-top-margin cus cus-horizontal-spacing'>
                            <Card className={utilStyles.card} >
                                <Card.Body>
                                    <p>Select the type of question format</p>
                                    <br/>
                                    <Button onClick={()=>setExamType('MCQ')} style={{paddingRight:30, paddingLeft:30, marginRight:30}} variant='outline-dark'>MCQ</Button>
                                    <Button onClick={()=>{setQuestions(null); setExamType('Q/A')}} style={{paddingRight:30, paddingLeft:30}} variant='outline-dark'>Q/A</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        {
                            examType == 'MCQ'
                            ?
                            <div className='cus-top-margin cus cus-horizontal-spacing'>
                            <b>MCQ Questions</b>
                            <p style={{fontSize:12, color:'gray'}} >(Select the correct answer after each question)</p>
                            <br/>
                            <Card>
                                <Card.Body>
                                <TextField id="standard-full-width" placeholder="Title of the quiz" fullWidth margin="normal" style={{marginBottom:30}} />
                                <br/>
                                
                                <b >How many questions?</b>
                                <div className='d-flex flex-column flex-md-row' style={{marginBottom:50, marginTop:20}}>
                                    <span>
                                        <input name='noOfQuestions' type='radio' value='10' style={{marginLeft:30}} checked={noOfQuestions==='10'}
                                            onChange={()=>{
                                                            setNoOfQuestions('10') 
                                                            genMCQQuestions(10)}} /> 10
                                    </span>
                                    <span>
                                        <input name='noOfQuestions' type='radio' value='25' style={{marginLeft:30}} checked={noOfQuestions==='25'}
                                            onChange={()=>{
                                                setNoOfQuestions('25')
                                                genMCQQuestions(25)}
                                                } /> 25
                                    </span>
                                    <span>
                                        <input name='noOfQuestions' type='radio' value='30' style={{marginLeft:30}} checked={noOfQuestions==='30'}
                                            onChange={()=>{
                                                setNoOfQuestions('30')
                                                genMCQQuestions(30)}
                                                } /> 30
                                    </span>
                                </div>
                                </Card.Body>
                            </Card>
                        </div>
                        : examType == 'Q/A'
                        ?
                        <div className='cus-top-margin cus cus-horizontal-spacing'>
                            <b>Q/A</b>
                            <p style={{fontSize:12, color:'gray'}} >Tip: For fill ups use '_'</p>
                            <br/>
                            <Card>
                                <Card.Body>
                                <TextField id="standard-full-width" placeholder="Enter title here" fullWidth margin="normal" style={{marginBottom:30}}/>
                                <TextField id="full-width" placeholder="Type your question here" fullWidth margin="normal" style={{marginBottom:30, border:0}}
                                    InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            Q1
                                          </InputAdornment>
                                        ),
                                      }}
                                    />
                                    <TextField id="full-width" placeholder="Type your question here" fullWidth margin="normal" style={{marginBottom:30, border:0}}
                                    InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            Q2
                                          </InputAdornment>
                                        ),
                                      }}
                                    />
                                </Card.Body>
                            </Card>
                        </div>
                        :
                        null
                        }
                        {questions ? <div style={{overflowY:'scroll', maxHeight:400}} >{questions}</div> : null} 
                    </div>
                </div>
            </div>
        </body>
       </>
   )
}

export default ScheduleExam