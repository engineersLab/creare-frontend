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
                <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                    <span style={{display:'inline-block'}} >
                        <h3 style={{marginLeft:55, marginTop:50}} >Admin</h3>
                    </span>
                    {/* <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                        <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Preview</Button> 
                        <Button variant='dark' style={{paddingRight:30,paddingLeft:30}}>Create Remainder</Button> 
                    </span> */}
                </div>

                <div>
                    {/* <div style={{marginTop:30,marginBottom:20}} className='d-flex justify-content-center' >  
                         <Card style={{height:250, width:300 }} className={utilStyles.card} >
                             <Card.Body className='d-flex align-items-center justify-content-center' >
                                 <div style={{textAlign:'center'}}>
                                 <h1><b>70</b></h1>
                                 <p>No of Students</p>
                                 </div>
                             </Card.Body>
                         </Card>  
                     </div> */}
                     <div style={{marginBottom:20, marginTop:50, marginLeft:100, marginRight:100}} className='row '>
                         <div className='col d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className={utilStyles.card}>
                                 <Card.Body className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>11</b></h1>
                                     <p>No of Teachers</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                         <div className='col d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className={utilStyles.card}>
                                 <Card.Body  className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>06</b></h1>
                                     <p>No of Subjects</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                         <div className='col d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className={utilStyles.card}>
                                 <Card.Body className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>11</b></h1>
                                     <p>No of Teachers</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                         <div className='col d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className={utilStyles.card}>
                                 <Card.Body  className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>06</b></h1>
                                     <p>No of Subjects</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                     </div>

                     <div style={{marginBottom:20, marginLeft:100, marginRight:100}} className='row'>
                         <div className='col d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className={utilStyles.card}>
                                 <Card.Body className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>107</b></h1>
                                     <p>No of Videos</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                         <div className='col d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className={utilStyles.card}>
                                 <Card.Body className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>05</b></h1>
                                     <p>No of Handouts</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                         <div className='col d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className={utilStyles.card}>
                                 <Card.Body className='d-flex align-items-center justify-content-center'>
                                     <div style={{textAlign:'center'}}>
                                     <h1><b>10</b></h1>
                                     <p>No of Syllabus</p>
                                     </div>
                                 </Card.Body>
                             </Card>
                         </div>
                         <div className='col d-flex justify-content-center'>
                             <Card style={{height:200, width:250 }} className={utilStyles.card}>
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


