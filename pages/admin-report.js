import {Card, Button, DropdownButton, Dropdown, Table} from 'react-bootstrap'
import Head from 'next/head'
import utilStyles from '../components/utilStyles.module.css'
import {TextField, InputBase} from '@material-ui/core'



const AdminReport = () =>{

    return(
            <>
                <Head>
                    <title>Report</title>
                </Head>

                <body>
                    <div className='cus-header-shadow cus-desktop-header'>
                        <div className='cus-header-content cus-header-start'>
                            <h3>Reports</h3>
                        </div>
                        <div className='cus-header-content cus-header-end'>
                            <Button variant='outline-dark' style={{marginRight:20}} >Download</Button>
                        </div>
                    </div>
            
                    <div className='cus-mobile-header text-center'>
                        <h5 className='cus-mobile-header-padding'>Reports</h5>
                        <hr className='my-4'/>
                    </div>

                    <div className='cus-mobile-view'>
                        <div style={{marginTop:30, marginLeft:30, marginRight:30}}>
                            <Table striped bordered hover variant="light">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th><InputBase 
                                            inputProps={{ 'aria-label': 'naked' }}  
                                            id="standard-basic" placeholder='Name' /></th>
                                        <th>School Name</th>
                                        <th>Performance</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>90</td>
                                        <td style={{color:'green'}} >Active</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>85</td>
                                        <td style={{color:'red'}} >InActive</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td >Larry</td>
                                        <td>Thornton</td>
                                        <td>95</td>
                                        <td style={{color:'red'}} >InActive</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </body>
            </>
    )
}

export default AdminReport