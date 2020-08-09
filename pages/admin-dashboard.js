import Sidebar from '../components/sidebar'
import Head from 'next/head'
import {Card, Button,} from 'react-bootstrap'


export default function AdminDashboard(){
    return(
        <>
            <Head>
                <title>Admin</title>
            </Head>
            <Sidebar/>
            <body style={{background:'#e5e5e5',marginRight:50, overflowX:'hidden'}}> 
                <div style={{width:'100%',display:'inline-block', marginLeft:50, marginRight:50}} >
                    <div style={{marginTop:50}}>
                        <h3 style={{marginLeft:135}} >Home</h3>
                    </div>
                    <div style={{marginBottom:20}} className='d-flex justify-content-center' >  
                        <Card style={{height:250, width:300 }} >
                            <Card.Body className='d-flex align-items-center justify-content-center' >
                                <div style={{textAlign:'center'}}>
                                <h1><b>70</b></h1>
                                <p>No of Students</p>
                                </div>
                            </Card.Body>
                        </Card>  
                    </div>
                    <div style={{marginBottom:20}} className='row '>
                        <div style={{marginLeft:100}} className='col d-flex justify-content-center'>
                            <Card style={{height:210, width:270 }}>
                                <Card.Body className='d-flex align-items-center justify-content-center'>
                                    <div style={{textAlign:'center'}}>
                                    <h1><b>11</b></h1>
                                    <p>No of Teachers</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div style={{marginRight:100}} className='col d-flex justify-content-center'>
                            <Card style={{height:210, width:270 }}>
                                <Card.Body  className='d-flex align-items-center justify-content-center'>
                                    <div style={{textAlign:'center'}}>
                                    <h1><b>06</b></h1>
                                    <p>No of Subjects</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div style={{marginBottom:20}} className='row'>
                        <div className='col d-flex justify-content-center'>
                            <Card style={{height:200, width:250 }}>
                                <Card.Body className='d-flex align-items-center justify-content-center'>
                                    <div style={{textAlign:'center'}}>
                                    <h1><b>107</b></h1>
                                    <p>No of Videos</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <Card style={{height:200, width:250 }}>
                                <Card.Body className='d-flex align-items-center justify-content-center'>
                                    <div style={{textAlign:'center'}}>
                                    <h1><b>05</b></h1>
                                    <p>No of Handouts</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <Card style={{height:200, width:250 }}>
                                <Card.Body className='d-flex align-items-center justify-content-center'>
                                    <div style={{textAlign:'center'}}>
                                    <h1><b>10</b></h1>
                                    <p>No of Syllabus</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <Card style={{height:200, width:250 }}>
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
