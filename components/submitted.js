import Head from 'next/head'
import { Card} from 'react-bootstrap'
import utilStyles from './utilStyles.module.css'

const success = require('../public/assets/examSub.svg')


const Submitted = ({type}) =>{
    return(
        <>
            <Head>
                <title>Upload</title>
            </Head>
            <body>
                <div className='cus-header-shadow cus-desktop-header'>
                    <div className='cus-header-content cus-header-start-2'>
                        <h3>Uploaded Successfully</h3>
                    </div>
                </div>
        
                <div className='cus-mobile-header text-center'>
                    <h5 className='cus-mobile-header-padding'>Uploaded Successfully</h5>
                    <hr className='my-4'/>
                </div>

                <div className='d-flex justify-content-center align-items-center'>
                    <Card className='cus-top-margin cus-desktop-width cus-horizontal-spacing cus-card-shadow' >
                        <Card.Body>
                            <div style={{textAlign:'center', padding:30}} >
                                <img style={{marginBottom:20}} src={success} className='img-fluid'/>
                                <p style={{color:'gray'}} >You can preview it under Workspace -> {type}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                
            </body>
        </>
    )
}

export default Submitted