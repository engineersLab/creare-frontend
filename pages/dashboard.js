import Sidebar from '../../components/sidebar'
import Head from 'next/head'


export default function dashboard(){
    return(
        <div>
            <Head>
            <title>Dash</title>
            </Head>
            <Sidebar/>
            <body>
                <div style={{textAlign:'center'}}>
                <h1>Dashboard</h1>
                </div>
            </body>
        
        </div>    
    )
}