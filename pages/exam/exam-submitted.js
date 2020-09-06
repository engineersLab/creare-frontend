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
            <body >
                <div className='cus-header-shadow cus-desktop-header'>
                    <div className='cus-header-content cus-header-start-2'>
                        <h3>Science Exam</h3>
                    </div>
                </div>
        
                <div className='cus-mobile-header text-center'>
                    <h5 className='cus-mobile-header-padding'>Science Exam</h5>
                    <hr className='my-4'/>
                </div>

                <div className='d-flex justify-content-center align-items-center'>
                    <Card className='cus-top-margin cus-desktop-width cus-horizontal-spacing cus-card-shadow'>
                        <Card.Body>
                            <div style={{textAlign:'center', padding:30}} >
                                <img style={{marginBottom:20}} src={success} className='img-fluid'/>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </body>
        </>
    )
}

export default SubmitExam