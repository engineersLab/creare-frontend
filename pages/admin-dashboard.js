import Sidebar from '../components/sidebar'
import Head from 'next/head'
import {Card, Button,} from 'react-bootstrap'
import utilStyles from '../components/utilStyles.module.css'


export default function AdminDashboard(){
    return(
        <>
            <Head>
                <title>Admin</title>
            </Head>
            {/* <Sidebar/> */}
            
            <body style={{overflowX:'hidden'}} >
                <div className='cus-header-shadow cus-desktop-header'>
                    <div className='cus-header-content cus-header-start'>
                        <h3>Admin</h3>
                    </div>
                </div>
           
                <div className='cus-mobile-header text-center'>
                    <h5 className='cus-mobile-header-padding'>Admin</h5>
                    <hr className='my-4'/>
                </div>

                <div>
                     <div className='row cus-top-margin'>
                         <div className='col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className='cus-card-shadow cus-pointer'>
                                 <Card.Body className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>11</b></h1>
                                     <p>No of Teachers</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                         <div className='col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className='cus-card-shadow cus-pointer'>
                                 <Card.Body  className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>06</b></h1>
                                     <p>No of Subjects</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                         <div className='col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className='cus-card-shadow cus-pointer'>
                                 <Card.Body className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>11</b></h1>
                                     <p>No of Teachers</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                         <div className='col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className='cus-card-shadow cus-pointer'>
                                 <Card.Body  className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>06</b></h1>
                                     <p>No of Subjects</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                     </div>

                     <div className='row cus-top-margin cus-bottom-margin'>
                         <div className='col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className='cus-card-shadow cus-pointer'>
                                 <Card.Body className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>107</b></h1>
                                     <p>No of Videos</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                         <div className='col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className='cus-card-shadow cus-pointer'>
                                 <Card.Body className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>05</b></h1>
                                     <p>No of Handouts</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                         <div className='col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className='cus-card-shadow cus-pointer'>
                                 <Card.Body className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>10</b></h1>
                                     <p>No of Syllabus</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                         <div className='col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className='cus-card-shadow cus-pointer'>
                                 <Card.Body className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>23</b></h1>
                                     <p>No of Seminars</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                     </div>
                </div>
            </body>
        </>
    )
}


