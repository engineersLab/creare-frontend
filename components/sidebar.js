import $ from 'jquery'
import Link from 'next/link'
const sidebarLogo = require('../public/assets/sideBarLogo.svg')
const home = require('../public/assets/home.svg')
const plus = require('../public/assets/plus.svg')
const vector = require('../public/assets/vector.svg')
const bell = require('../public/assets/bell.svg')
const settings = require('../public/assets/settings.svg')

export default function sidebar(){

    return(      
            <div className='wrapper'>
            <nav id='sidebar'>
                    <div style={{textAlign:'center',paddingTop:20}} >
                        <img src={sidebarLogo} className="img-fluid"/>
                    </div>
                    
                    <ul className='list_unstyled components' >
                        <li className='active'>
                        <div id="sidebar-text" style={{textAlign:'center',paddingTop:30}} >
                            <img src={home} className="img-fluid"/>
                            <span>Home</span>
                        </div>
                        </li>
                        <li>
                        <div id="sidebar-text" style={{textAlign:'center',paddingTop:40}} >
                            <img src={plus} className="img-fluid"/>
                            <span>Add Event</span>
                        </div>
                        </li>
                        <li>
                        <div id="sidebar-text" style={{textAlign:'center',paddingTop:40}} >
                            <img src={vector} className="img-fluid"/>
                            <span>Reminder</span>
                        </div>
                        </li>
                        <li>
                        <div id="sidebar-text" style={{textAlign:'center',paddingTop:40}} >
                            <img src={bell} className="img-fluid"/>
                            <span>Notification</span>
                        </div>
                        </li>
                        <li>
                        <div id="sidebar-text" style={{textAlign:'center',paddingTop:40}} >
                            <img src={settings} className="img-fluid"/>
                            <span>Settings</span>
                        </div>
                        </li>
                    </ul>  
                </nav>   
                <div id='content' >
                    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                        <div className='sidebar-content'>
                            <div className='container-fluid'>
                                <button type='button' id='sidebarCollapse' className='btn btn-info' onClick={()=>$("#sidebar").toggleclassName("active")}>
                                <i className='fas fa-align-left'></i>
                                </button>        
                            </div>
                        </div>
                        
                    </nav>
                </div>  
            </div>        
         
    )
}
