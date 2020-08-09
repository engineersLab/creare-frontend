import Head from 'next/head'
import { Card} from 'react-bootstrap'
import utilStyles from '../../components/utilStyles.module.css'

const success = require('../../public/assets/success.svg')


const PublishExam = () =>{
    return(
        <>
            <Head>
                <title>Publish Exam</title>
            </Head>
            <body>
                <div>
                    <div style={{position:'absolute', display:'block',width:'100%', top:'30%'}} className='d-flex justify-content-center' >
                        <Card className={utilStyles.card} style={{width:'40%'}} >
                            <Card.Body>
                                <div style={{textAlign:'center', padding:30}} >
                                    <img style={{marginBottom:20}} src={success} className='img-fluid'/>
                                    <p style={{color:'gray'}} >You can preview it under Workspace -> Exams</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                
            </body>
        </>
    )
}

export default PublishExam