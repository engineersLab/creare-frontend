import Head from 'next/head'
import { Card, Button} from 'react-bootstrap'
import utilStyles from '../../components/utilStyles.module.css'

const success = require('../../public/assets/examSub.svg')


const SubmitExam = () =>{
    return(
        <>
            <Head>
                <title>Submitted Exam</title>
            </Head>
            <body>
                <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                    <span style={{display:'inline-block'}} >
                        <h4 style={{marginLeft:50, marginTop:50}} >Science Exam</h4>
                    </span>
                    <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                        {/* <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Preview</Button> */}
                        {/* <Button variant='dark' style={{paddingRight:30,paddingLeft:30}}>Submit</Button> */}
                    </span>
                </div>

                <div>
                    <div style={{position:'absolute', display:'block',width:'100%', top:'30%'}} className='d-flex justify-content-center' >
                        <Card className={utilStyles.card} style={{width:'40%'}} >
                            <Card.Body>
                                <div style={{textAlign:'center', padding:30}} >
                                    <img style={{marginBottom:20}} src={success} className='img-fluid'/>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                
            </body>
        </>
    )
}

export default SubmitExam