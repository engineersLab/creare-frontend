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
                <div style={{marginRight:70, marginTop:10, marginLeft:30}}>
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
                    <div style={{marginBottom:10}} className='d-flex flex-column flex-md-row'>
                        <input name='option' type='radio' value='1' style={{marginTop:10}} checked={option==='1'} onChange={()=>setOption('1')} />
                        <TextField id="standard-full-width" placeholder="Option 1" fullWidth style={{marginLeft:20}}/>  
                    </div>
                    <div style={{marginBottom:10}} className='d-flex flex-column flex-md-row'>
                        <input name='option' type='radio' value='2' style={{marginTop:10}} checked={option==='2'} onChange={()=>setOption('2')} />
                        <TextField id="standard-full-width" placeholder="Option 2" fullWidth style={{marginLeft:20}} />  
                    </div>
                    <div style={{marginBottom:10}} className='d-flex flex-column flex-md-row'>
                        <input name='option' type='radio' value='3' style={{marginTop:10}} checked={option==='3'} onChange={()=>setOption('3')} />
                        <TextField id="standard-full-width" placeholder="Option 3" fullWidth style={{marginLeft:20}}/>  
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
            <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                <span style={{display:'inline-block'}} >
                    <h4 style={{marginLeft:50, marginTop:50}} >Prepare Exam Q/A</h4>
                </span>
                <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                    <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Preview</Button>
                    <Button variant='dark' style={{paddingRight:30,paddingLeft:30}}>Publish</Button>
                </span>
            </div>

            <div style={{marginBottom:50}}>
                <div className='row' >
                    <div className='col col-md-4' >

                        <div style={{marginLeft:70, marginTop:50, marginRight:30}}>
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
                        
                        <div style={{marginLeft:70, marginTop:50, marginRight:30}}>
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

                        <div style={{marginLeft:70, marginTop:50, marginRight:30}}>
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

                        <div style={{marginLeft:70, marginTop:50, marginRight:30}}>
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

                        <div style={{marginLeft:70, marginTop:50, marginRight:30}}>
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


                    <div className='col col-md-8'>
                        <div style={{marginRight:70, marginTop:50, marginLeft:30}}>
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
                            <div style={{marginRight:70, marginTop:50, marginLeft:30}}>
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
                        <div style={{marginRight:70, marginTop:50, marginLeft:30}}>
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