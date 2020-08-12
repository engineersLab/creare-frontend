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

                <body style={{overflowX:'hidden'}} >
                    <div style={{display:'block', width:'100%', height:120}} className={utilStyles.header_shadow}>
                        <span style={{display:'inline-block'}} >
                            <h3 style={{marginLeft:55, marginTop:50}} >Reports</h3>
                        </span>
                        <span style={{display:'inline-block', float:'right',marginRight:50, marginTop:50}} >
                            <Button variant='outline-dark' style={{paddingRight:30,paddingLeft:30, marginRight:30}} >Download</Button> 
                            {/* <Button variant='dark' style={{paddingRight:30,paddingLeft:30}}>Create Remainder</Button>  */}
                        </span>
                    </div>

                    <div>
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