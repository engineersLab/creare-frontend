import $ from 'jquery'

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
                        <img src={sidebarLogo} class="img-fluid"/>
                    </div>
                    
                    <ul className='list_unstyled components' >
                        <li class='active'>
                        <div id="sidebar-text" style={{textAlign:'center',paddingTop:30}} >
                            <img src={home} class="img-fluid"/>
                            <span>Home</span>
                        </div>
                        </li>
                        <li>
                        <div id="sidebar-text" style={{textAlign:'center',paddingTop:40}} >
                            <img src={plus} class="img-fluid"/>
                            <span>Add Event</span>
                        </div>
                        </li>
                        <li>
                        <div id="sidebar-text" style={{textAlign:'center',paddingTop:40}} >
                            <img src={vector} class="img-fluid"/>
                            <span>Reminder</span>
                        </div>
                        </li>
                        <li>
                        <div id="sidebar-text" style={{textAlign:'center',paddingTop:40}} >
                            <img src={bell} class="img-fluid"/>
                            <span>Notification</span>
                        </div>
                        </li>
                        <li>
                        <div id="sidebar-text" style={{textAlign:'center',paddingTop:40}} >
                            <img src={settings} class="img-fluid"/>
                            <span>Settings</span>
                        </div>
                        </li>
                    </ul>  
                </nav>   
                <div id='content' >
                    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
                        <div className='container-fluid'>
                            <button type='button' id='sidebarCollapse' class='btn btn-info' onClick={()=>$("#sidebar").toggleClass("active")}>
                            <i class='fas fa-align-left'></i>
                            </button>        
                        </div>
                    </nav>
                </div>  
            </div>        
         
    )
}
